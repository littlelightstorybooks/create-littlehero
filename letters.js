// ═══════════════════════════════════════════════════════════════
// LITTLE LIGHT — letters.js
// Default A–Z meanings (5 per letter)
// Gender-neutral, child-friendly (readability level 3)
// Format: blessing title, 4-line rhyme + personal message, Bible verse
// Edit via Admin Panel → Letters A–Z
// ═══════════════════════════════════════════════════════════════
var DEFAULT_MEANINGS = {
  A:[
    {
      title:"A – Anointed",
      text:"Anointed {{babyname}}, set apart with care,\nGod's hand is on you, always there.\nHis light shines through you every day,\nIn all you do and all you say.\n\n{{babyname}}, you were chosen before you even took your first breath.",
      verse:"\"Before I formed you, I knew you.\" - Jeremiah 1:5"
    },
    {
      title:"A – Adored",
      text:"Adored {{babyname}}, God's precious one,\nYou shine as bright as the morning sun.\nHe holds you close through every night,\nAnd fills your heart with heaven's light.\n\n{{babyname}}, you are loved more than all the stars in the sky.",
      verse:"\"See what great love the Father has lavished on us.\" - 1 John 3:1"
    },
    {
      title:"A – Anchored",
      text:"Anchored {{babyname}}, firm and strong,\nGod holds you safe your whole life long.\nWhen waves are big and winds blow near,\nHis love reminds you not to fear.\n\n{{babyname}}, no matter how big the storm, God will never let you go.",
      verse:"\"We have this hope as an anchor for the soul.\" - Hebrews 6:19"
    },
    {
      title:"A – Alive",
      text:"Alive in Jesus, {{babyname}}, every day,\nGod breathed His life in you to stay.\nYou bloom and grow beneath His care,\nHis joy and peace are always there.\n\n{{babyname}}, every morning is God's gift just for you.",
      verse:"\"In Him we live and move and have our being.\" - Acts 17:28"
    },
    {
      title:"A – Amazing",
      text:"Amazing {{babyname}}, wonderfully made,\nIn God's great love you are not afraid.\nHe crafted you with gentle hands,\nAnd placed you right in His good plans.\n\n{{babyname}}, there is nobody else in the world exactly like you.",
      verse:"\"I praise you because I am fearfully and wonderfully made.\" - Psalm 139:14"
    }
  ],
  B:[
    {
      title:"B – Beloved",
      text:"Beloved {{babyname}}, cherished and dear,\nGod holds you close, have no fear.\nHis love surrounds you every day,\nGuiding your steps along the way.\n\n{{babyname}}, you are deeply loved by the One who created the stars.",
      verse:"\"I have loved you with an everlasting love.\" - Jeremiah 31:3"
    },
    {
      title:"B – Blessed",
      text:"Blessed {{babyname}}, favored and bright,\nGod pours His goodness, day and night.\nEvery good thing comes from above,\nWrapped up in His endless love.\n\n{{babyname}}, count your blessings and you will always find God there.",
      verse:"\"Every good and perfect gift is from above.\" - James 1:17"
    },
    {
      title:"B – Brave",
      text:"Brave {{babyname}}, bold and true,\nGod is always close to you.\nWhen your heart feels scared inside,\nIn His strength you can abide.\n\n{{babyname}}, real courage means knowing God is holding your hand.",
      verse:"\"Be strong and courageous. Do not be afraid.\" - Joshua 1:9"
    },
    {
      title:"B – Bright",
      text:"Bright {{babyname}}, shining like a star,\nGod's own light is who you are.\nLet your kindness warm each place,\nAs you show the world His grace.\n\n{{babyname}}, your smile can light up a whole room and that is God's gift.",
      verse:"\"You are the light of the world.\" - Matthew 5:14"
    },
    {
      title:"B – Breathtaking",
      text:"Breathtaking {{babyname}}, made with love,\nA beautiful gift from God above.\nHe designed each part of you with care,\nFrom your tiny toes to your soft hair.\n\n{{babyname}}, when God made you, He smiled because you were just right.",
      verse:"\"You are altogether beautiful, my darling.\" - Song of Solomon 4:7"
    }
  ],
  C:[
    {
      title:"C – Chosen",
      text:"Chosen {{babyname}}, picked with love,\nHand-selected from above.\nGod saw you and said yes to you,\nIn everything you say and do.\n\n{{babyname}}, being chosen by God is the greatest honor of all.",
      verse:"\"You did not choose me, but I chose you.\" - John 15:16"
    },
    {
      title:"C – Courageous",
      text:"Courageous {{babyname}}, standing tall,\nGod will catch you if you fall.\nHe gives strength for every day,\nAnd walks beside you all the way.\n\n{{babyname}}, the bravest thing you can do is trust God completely.",
      verse:"\"The Lord is my strength and my shield.\" - Psalm 28:7"
    },
    {
      title:"C – Cherished",
      text:"Cherished {{babyname}}, held so near,\nIn God's arms you have no fear.\nHe treasures every part of you,\nYour laugh, your heart, your spirit too.\n\n{{babyname}}, you are not just loved, you are treasured beyond measure.",
      verse:"\"The Lord your God is with you, He is mighty to save.\" - Zephaniah 3:17"
    },
    {
      title:"C – Complete",
      text:"Complete {{babyname}}, whole in His grace,\nGod put a smile on your face.\nNothing is missing, nothing forgot,\nYou are exactly what He has got.\n\n{{babyname}}, God did not make a mistake when He made you.",
      verse:"\"For in Christ all the fullness of God lives.\" - Colossians 2:9"
    },
    {
      title:"C – Crowned",
      text:"Crowned {{babyname}}, royalty indeed,\nA child of God is all you need.\nHis Kingdom claims you as its own,\nA precious heir upon His throne.\n\n{{babyname}}, you belong to the King of kings and that makes you royalty.",
      verse:"\"You are a chosen people, a royal priesthood.\" - 1 Peter 2:9"
    }
  ],
  D:[
    {
      title:"D – Destined",
      text:"Destined {{babyname}}, made for great things,\nSee how your heart already sings.\nGod wrote your story long ago,\nAnd watches proudly as you grow.\n\n{{babyname}}, your life has a purpose bigger than you can imagine.",
      verse:"\"For we are God's handiwork, created to do good works.\" - Ephesians 2:10"
    },
    {
      title:"D – Delightful",
      text:"Delightful {{babyname}}, full of cheer,\nGod rejoices when you are near.\nYour laughter fills the room with song,\nA joy that God has had all along.\n\n{{babyname}}, the sound of your laugh makes heaven smile.",
      verse:"\"God delights in those who put their hope in His unfailing love." - Psalm 147:11"
    },
    {
      title:"D – Devoted",
      text:"Devoted {{babyname}}, faithful and true,\nGod has great things planned just for you.\nA heart that seeks Him every day,\nWill never ever lose its way.\n\n{{babyname}}, a heart close to God is the richest heart of all.",
      verse:"\"Love the Lord your God with all your heart.\" - Mark 12:30"
    },
    {
      title:"D – Dazzling",
      text:"Dazzling {{babyname}}, bright as the sun,\nGod's greatest masterpiece, His special one.\nHe painted you with colors rare,\nA one-of-a-kind beyond compare.\n\n{{babyname}}, God took His time when He made you because you are worth it.",
      verse:"\"God is the master builder, and you are His finest work." - Psalm 92:4"
    },
    {
      title:"D – Defended",
      text:"Defended {{babyname}}, safe in His care,\nGod is your shield beyond compare.\nNo trouble comes that He won't face,\nHe guards you with His loving grace.\n\n{{babyname}}, you never walk alone because God always walks ahead of you.",
      verse:"\"The Lord will fight for you.\" - Exodus 14:14"
    }
  ],
  E:[
    {
      title:"E – Eternal",
      text:"Eternal {{babyname}}, loved forever,\nGod's bond with you will break up never.\nHis promises will always stand,\nHe holds your future in His hand.\n\n{{babyname}}, God's love for you has no beginning and no end.",
      verse:"\"The eternal God is your refuge.\" - Deuteronomy 33:27"
    },
    {
      title:"E – Empowered",
      text:"Empowered {{babyname}}, strong inside,\nWith God's great Spirit as your guide.\nHe fills you up with strength each day,\nTo do good things along the way.\n\n{{babyname}}, with God beside you, there is nothing too hard for you.",
      verse:"\"I can do all things through Christ who strengthens me.\" - Philippians 4:13"
    },
    {
      title:"E – Exalted",
      text:"Exalted {{babyname}}, lifted high,\nGod raises you up to touch the sky.\nHe sees your worth, He knows your name,\nThrough every season, still the same.\n\n{{babyname}}, when you feel small, remember God lifts you higher than you know.",
      verse:"\"Humble yourselves before the Lord, and He will lift you up.\" - James 4:10"
    },
    {
      title:"E – Embraced",
      text:"Embraced {{babyname}}, wrapped up tight,\nIn God's warm arms both day and night.\nHe never lets you feel alone,\nHis love has made your heart a home.\n\n{{babyname}}, whenever you need a hug, God's arms are always open.",
      verse:"\"Cast all your anxiety on Him because He cares for you.\" - 1 Peter 5:7"
    },
    {
      title:"E – Exceptional",
      text:"Exceptional {{babyname}}, one of a kind,\nA treasure only God could find.\nHe made you unlike all the rest,\nAnd placed in you His very best.\n\n{{babyname}}, there has never been and will never be another you.",
      verse:"\"For you created my inmost being.\" - Psalm 139:13"
    }
  ],
  F:[
    {
      title:"F – Favored",
      text:"Favored {{babyname}}, blessed each day,\nGod's grace goes with you all the way.\nHe showers kindness from above,\nAnd wraps you in His perfect love.\n\n{{babyname}}, God's favor over you is greater than anything this world can give.",
      verse:"\"For surely, Lord, you bless the righteous.\" - Psalm 5:12"
    },
    {
      title:"F – Faithful",
      text:"Faithful {{babyname}}, true and strong,\nGod's promises carry you along.\nHe keeps each word He's ever said,\nAnd places blessings just ahead.\n\n{{babyname}}, trust God even when you cannot see what is coming next.",
      verse:"\"The Lord is faithful to all His promises.\" - Psalm 145:13"
    },
    {
      title:"F – Fearless",
      text:"Fearless {{babyname}}, bold and bright,\nGod has given you His light.\nWhen darkness comes and shadows grow,\nHis peace inside will always glow.\n\n{{babyname}}, fear has no place in a heart filled with God's love.",
      verse:"\"Perfect love drives out fear.\" - 1 John 4:18"
    },
    {
      title:"F – Forgiven",
      text:"Forgiven {{babyname}}, fresh and new,\nGod's mercy falls like morning dew.\nNo mistake is ever too great,\nHis grace arrives before it's late.\n\n{{babyname}}, God's forgiveness is bigger than any wrong you could ever do.",
      verse:"\"As far as the east is from the west, so far has He removed our sins.\" - Psalm 103:12"
    },
    {
      title:"F – Flourishing",
      text:"Flourishing {{babyname}}, growing tall,\nGod is with you through it all.\nLike a tree beside a stream,\nYou are living out God's dream.\n\n{{babyname}}, keep your roots deep in God and you will always grow.",
      verse:"\"They will be like a tree planted by the water.\" - Jeremiah 17:8"
    }
  ],
  G:[
    {
      title:"G – Guided",
      text:"Guided {{babyname}}, led by love,\nGod directs your steps from above.\nEvery turn and every road,\nHe helps carry every load.\n\n{{babyname}}, when you don't know which way to go, God always does.",
      verse:"\"I will instruct you and teach you in the way you should go.\" - Psalm 32:8"
    },
    {
      title:"G – Gracious",
      text:"Gracious {{babyname}}, kind at heart,\nGod's own grace sets you apart.\nHe pours His mercy fresh each day,\nAnd grace flows freely all the way.\n\n{{babyname}}, grace is God saying I love you no matter what.",
      verse:"\"For the Lord God is a sun and shield; He bestows favor and honor.\" - Psalm 84:11"
    },
    {
      title:"G – Glorious",
      text:"Glorious {{babyname}}, made to shine,\nYou carry light that is divine.\nGod placed His glory deep inside,\nA treasure nothing else can hide.\n\n{{babyname}}, the way you live can show the world how beautiful God is.",
      verse:"\"Let your light shine before others, that they may see your good deeds.\" - Matthew 5:16"
    },
    {
      title:"G – Gifted",
      text:"Gifted {{babyname}}, full of talent rare,\nGod placed His goodness in you there.\nEvery skill and every dream,\nIs bigger than it seems.\n\n{{babyname}}, the gifts God gave you were meant to bless others around you.",
      verse:"\"Each of you should use whatever gift you have received to serve others.\" - 1 Peter 4:10"
    },
    {
      title:"G – Grounded",
      text:"Grounded {{babyname}}, rooted deep,\nGod's promises are yours to keep.\nNothing shakes the one who stands,\nFirmly held in His strong hands.\n\n{{babyname}}, when life feels wobbly, stand on God's Word and you will not fall.",
      verse:"\"Everyone who hears these words of mine and puts them into practice is like a wise man.\" - Matthew 7:24"
    }
  ],
  H:[
    {
      title:"H – Held",
      text:"Held {{babyname}}, safe and sound,\nIn God's arms you are always found.\nHis right hand will never let you go,\nHis love is all you need to know.\n\n{{babyname}}, you are held by the same hands that hold the whole world.",
      verse:"\"I am the Lord your God who takes hold of your right hand.\" - Isaiah 41:13"
    },
    {
      title:"H – Hopeful",
      text:"Hopeful {{babyname}}, eyes on high,\nGod's promises light up the sky.\nHope does not fade or wash away,\nIt shines more brightly every day.\n\n{{babyname}}, hope in God is never wasted, it always leads somewhere good.",
      verse:"\"May the God of hope fill you with all joy and peace.\" - Romans 15:13"
    },
    {
      title:"H – Healed",
      text:"Healed {{babyname}}, made complete,\nGod's love makes broken things so sweet.\nHe mends each part that feels undone,\nAnd makes you whole under the sun.\n\n{{babyname}}, whatever feels hurt in you, God knows how to make it better.",
      verse:"\"He heals the brokenhearted and binds up their wounds.\" - Psalm 147:3"
    },
    {
      title:"H – Holy",
      text:"Holy {{babyname}}, set apart,\nGod has placed His seal on your heart.\nYou are His and He is yours,\nHis love forever endures.\n\n{{babyname}}, holy simply means you belong to God and He belongs to you.",
      verse:"\"You are a holy people, the Lord your God has chosen you.\" - Deuteronomy 7:6"
    },
    {
      title:"H – Heard",
      text:"Heard {{babyname}}, every prayer,\nGod is listening everywhere.\nEvery whisper, every cry,\nReaches straight up to the sky.\n\n{{babyname}}, you never have to wonder if God hears you, He always does.",
      verse:"\"Before they call I will answer; while they are still speaking I will hear.\" - Isaiah 65:24"
    }
  ],
  I:[
    {
      title:"I – Inspired",
      text:"Inspired {{babyname}}, full of life,\nGod breathes in you through joy and strife.\nHis Spirit moves within your heart,\nAnd gives your days a brand new start.\n\n{{babyname}}, God's Spirit inside you is the most powerful thing in the universe.",
      verse:"\"The Spirit of God has made me; the breath of the Almighty gives me life.\" - Job 33:4"
    },
    {
      title:"I – Incredible",
      text:"Incredible {{babyname}}, rare and true,\nGod made something special when He made you.\nNo one else can do what you can do,\nThe world needs the gift that is uniquely you.\n\n{{babyname}}, God does not mass produce people, He handcrafts each one.",
      verse:"\"Your hands made me and formed me; give me understanding." - Psalm 119:73"
    },
    {
      title:"I – Immovable",
      text:"Immovable {{babyname}}, standing strong,\nGod is with you your whole life long.\nWhen the winds of trouble blow,\nHis peace inside will always grow.\n\n{{babyname}}, nothing in this world can move you when God is your foundation.",
      verse:"\"Therefore, my dear brothers and sisters, stand firm. Let nothing move you.\" - 1 Corinthians 15:58"
    },
    {
      title:"I – Invited",
      text:"Invited {{babyname}}, come right in,\nGod opens wide the door for you.\nHis table's set, His arms stretch wide,\nWith Him there's always room inside.\n\n{{babyname}}, God's invitation to you is always open and never expires.",
      verse:"\"Come to me, all you who are weary and burdened, and I will give you rest.\" - Matthew 11:28"
    },
    {
      title:"I – Irreplaceable",
      text:"Irreplaceable {{babyname}}, one of a kind,\nNo one else has your heart or your mind.\nGod made only one you in this place,\nFilled with His love and covered in grace.\n\n{{babyname}}, if you were not here, the world would be missing something beautiful.",
      verse:"\"You have searched me, Lord, and you know me.\" - Psalm 139:1"
    }
  ],
  J:[
    {
      title:"J – Joyful",
      text:"Joyful {{babyname}}, bright inside,\nGod's delight is hard to hide.\nHis joy is not just how you feel,\nIt's deep and steady, strong and real.\n\n{{babyname}}, God's joy in you is something no one can ever take away.",
      verse:"\"The joy of the Lord is your strength.\" - Nehemiah 8:10"
    },
    {
      title:"J – Justified",
      text:"Justified {{babyname}}, made right and whole,\nGod's grace has touched your very soul.\nNot by your works but by His love,\nYou're clean and new from up above.\n\n{{babyname}}, God sees you as perfectly loved because of what Jesus did.",
      verse:"\"Therefore, since we have been justified through faith, we have peace with God.\" - Romans 5:1"
    },
    {
      title:"J – Jewel",
      text:"A jewel, {{babyname}}, precious and rare,\nGod polished you with gentle care.\nYou sparkle bright for all to see,\nA gem of who you're meant to be.\n\n{{babyname}}, God sees something in you more valuable than the rarest diamond.",
      verse:"\"They will be mine, says the Lord Almighty, in the day when I make up my treasured possession.\" - Malachi 3:17"
    },
    {
      title:"J – Journey",
      text:"On a journey, {{babyname}}, led by grace,\nGod walks with you in every place.\nEach step you take is not alone,\nHe guides you gently toward your home.\n\n{{babyname}}, life with God is the greatest adventure you will ever go on.",
      verse:"\"Your word is a lamp for my feet, a light on my path.\" - Psalm 119:105"
    },
    {
      title:"J – Just",
      text:"Just {{babyname}}, honest and true,\nGod loves a heart that shines through you.\nDo what is right, be kind each day,\nAnd let His goodness lead the way.\n\n{{babyname}}, a kind and honest heart is one of the most beautiful things in the world.",
      verse:"\"He has shown you, O mortal, what is good. To act justly and to love mercy.\" - Micah 6:8"
    }
  ],
  K:[
    {
      title:"K – Known",
      text:"Known {{babyname}}, fully seen,\nGod knows every place you've been.\nEvery thought and every dream,\nNothing's hidden, it would seem.\n\n{{babyname}}, being fully known by God and fully loved is the greatest gift.",
      verse:"\"Now I know in part; then I shall know fully, even as I am fully known.\" - 1 Corinthians 13:12"
    },
    {
      title:"K – Kind",
      text:"Kind {{babyname}}, gentle at heart,\nGod's own kindness sets you apart.\nA tender word and caring touch,\nTo others it can mean so much.\n\n{{babyname}}, small acts of kindness can change someone's whole day.",
      verse:"\"Be kind and compassionate to one another, forgiving each other.\" - Ephesians 4:32"
    },
    {
      title:"K – Kept",
      text:"Kept {{babyname}}, safe in His hand,\nGod holds you right where you now stand.\nNothing slips through His strong care,\nHis watchful love is everywhere.\n\n{{babyname}}, God keeps watch over you even when you are fast asleep.",
      verse:"\"He will not let your foot slip, He who watches over you will not slumber.\" - Psalm 121:3"
    },
    {
      title:"K – Kingdom Child",
      text:"A Kingdom child, {{babyname}}, royalty true,\nHeaven's own family includes you.\nGod's Kingdom is your real home,\nYou never have to walk alone.\n\n{{babyname}}, as a child of God you carry the Kingdom everywhere you go.",
      verse:"\"Seek first His kingdom and His righteousness, and all these things will be given to you.\" - Matthew 6:33"
    },
    {
      title:"K – Knit Together",
      text:"Knit together, {{babyname}}, stitch by stitch,\nGod designed you without a glitch.\nEvery detail, every part,\nBegun in love right from the start.\n\n{{babyname}}, God was thinking of you and smiling long before you were born.",
      verse:"\"God forms the spirit of each person within them." - Zechariah 12:1"
    }
  ],
  L:[
    {
      title:"L – Loved",
      text:"Loved {{babyname}}, through and through,\nGod's love is always fresh and new.\nNothing you could ever do,\nWill make Him love you less than true.\n\n{{babyname}}, you are loved on your best days and your worst days all the same.",
      verse:"\"Neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God.\" - Romans 8:39"
    },
    {
      title:"L – Light",
      text:"A light, {{babyname}}, bright and clear,\nGod placed His glow inside you here.\nShine in every room you enter,\nWith His love as your very center.\n\n{{babyname}}, the world is a brighter place simply because you are in it.",
      verse:"\"The Lord is my light and my salvation, whom shall I fear?\" - Psalm 27:1"
    },
    {
      title:"L – Lifted",
      text:"Lifted {{babyname}}, up above,\nGod raises you with boundless love.\nWhen your heart feels heavy and low,\nHe lifts you high and helps you grow.\n\n{{babyname}}, when life pushes you down, God is always ready to lift you back up.",
      verse:"\"He raises the poor from the dust and lifts the needy from the ash heap.\" - Psalm 113:7"
    },
    {
      title:"L – Living Water",
      text:"Like living water, {{babyname}}, fresh,\nGod satisfies and does the rest.\nHe fills your heart with what you need,\nAnd plants in you His holy seed.\n\n{{babyname}}, with God in your heart, you will never be truly empty.",
      verse:"\"Whoever believes in me, rivers of living water will flow from within them.\" - John 7:38"
    },
    {
      title:"L – Led",
      text:"Led {{babyname}}, step by step,\nGod's own promise has been kept.\nEvery path He walks ahead,\nAnd gently guides where you are led.\n\n{{babyname}}, following God is never the wrong direction to go.",
      verse:"\"The Lord makes firm the steps of the one who delights in Him.\" - Psalm 37:23"
    }
  ],
  M:[
    {
      title:"M – Marvellous",
      text:"Marvellous {{babyname}}, rare and true,\nGod made something wonderful in you.\nEvery part of who you are,\nShines as bright as any star.\n\n{{babyname}}, you are one of God's most marvellous creations.",
      verse:"\"God's works are wonderful; they fill the earth with His glory." - Psalm 145:5"
    },
    {
      title:"M – Mighty",
      text:"Mighty {{babyname}}, strong inside,\nWith God's great power as your guide.\nSmall in size but never small,\nWith Jesus you can do it all.\n\n{{babyname}}, the same God who moved mountains is the One on your side.",
      verse:"\"The Lord your God goes with you; He will never leave you nor forsake you." - Deuteronomy 31:6"
    },
    {
      title:"M – Merciful",
      text:"Merciful {{babyname}}, kind and true,\nGod's own mercy shines through you.\nA gentle heart that understands,\nReflects the love of God's own hands.\n\n{{babyname}}, when you show mercy, you show the world what God looks like.",
      verse:"\"Blessed are the merciful, for they will be shown mercy.\" - Matthew 5:7"
    },
    {
      title:"M – Made New",
      text:"Made new, {{babyname}}, fresh each day,\nGod washes yesterday away.\nEvery morning starts again,\nWith mercy flowing like the rain.\n\n{{babyname}}, no matter what happened yesterday, God's mercies are new today.",
      verse:"\"Great is His faithfulness; His mercies begin afresh each morning.\" - Lamentations 3:23"
    },
    {
      title:"M – Marked",
      text:"Marked {{babyname}}, set apart,\nGod has placed His seal of love on your heart.\nYou belong to Him completely,\nHe holds you perfectly and sweetly.\n\n{{babyname}}, you carry God's mark of love and nothing can erase it.",
      verse:"\"Set me as a seal upon your heart.\" - Song of Solomon 8:6"
    }
  ],
  N:[
    {
      title:"N – Nurtured",
      text:"Nurtured {{babyname}}, tenderly cared,\nGod's love for you is always shared.\nHe tends to you like a garden fair,\nWith watchful love and constant care.\n\n{{babyname}}, God is always growing something good in you.",
      verse:"\"He tends His flock like a shepherd; He gathers the lambs in His arms.\" - Isaiah 40:11"
    },
    {
      title:"N – Named",
      text:"Named {{babyname}}, called by love,\nGod knows your name from up above.\nBefore the world had found its place,\nHe knew your name and saw your face.\n\n{{babyname}}, God has been calling your name since before you were born.",
      verse:"\"I have called you by name, you are mine.\" - Isaiah 43:1"
    },
    {
      title:"N – Near",
      text:"Near to God, {{babyname}}, every day,\nHis presence never fades away.\nWhen you draw close, He draws near,\nHis voice is all you need to hear.\n\n{{babyname}}, the closer you get to God, the more you will find He was always there.",
      verse:"\"Come near to God and He will come near to you.\" - James 4:8"
    },
    {
      title:"N – Noble",
      text:"Noble {{babyname}}, pure of heart,\nGod's own goodness sets you apart.\nThink on things that are true and right,\nAnd fill your heart with heaven's light.\n\n{{babyname}}, a noble heart chooses what is good even when it is hard.",
      verse:"\"Whatever is true, whatever is noble, whatever is right, think about such things.\" - Philippians 4:8"
    },
    {
      title:"N – New Creation",
      text:"A new creation, {{babyname}}, born again,\nGod washes away all stain and pain.\nThe old is gone, the new is here,\nWith God beside you, never fear.\n\n{{babyname}}, in God you get the most beautiful fresh start the world has ever seen.",
      verse:"\"If anyone is in Christ, the new creation has come; the old has gone, the new is here.\" - 2 Corinthians 5:17"
    }
  ],
  O:[
    {
      title:"O – Overflow",
      text:"Overflow, {{babyname}}, cup so full,\nGod fills you up beyond the pull.\nHis goodness spills to those around,\nIn you His blessing can be found.\n\n{{babyname}}, when you are full of God's love, it naturally flows to everyone near you.",
      verse:"\"My cup overflows.\" - Psalm 23:5"
    },
    {
      title:"O – Overcomer",
      text:"Overcomer, {{babyname}}, strong and free,\nGod has won the victory.\nEvery challenge, every wall,\nWith His help you'll stand through all.\n\n{{babyname}}, you were not made to be defeated, you were made to overcome.",
      verse:"\"Greater is He who is in you than he who is in the world.\" - 1 John 4:4"
    },
    {
      title:"O – Open",
      text:"Open {{babyname}}, heart and hands,\nReady for what God has planned.\nHe pours into the open space,\nA life of purpose, love, and grace.\n\n{{babyname}}, an open heart is the best gift you can give to God.",
      verse:"\"Ask and it will be given to you; seek and you will find.\" - Matthew 7:7"
    },
    {
      title:"O – Outstanding",
      text:"Outstanding {{babyname}}, set apart,\nGod has placed a gift in your heart.\nAmong the many you still shine,\nWith qualities uniquely thine.\n\n{{babyname}}, God made sure that you would stand out in the most beautiful way.",
      verse:"\"But you belong to God; therefore you are His and He is yours." - 1 John 4:6"
    },
    {
      title:"O – Ordained",
      text:"Ordained {{babyname}}, called with care,\nGod has placed a purpose there.\nBefore you breathed your very first air,\nHe planned the life you now would share.\n\n{{babyname}}, your whole life has been in God's heart long before it began.",
      verse:"\"Your eyes saw my unformed body; all the days ordained for me were written in your book.\" - Psalm 139:16"
    }
  ],
  P:[
    {
      title:"P – Precious",
      text:"Precious {{babyname}}, held so dear,\nGod smiles every time you're near.\nYou are worth far more than gold,\nA treasure greater than is told.\n\n{{babyname}}, you are not just important to God, you are precious to Him.",
      verse:"\"You are precious and honored in my sight, and I love you.\" - Isaiah 43:4"
    },
    {
      title:"P – Protected",
      text:"Protected {{babyname}}, safe and sound,\nGod's love is like a shelter found.\nHis angels guard you through the night,\nAnd keep you safe until the light.\n\n{{babyname}}, God watches over you every single second of every single day.",
      verse:"\"For He will command His angels concerning you to guard you in all your ways.\" - Psalm 91:11"
    },
    {
      title:"P – Purposeful",
      text:"Purposeful {{babyname}}, made with aim,\nNothing about you is quite the same.\nGod placed a mission in your heart,\nA calling only you can start.\n\n{{babyname}}, you were not born by accident, you were born with a purpose.",
      verse:"\"You are God's poem, written with care and purpose." - Romans 8:28"
    },
    {
      title:"P – Peaceful",
      text:"Peaceful {{babyname}}, calm inside,\nGod's peace is your forever guide.\nNot like the world's but deep and real,\nA rest that only God can give and heal.\n\n{{babyname}}, God's peace is not something you earn, it is something He gives.",
      verse:"\"Peace I leave with you; my peace I give you.\" - John 14:27"
    },
    {
      title:"P – Planted",
      text:"Planted {{babyname}}, rooted well,\nIn God's own love you chose to dwell.\nBy streams of water, tall and green,\nYou are the best that God has seen.\n\n{{babyname}}, stay close to God and you will always grow in the right direction.",
      verse:"\"That person is like a tree planted by streams of water, which yields its fruit in season.\" - Psalm 1:3"
    }
  ],
  Q:[
    {
      title:"Q – Quiet Strength",
      text:"Quiet strength, {{babyname}}, still and sure,\nGod's peace inside you will endure.\nIn stillness you can hear Him speak,\nThe peace you need is His to seek.\n\n{{babyname}}, sometimes the strongest thing you can do is be still and trust God.",
      verse:"\"In quietness and trust is your strength.\" - Isaiah 30:15"
    },
    {
      title:"Q – Quickened",
      text:"Quickened {{babyname}}, alive in grace,\nGod has filled this holy space.\nHis Spirit lives and moves in you,\nMaking all things fresh and new.\n\n{{babyname}}, God's Spirit is alive and moving inside you right now.",
      verse:"\"He who raised Christ from the dead will also give life to your mortal bodies.\" - Romans 8:11"
    },
    {
      title:"Q – Quenched",
      text:"Quenched {{babyname}}, satisfied and full,\nGod fills your heart beyond the pull.\nNo thirst remains when He is near,\nHis living water always clear.\n\n{{babyname}}, only God can fill the deepest part of your heart completely.",
      verse:"\"Whoever drinks the water I give them will never thirst.\" - John 4:14"
    },
    {
      title:"Q – Quest",
      text:"On a quest, {{babyname}}, brave and true,\nGod has a great adventure for you.\nSeek His Kingdom every day,\nAnd watch Him light up every way.\n\n{{babyname}}, seeking God is the greatest quest any heart can go on.",
      verse:"\"Those who seek the Lord lack no good thing." - Psalm 34:10"
    },
    {
      title:"Q – Quality",
      text:"Quality {{babyname}}, through and through,\nGod only makes the very best in you.\nHe does not rush or cut corners here,\nHe made you with precision and care so dear.\n\n{{babyname}}, God made you with so much thought and love that nothing about you is an accident.",
      verse:"\"God saw all that He had made, and it was very good.\" - Genesis 1:31"
    }
  ],
  R:[
    {
      title:"R – Radiant",
      text:"Radiant {{babyname}}, full of cheer,\nYour light shines bright for all to hear.\nYou glow with love both near and far,\nA mirror of how loved you are.\n\n{{babyname}}, keep glowing, the world needs your warmth.",
      verse:"\"Those who look to God shine bright.\" - Psalm 34:5"
    },
    {
      title:"R – Redeemed",
      text:"Redeemed {{babyname}}, bought with love,\nBy the greatest price from up above.\nYou belong to God completely now,\nHis grace has made this sacred vow.\n\n{{babyname}}, Jesus paid the highest price because you were worth it to Him.",
      verse:"\"Christ redeemed us from the curse of the law.\" - Galatians 3:13"
    },
    {
      title:"R – Renewed",
      text:"Renewed {{babyname}}, fresh each day,\nGod sweeps the old and tired away.\nLike eagles soaring up so high,\nHe lifts you up to touch the sky.\n\n{{babyname}}, every single day with God is a brand new beginning.",
      verse:"\"Those who hope in the Lord will renew their strength.\" - Isaiah 40:31"
    },
    {
      title:"R – Rooted",
      text:"Rooted {{babyname}}, deep and sure,\nIn God's own love you will endure.\nNothing shakes the one whose heart,\nIn Christ has found a solid start.\n\n{{babyname}}, the deeper your roots go into God, the taller you will grow.",
      verse:"\"Rooted and built up in Him, strengthened in the faith.\" - Colossians 2:7"
    },
    {
      title:"R – Righteous",
      text:"Righteous {{babyname}}, right with God,\nNot by works but by His love so broad.\nHe covers you in Jesus' name,\nAnd sees you never as the same.\n\n{{babyname}}, because of Jesus, God looks at you and sees something beautiful.",
      verse:"\"God made Him who had no sin to be sin for us, so that in Him we might become the righteousness of God.\" - 2 Corinthians 5:21"
    }
  ],
  S:[
    {
      title:"S – Saved",
      text:"Saved {{babyname}}, by grace alone,\nGod has made His love fully known.\nNot by anything you do,\nBut by a love that's always true.\n\n{{babyname}}, being saved means God chose to bring you into His family forever.",
      verse:"\"For it is by grace you have been saved, through faith.\" - Ephesians 2:8"
    },
    {
      title:"S – Seen",
      text:"Seen {{babyname}}, fully known,\nGod sees you even when alone.\nNo moment passes from His sight,\nYou are precious in His light.\n\n{{babyname}}, you are never invisible, God always sees and always cares.",
      verse:"\"You are the God who sees me.\" - Genesis 16:13"
    },
    {
      title:"S – Sheltered",
      text:"Sheltered {{babyname}}, safe inside,\nUnder God's wings you can abide.\nWhen the storm outside is loud,\nHe is your shelter in the cloud.\n\n{{babyname}}, run to God in every storm and you will always find shelter.",
      verse:"\"He will cover you with His feathers, and under His wings you will find refuge.\" - Psalm 91:4"
    },
    {
      title:"S – Strong",
      text:"Strong {{babyname}}, not in your own might,\nBut in the Lord who fills with light.\nHis power works through you each day,\nAnd makes you stronger all the way.\n\n{{babyname}}, true strength comes from leaning on the One who never grows tired.",
      verse:"\"Be strong in the Lord and in His mighty power.\" - Ephesians 6:10"
    },
    {
      title:"S – Sent",
      text:"Sent {{babyname}}, with a mission clear,\nGod placed you in this world right here.\nYou are not here just by chance,\nYou are part of His great plan and dance.\n\n{{babyname}}, God has sent you into this world to make a difference only you can make.",
      verse:"\"As the Father has sent me, I am sending you.\" - John 20:21"
    }
  ],
  T:[
    {
      title:"T – Treasured",
      text:"Treasured {{babyname}}, God's very own,\nThe love He has for you has grown.\nOut of all the world so wide,\nHe chose to keep you by His side.\n\n{{babyname}}, to God you are not just important, you are His treasure.",
      verse:"\"The Lord has set you apart for Himself as His very own." - Psalm 4:3"
    },
    {
      title:"T – Transformed",
      text:"Transformed {{babyname}}, day by day,\nGod shapes and molds you on the way.\nEach season brings a change so bright,\nAs He conforms you to His light.\n\n{{babyname}}, every day God is making you into something more beautiful.",
      verse:"\"Be transformed by the renewing of your mind.\" - Romans 12:2"
    },
    {
      title:"T – Triumphant",
      text:"Triumphant {{babyname}}, victory won,\nGod leads you forward through the sun.\nEven on the hardest day,\nHe turns all things around your way.\n\n{{babyname}}, with God by your side, your story always ends in victory.",
      verse:"\"Thanks be to God! He gives us the victory through our Lord Jesus Christ.\" - 1 Corinthians 15:57"
    },
    {
      title:"T – Tender",
      text:"Tender {{babyname}}, gentle heart,\nGod treasures every part.\nA soft and caring way to live,\nIs the greatest gift that you can give.\n\n{{babyname}}, a tender heart is one of the most powerful things in the world.",
      verse:"\"The Lord is my shepherd, I lack nothing." - Psalm 23:1"
    },
    {
      title:"T – Trusted",
      text:"Trusted {{babyname}}, in God's care,\nHe places precious things right there.\nHe trusts you with your gifts and days,\nAnd you trust Him in all your ways.\n\n{{babyname}}, trust God with your whole heart and watch what He does with your life.",
      verse:"\"Trust in the Lord with all your heart and lean not on your own understanding.\" - Proverbs 3:5"
    }
  ],
  U:[
    {
      title:"U – Unshakeable",
      text:"Unshakeable {{babyname}}, firm and still,\nGod plants you steady on His hill.\nWhen the world around you sways,\nHis Kingdom holds you all your days.\n\n{{babyname}}, you cannot be shaken when you are rooted in someone who never moves.",
      verse:"\"Therefore, since we are receiving a kingdom that cannot be shaken, let us be thankful.\" - Hebrews 12:28"
    },
    {
      title:"U – Uplifted",
      text:"Uplifted {{babyname}}, raised up high,\nGod lifts your head up to the sky.\nWhen sorrow tries to pull you down,\nHe trades your tears for a glorious crown.\n\n{{babyname}}, no matter how low you feel, God is always ready to lift you up.",
      verse:"\"But you, Lord, are a shield around me, my glory, the One who lifts my head high.\" - Psalm 3:3"
    },
    {
      title:"U – Unique",
      text:"Unique {{babyname}}, unlike the rest,\nGod put in you what He thought best.\nNot a copy, not a clone,\nYou are wonderfully your own.\n\n{{babyname}}, God made only one of you and He thinks that is something worth celebrating.",
      verse:"\"The Lord has done great things for us, and we are filled with joy." - Psalm 126:3"
    },
    {
      title:"U – United",
      text:"United {{babyname}}, one with Him,\nGod's love overflows right to the brim.\nYou are connected to the vine,\nAnd every part of you is thine.\n\n{{babyname}}, staying connected to God is what makes everything else in life grow.",
      verse:"\"I am the vine; you are the branches. If you remain in me, you will bear much fruit.\" - John 15:5"
    },
    {
      title:"U – Unstoppable",
      text:"Unstoppable {{babyname}}, on the move,\nWith God beside you, you will find your groove.\nNo wall too high, no road too long,\nIn Him you are forever strong.\n\n{{babyname}}, when God is for you, absolutely nothing in this world can stop you.",
      verse:"\"If God is for us, who can be against us?\" - Romans 8:31"
    }
  ],
  V:[
    {
      title:"V – Victorious",
      text:"Victorious {{babyname}}, born to win,\nGod's power lives and moves within.\nEvery battle, every test,\nWith His help you give your best.\n\n{{babyname}}, you were not made to lose, you were made to overcome.",
      verse:"\"In all these things we are more than conquerors through Him who loved us.\" - Romans 8:37"
    },
    {
      title:"V – Valued",
      text:"Valued {{babyname}}, more than gold,\nGod's love for you cannot be told.\nYou are worth far more to Him,\nThan anything beneath the brim.\n\n{{babyname}}, if God counts every hair on your head, imagine how much He values you.",
      verse:"\"Are not five sparrows sold for two pennies? Yet not one of them is forgotten by God.\" - Luke 12:6"
    },
    {
      title:"V – Vibrant",
      text:"Vibrant {{babyname}}, full of life,\nGod fills you up through joy and strife.\nHe came so you could live life full,\nBeyond the ordinary pull.\n\n{{babyname}}, God does not want a dull life for you, He wants something full and vibrant.",
      verse:"\"I have come that they may have life, and have it to the full.\" - John 10:10"
    },
    {
      title:"V – Visible",
      text:"Visible {{babyname}}, shining clear,\nGod's light in you is always near.\nDon't hide the good that God has done,\nLet others see what He's begun.\n\n{{babyname}}, the good God put in you is meant to be seen by the world.",
      verse:"\"Walk in the light, as He is in the light." - 1 John 1:7"
    },
    {
      title:"V – Vessel",
      text:"A vessel, {{babyname}}, filled with grace,\nGod pours His love into this space.\nYou carry something holy here,\nHis presence makes it crystal clear.\n\n{{babyname}}, you are a container of God's love and that makes you priceless.",
      verse:"\"We have this treasure in jars of clay to show that this all-surpassing power is from God.\" - 2 Corinthians 4:7"
    }
  ],
  W:[
    {
      title:"W – Wonderful",
      text:"Wonderful {{babyname}}, made with thought,\nYou are not something that can be bought.\nGod designed you from above,\nAnd filled each part with endless love.\n\n{{babyname}}, God looked at you when He made you and said this is wonderful.",
      verse:"\"His name is called Wonderful.\" - Isaiah 9:6"
    },
    {
      title:"W – Worthy",
      text:"Worthy {{babyname}}, in His sight,\nGod sees you wrapped in holy light.\nNot because of what you do,\nBut because His love makes you worthy too.\n\n{{babyname}}, you are worthy of love, worthy of kindness, and worthy of God's attention.",
      verse:"\"Walk in a manner worthy of the calling to which you have been called.\" - Ephesians 4:1"
    },
    {
      title:"W – Welcomed",
      text:"Welcomed {{babyname}}, right at home,\nWith God you never have to roam.\nHis door is always open wide,\nCome in, rest, stay right inside.\n\n{{babyname}}, God's welcome to you never expires and never runs out.",
      verse:"\"Accept one another, then, just as Christ accepted you.\" - Romans 15:7"
    },
    {
      title:"W – Walking",
      text:"Walking {{babyname}}, step by step,\nWith God beside you, faith is kept.\nEvery path He walks along,\nWith you to make the journey strong.\n\n{{babyname}}, the walk with God is the most meaningful walk your feet will ever take.",
      verse:"\"The humble will be lifted up and the gentle will inherit the earth." - Matthew 5:5"
    },
    {
      title:"W – Watched Over",
      text:"Watched over, {{babyname}}, every hour,\nGod sees you in your joy and power.\nHe never blinks or looks away,\nHis eye is on you every day.\n\n{{babyname}}, you are never out of God's sight, not even for a single moment.",
      verse:"\"The eyes of the Lord are on the righteous, and His ears are attentive to their cry.\" - Psalm 34:15"
    }
  ],
  X:[
    {
      title:"X – eXtraordinary",
      text:"Extraordinary {{babyname}}, rare and bright,\nGod made you special, full of light.\nThere's something in you set apart,\nA wonder living in your heart.\n\n{{babyname}}, God hid something extraordinary inside you that the world is waiting to discover.",
      verse:"\"How precious to me are your thoughts, God! How vast is the sum of them!\" - Psalm 139:17"
    },
    {
      title:"X – eXalted",
      text:"Lifted up, {{babyname}}, raised so high,\nGod elevates you to the sky.\nAs you lift Him in your praise,\nHe lifts you through your nights and days.\n\n{{babyname}}, when you lift God up, He lifts you up in ways you cannot imagine.",
      verse:"\"Glorify the Lord with me; let us exalt His name together.\" - Psalm 34:3"
    },
    {
      title:"X – eXpected",
      text:"Expected {{babyname}}, planned with care,\nGod thought of you and placed you there.\nYour arrival was no surprise,\nHe saw you with His knowing eyes.\n\n{{babyname}}, God was expecting you and preparing for you long before you arrived.",
      verse:"\"For I know the plans I have for you, plans to prosper you and give you hope.\" - Jeremiah 29:11"
    },
    {
      title:"X – eXceptional",
      text:"Exceptional {{babyname}}, beyond compare,\nGod placed something special in you there.\nAmong all people you still stand,\nShaped and held by His own hand.\n\n{{babyname}}, God made sure that you would be exceptional in your own one-of-a-kind way.",
      verse:"\"Many daughters have done nobly, but you excel them all.\" - Proverbs 31:29"
    },
    {
      title:"X – eXplorer",
      text:"An explorer, {{babyname}}, curious and free,\nGod made a whole world for you to see.\nEvery wonder, every view,\nIs a gift from God to you.\n\n{{babyname}}, every beautiful thing you discover in this world is God waving at you.",
      verse:"\"The heavens declare the glory of God; the skies proclaim the work of His hands.\" - Psalm 19:1"
    }
  ],
  Y:[
    {
      title:"Y – Yielded",
      text:"Yielded {{babyname}}, open wide,\nGod fills the heart that steps aside.\nA willing heart is His delight,\nSurrendered fully to His light.\n\n{{babyname}}, the most powerful position in the world is kneeling before God.",
      verse:"\"Offer yourselves to God as those who have been brought from death to life.\" - Romans 6:13"
    },
    {
      title:"Y – Yearning",
      text:"Yearning {{babyname}}, heart so deep,\nGod satisfies the love you seek.\nThe longing in you points the way,\nTo draw near to Him every day.\n\n{{babyname}}, that deep longing inside you is actually your heart looking for God.",
      verse:"\"As the deer pants for streams of water, so my soul pants for you, my God.\" - Psalm 42:1"
    },
    {
      title:"Y – Yes",
      text:"Yes, {{babyname}}, every promise true,\nGod's Word is always yes for you.\nEvery blessing, every dream,\nIs far greater than it seems.\n\n{{babyname}}, every promise God has ever made is a yes waiting to happen in your life.",
      verse:"\"For no matter how many promises God has made, they are Yes in Christ.\" - 2 Corinthians 1:20"
    },
    {
      title:"Y – Young and Mighty",
      text:"Young and mighty, {{babyname}}, strong in faith,\nGod uses you in every place.\nAge is never in His way,\nHe uses willing hearts each day.\n\n{{babyname}}, God has never once looked at a young heart and thought that is too small to use.",
      verse:"\"Don't let anyone look down on you because you are young.\" - 1 Timothy 4:12"
    },
    {
      title:"Y – Yours",
      text:"Yours, {{babyname}}, to God belong,\nIn His love you are forever strong.\nHe says to you I'm yours as well,\nA love that words can never tell.\n\n{{babyname}}, you belong to God and God belongs to you and that changes everything.",
      verse:"\"I am my beloved's and my beloved is mine.\" - Song of Solomon 6:3"
    }
  ],
  Z:[
    {
      title:"Z – Zealous",
      text:"Zealous {{babyname}}, heart on fire,\nGod lights in you a holy desire.\nWith passion great for what is good,\nYou live just as He knew you would.\n\n{{babyname}}, a heart on fire for God is one of the most beautiful things in the world.",
      verse:"\"Never be lacking in zeal, but keep your spiritual fervor, serving the Lord.\" - Romans 12:11"
    },
    {
      title:"Z – Zion-Bound",
      text:"Zion-bound, {{babyname}}, on the way,\nGod leads you closer every day.\nA pilgrim heart that longs for more,\nIs heading for an open door.\n\n{{babyname}}, this world is not your final home, God has something far greater waiting.",
      verse:"\"Blessed are those whose strength is in you, whose hearts are set on pilgrimage.\" - Psalm 84:5"
    },
    {
      title:"Z – Zero Fear",
      text:"Zero fear, {{babyname}}, brave inside,\nGod's power is your greatest pride.\nHe did not give a fearful heart,\nBut love and strength to make a start.\n\n{{babyname}}, fear is not from God, and with God beside you, fear has no real power.",
      verse:"\"God has not given us a spirit of fear, but of power, love and a sound mind.\" - 2 Timothy 1:7"
    },
    {
      title:"Z – Zenith",
      text:"At the zenith, {{babyname}}, high and true,\nGod's peace surpasses all for you.\nBeyond all thinking, beyond all knowing,\nHis love in you is always growing.\n\n{{babyname}}, the peace God gives you goes higher than anything your mind can reach.",
      verse:"\"The peace of God, which transcends all understanding, will guard your hearts and minds.\" - Philippians 4:7"
    },
    {
      title:"Z – Zeal",
      text:"With zeal, {{babyname}}, heart on fire,\nGod lights in you a holy desire.\nServe with love in all you do,\nAnd watch what God does through you.\n\n{{babyname}}, when you serve God with a joyful heart, extraordinary things happen.",
      verse:"\"Whatever you do, work at it with all your heart, as working for the Lord.\" - Colossians 3:23"
    }
  ]
};
