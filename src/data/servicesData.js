export const SERVICES_CATEGORIES = [
  "All Services",
  "Celebrity Management",
  "Weddings & Receptions",
  "Corporate & Galas",
  "Live Stage & Comedy",
  "Sound, LED & Production"
];

export const SERVICES_DATA = [
  {
    id: "celebrity-management",
    title: "Celebrity & Artist Management",
    category: "Celebrity Management",
    badge: "Exclusive Access",
    tagline: "Direct liaison with TV Stars, Singers, Standup Comics & Cinema Personalities",
    description: "Powered by Actor TSK's deep 15-year network across Tamil cinema, Vijay TV, Zee Tamil, and Sun TV. Direct artist coordination with zero broker hassles, seamless backstage riders, and guaranteed celebrity appearances.",
    image: "/images/hero/celebrity_concert.jpg",
    images: [
      "/images/hero/celebrity_concert.jpg",
      "/images/instagram/super_singer_concert.jpg",
      "/images/founder/actor_tsk.jpg"
    ],
    features: [
      "Vijay TV KPY (Kalakka Povadhu Yaaru) Stars & Standup Comics",
      "Super Singer Winners & Cine Playback Artists",
      "Celebrity Emcees & Television Show Anchors",
      "Kollywood Actors, Actresses & Guest Appearances",
      "VIP Hospitality, Green Room Logistics & Personal Escort",
      "Curated Stage Scripts & Collaborative Interactive Sets"
    ],
    accentColor: "from-purple-500 to-indigo-600",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    packages: [
      { name: "Star Host & Emcee", duration: "4-5 Hours", idealFor: "Receptions & Sangeet", includes: "Celebrity anchor + interactive games + script coordination" },
      { name: "Live Comedy Show", duration: "90 Minutes", idealFor: "Corporate & Weddings", includes: "2 KPY Standup Comedians + Mimicry act + Audience roasts" },
      { name: "Grand Cine Star Night", duration: "Full Evening", idealFor: "College Fests & Galas", includes: "Cine celebrity + Musical troupe + Full VIP security" }
    ]
  },
  {
    id: "royal-weddings",
    title: "Grand Weddings & Royal Receptions",
    category: "Weddings & Receptions",
    badge: "Bespoke Elegance",
    tagline: "Turnkey Fairytale Nuptials & Spectacular Sangeet Evenings",
    description: "From traditional South Indian muhurthams to extravagant destination royal receptions. We curate majestic mandaps, bespoke fairytale bridal entries, celebrity guest performances, and seamless guest hospitality.",
    image: "/images/hero/wedding_mandap.jpg",
    images: [
      "/images/hero/wedding_mandap.jpg",
      "/images/instagram/royal_bridal_entry.jpg",
      "/images/instagram/temple_floral_mandap.jpg"
    ],
    features: [
      "Architectural Floral & Thematic Mandap Design",
      "Grand Bridal & Groom Entry Concepts (Palanquin, Dry Ice Fog, Flower Showers)",
      "Sangeet & Haldi Choreography with Pro Celebrity Dancers",
      "Cinematic 4K Live LED Screening & Multi-cam Setup",
      "Luxury Ambient Lighting & Crystal Chandelier Trussing",
      "Dedicated Wedding Director & Day-of-Event Concierge"
    ],
    accentColor: "from-amber-500 to-rose-500",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    packages: [
      { name: "The Emerald Muhurtham", duration: "Full Day", idealFor: "Traditional Ceremonies", includes: "Custom Mandap + Nadaswaram + Flower styling + Stage lighting" },
      { name: "Royal Sangeet Fiesta", duration: "Evening Extravaganza", idealFor: "Pre-wedding Celebrations", includes: "DJ + LED dance floor + Ethereal dry ice clouds + Choreographed acts" },
      { name: "Imperial Palace Reception", duration: "Complete Turnkey", idealFor: "Grand Receptions", includes: "Full luxury decor + Cine host + Orchestrated entries + Sound & Stagecraft" }
    ]
  },
  {
    id: "corporate-galas",
    title: "Corporate Galas & Star Awards",
    category: "Corporate & Galas",
    badge: "Executive Standard",
    tagline: "World-class Product Launches, Annual Days & Dealer Meets",
    description: "Elevate your enterprise brand with flawless production, intelligent stage setups, keynote audiovisuals, high-energy employee engagement, and headline celebrity performers that inspire your workforce.",
    image: "/images/hero/corporate_gala.jpg",
    images: [
      "/images/hero/corporate_gala.jpg",
      "/images/hero/corporate_summit.jpg",
      "/images/hero/corporate_awards_stage.jpg"
    ],
    features: [
      "Custom 3D Stage Sets & Curved 4K P2.6 LED Displays",
      "Corporate Award Ceremony Orchestration & Trophies",
      "Motivational Speakers, TV Anchors & Standup Comedians",
      "Team-building Interactive Digital Games & VR Lounges",
      "Comprehensive Registration, RFID Badging & VIP Lounges",
      "High-power Sound Reinforcement & Stage Lighting"
    ],
    accentColor: "from-blue-500 to-cyan-500",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    packages: [
      { name: "Corporate Annual Day", duration: "Full Evening", idealFor: "500 - 3000 Employees", includes: "Themed Stage + Anchor + Sound & Lights + Band/DJ" },
      { name: "Product Launch & Summit", duration: "Day/Evening", idealFor: "Tech Brands & Auto", includes: "3D reveal rig + Laser mapping + Press setup + Host" },
      { name: "Executive Star Awards", duration: "Evening Gala", idealFor: "Excellence Honors", includes: "Trophy sequence + Celebrity presenter + Red carpet setup" }
    ]
  },
  {
    id: "live-stage-comedy",
    title: "Live Comedy, Mimicry & Star Shows",
    category: "Live Stage & Comedy",
    badge: "Signature Specialty",
    tagline: "Curated by Actor TSK - Nonstop Laughter & High Energy Stagecraft",
    description: "Unfiltered joy and standing ovations! Curated and spearheaded by Actor TSK himself, bringing top-flight television mimicry artists, standup comics, and fusion performers for an unforgettable high-decibel experience.",
    image: "/images/hero/comedy_stage.jpg",
    images: [
      "/images/hero/comedy_stage.jpg",
      "/images/instagram/kpy_live_comedy.jpg",
      "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?q=80&w=1200&auto=format&fit=crop"
    ],
    features: [
      "Live Standup Comedy & Custom Client Roast Sessions",
      "Celebrity Voice Mimicry Acts & Film Star Imitations",
      "Live Interactive Audience Engagement Games & Contests",
      "Multilingual Performances (Tamil, English, Telugu, Hindi)",
      "High-energy Musical Parodies & Fusion Stage Acts",
      "Actor TSK Personal Appearance & Emcee Curation"
    ],
    accentColor: "from-pink-500 to-rose-600",
    badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    packages: [
      { name: "TSK Signature Standup", duration: "75 Minutes", idealFor: "Private & Corporate", includes: "Actor TSK solo + crowd work + custom company/family jokes" },
      { name: "Vijay TV Stars Comedy Gala", duration: "2.5 Hours", idealFor: "Public Fests & Weddings", includes: "3 TV comics + Mimicry champion + Musical band" },
      { name: "Laughter & Music Fusion", duration: "3 Hours", idealFor: "Star Nights", includes: "Comics + Super Singer vocalists + Live percussion" }
    ]
  },
  {
    id: "concerts-dj-sound",
    title: "Concerts, DJ & Live Music Bands",
    category: "Live Stage & Comedy",
    badge: "Pulse of the Night",
    tagline: "Concert Grade Audio, Top Club DJs & Dynamic Live Bands",
    description: "Turn your event into an electrifying arena concert. Featuring celebrity DJs, acoustic unplugged bands, high-voltage South Indian folk troupes, and world-class line array acoustic engineering.",
    image: "/images/hero/sangeet_dj.jpg",
    images: [
      "/images/hero/sangeet_dj.jpg",
      "/images/instagram/sangeet_dj_fiesta.jpg",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop"
    ],
    features: [
      "Celebrity DJs (Bollywood, Kollywood, EDM & Commercial)",
      "Live Fusion Bands & Acoustic Unplugged Ensembles",
      "Traditional Chenda Melam, Dhol & Nasik Dhol Processions",
      "Line Array Sound Systems (JBL VTX / L-Acoustics spec)",
      "Laser Show Systems & Synchronized DMX Moving Beam Heads",
      "Silent Disco Headphone Parties & Interactive Dance Arenas"
    ],
    accentColor: "from-emerald-500 to-teal-600",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    packages: [
      { name: "Club Sangeet DJ Night", duration: "4 Hours", idealFor: "Youth & Sangeet", includes: "Pro DJ + Dance floor + CO2 Cannons + Moving heads" },
      { name: "Live Acoustic Band", duration: "2.5 Hours", idealFor: "Cocktails & Receptions", includes: "5-piece live band + Vocalists + High-fidelity mix" },
      { name: "Grand Concert Extravaganza", duration: "5 Hours", idealFor: "Festivals & Large Arenas", includes: "Headline band + Full line-array + LED wall + SFX" }
    ]
  },
  {
    id: "stage-production-sfx",
    title: "Stage Craft, 4K LED & SFX Production",
    category: "Sound, LED & Production",
    badge: "High Tech Infrastructure",
    tagline: "Concert Trussing, Cold Spark Pyros, Cryo Jets & Immersive Visuals",
    description: "In-house state-of-the-art production gear. No middleman markups, 100% safety certified cold fireworks, high-density LED walls, low fog clouds, and heavy duty aluminum goal-post and box trussing.",
    image: "/images/hero/pyro_stage.jpg",
    images: [
      "/images/hero/pyro_stage.jpg",
      "/images/hero/stage_laser_sfx.jpg",
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop"
    ],
    features: [
      "Ultra-HD P2.6 & P3.9 Outdoor/Indoor LED Video Walls",
      "Indoor Cold Spark Pyrotechnic Fountains (100% Smoke-free)",
      "Cryo CO2 Jets, Confetti Stadium Blasters & Low-Fog Clouds",
      "Heavy-duty Box Trussing, Sky Trackers & Follow Spots",
      "Generators (Silent Gensets with 100% Redundant Backup)",
      "3D Pre-visualization Renders before execution"
    ],
    accentColor: "from-amber-400 to-red-500",
    badgeColor: "bg-amber-400/20 text-amber-300 border-amber-400/30",
    packages: [
      { name: "Spark & Smoke FX Pack", duration: "Event Duration", idealFor: "Bridal Entry & Climax", includes: "8 Cold Sparks + Low Fog + 2 CO2 Guns" },
      { name: "Visual Spectacle Rig", duration: "Full Setup", idealFor: "Stage & Backdrop", includes: "40x12 ft P2.6 LED Wall + Video processor + Operators" },
      { name: "Arena Production Suite", duration: "Turnkey Setup", idealFor: "Mega Star Shows", includes: "Box truss + Line array + 32 Moving heads + SFX + Crew" }
    ]
  }
];
