// Little Light API Worker — Secured
// Credentials never appear in browser source.
// CORS restricted to allowed origins.
// Write operations require secret token.

const ALLOWED_ORIGINS = [
  'https://littlelightstorybooks.github.io',
  'https://littlelightstorybooks.com',
  'https://www.littlelightstorybooks.com',
  'http://localhost:5500',
  'http://127.0.0.1:5500',
];

function getCors(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type,X-App-Token,X-Bin-Versioning',
    'Vary': 'Origin',
  };
}

export default {
  async fetch(request, env) {
    const url    = new URL(request.url);
    const path   = url.pathname;
    const origin = request.headers.get('Origin') || '';
    const cors   = getCors(origin);

    // Preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors });
    }

    // ── Token check for ALL write operations ─────────────────────
    // X-App-Token must match APP_TOKEN secret set in Worker env vars
    function requireToken() {
      const token = request.headers.get('X-App-Token');
      if (!token || token !== env.APP_TOKEN) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), {
          status: 401,
          headers: { ...cors, 'Content-Type': 'application/json' },
        });
      }
      return null; // OK
    }

    // ── /db/get — read full bin (token required) ─────────────────
    if (path === '/db/get') {
      const deny = requireToken(); if (deny) return deny;
      const res = await fetch(`https://api.jsonbin.io/v3/b/${env.JSONBIN_BIN}/latest`, {
        headers: { 'X-Master-Key': env.JSONBIN_KEY, 'X-Bin-Meta': 'false' },
      });
      const data = await res.text();
      return new Response(data, {
        status: res.status,
        headers: { ...cors, 'Content-Type': 'application/json' },
      });
    }

    // ── /db/put — write full bin (token required) ────────────────
    if (path === '/db/put' && request.method === 'PUT') {
      const deny = requireToken(); if (deny) return deny;
      const body = await request.text();
      const res = await fetch(`https://api.jsonbin.io/v3/b/${env.JSONBIN_BIN}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': env.JSONBIN_KEY,
          'X-Bin-Meta': 'false',
        },
        body,
      });
      const data = await res.text();
      return new Response(data, {
        status: res.status,
        headers: { ...cors, 'Content-Type': 'application/json' },
      });
    }

    // ── /upload — Cloudinary image upload (token required) ───────
    if (path === '/upload' && request.method === 'POST') {
      const deny = requireToken(); if (deny) return deny;
      const formData = await request.formData();
      const file       = formData.get('file');
      const uploadType = formData.get('uploadType') || 'template';

      // Force folder server-side based on upload type
      // Customer uploads go to a dedicated folder for easy management/cleanup
      const FOLDERS = {
        'customer-photo':      'littlehero_uploads/customers',
        'customer-screenshot': 'littlehero_uploads/customers',
      };
      // Use customer preset for customer uploads, default preset for templates
      const isCustomer = uploadType === 'customer-photo' || uploadType === 'customer-screenshot';
      const preset  = isCustomer ? 'littlehero_customer' : env.CL_PRESET;
      const folder  = FOLDERS[uploadType] || formData.get('folder') || 'littlehero_uploads/templates';

      const fd = new FormData();
      fd.append('file', file);
      fd.append('upload_preset', preset);
      fd.append('folder', folder);

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${env.CL_CLOUD}/image/upload`,
        { method: 'POST', body: fd }
      );
      const data = await res.text();
      return new Response(data, {
        status: res.status,
        headers: { ...cors, 'Content-Type': 'application/json' },
      });
    }

    // ── /capi — Meta Conversions API (server-side Purchase event) ─
    if (path === '/capi' && request.method === 'POST') {
      const deny = requireToken(); if (deny) return deny;
      const body = await request.json();

      // Build CAPI event payload
      const eventData = {
        data: [{
          event_name:  'Purchase',
          event_time:  Math.floor(Date.now() / 1000),
          event_id:    body.ref || ('ev_' + Date.now()),
          action_source: 'website',
          event_source_url: body.url || '',
          user_data: {
            client_ip_address: request.headers.get('CF-Connecting-IP') || '',
            client_user_agent: request.headers.get('User-Agent') || '',
            fbc:  body.fbc || '',
            fbp:  body.fbp || '',
          },
          custom_data: {
            currency: 'PHP',
            value:    body.value || 0,
            order_id: body.ref  || '',
          },
        }],
      };

      // Only add test_event_code if provided
      if (body.testCode) eventData.test_event_code = body.testCode;

      const res = await fetch(
        `https://graph.facebook.com/v19.0/${env.META_PIXEL_ID}/events?access_token=${env.META_ACCESS_TOKEN}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(eventData),
        }
      );
      const data = await res.text();
      return new Response(data, {
        status: res.status,
        headers: { ...cors, 'Content-Type': 'application/json' },
      });
    }

    // ── /samples/get — fetch samples bin ─────────────────────────
    if (path === '/samples/get' && request.method === 'GET') {
      const deny = requireToken(); if (deny) return deny;
      const res = await fetch('https://api.jsonbin.io/v3/b/6a1bb2e5ddf5aa59f77a8410/latest', {
        headers: { 'X-Master-Key': env.JSONBIN_KEY, 'X-Bin-Meta': 'false' },
      });
      const data = await res.text();
      return new Response(data, {
        status: res.status,
        headers: { ...cors, 'Content-Type': 'application/json' },
      });
    }

    // ── /samples/put — save samples bin ──────────────────────────
    if (path === '/samples/put' && request.method === 'PUT') {
      const deny = requireToken(); if (deny) return deny;
      const body = await request.text();
      const res = await fetch('https://api.jsonbin.io/v3/b/6a1bb2e5ddf5aa59f77a8410', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': env.JSONBIN_KEY,
          'X-Bin-Meta': 'false',
        },
        body,
      });
      const data = await res.text();
      return new Response(data, {
        status: res.status,
        headers: { ...cors, 'Content-Type': 'application/json' },
      });
    }

    // ── /config — public config only (no secrets) ────────────────
    if (path === '/config') {
      return new Response(JSON.stringify({ cl_cloud: env.CL_CLOUD }), {
        status: 200,
        headers: { ...cors, 'Content-Type': 'application/json' },
      });
    }

    return new Response('Not found', { status: 404, headers: cors });
  },
};
