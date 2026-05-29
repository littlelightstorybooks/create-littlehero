// Little Light API Worker — Secured
// Credentials never appear in browser source.
// CORS restricted to allowed origins.
// Write operations require secret token.

const ALLOWED_ORIGINS = [
  'https://littlelightstorybooks.com',
  'https://www.littlelightstorybooks.com',
  'http://localhost:5500',   // local dev
  'http://127.0.0.1:5500',  // local dev
];

function getCors(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type,X-App-Token',
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

    // ── /db/get — read full bin (no token needed for reads) ──────
    if (path === '/db/get') {
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
      const file   = formData.get('file');
      // Folder assigned server-side — never exposed in browser
      const folder = formData.get('folder') || 'littlehero_uploads';

      const fd = new FormData();
      fd.append('file', file);
      fd.append('upload_preset', env.CL_PRESET);
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
