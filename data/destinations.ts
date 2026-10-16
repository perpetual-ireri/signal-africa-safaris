export type Destination = {
  type: "africa" | "international";
  slug: string;
  name: string;
  tagline: string;
  spots: string;
  detail: string;
  badge?: string;
  image: string;
  overview: string;
  bestTime: string;
  language: string;
  currency: string;
  visa: string;
  idealFor?: string;
  highlights: string[];
  sampleItinerary: string[];
};

export const africanDestinations: Destination[] = [
  {
    type: "africa",
    slug: "kenya",
    name: "Kenya",
    tagline: "Home of the Great Migration",
    spots: "Maasai Mara · Amboseli · Diani · Lake Nakuru",
    detail:
      "Witness the Great Migration, spot the Big Five, relax on Diani's white sands, and explore the flamingo-lined shores of Lake Nakuru.",
    image:
      "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=800&q=80",
    overview:
      "Kenya is the birthplace of the safari. From the rolling savannahs of the Maasai Mara to the snow-capped peak of Mount Kenya, it offers an unmatched blend of wildlife, culture, and coastline.",
    bestTime:
      "July – October (Great Migration) · January – March (dry, good for Big Five)",
    language: "Swahili, English",
    currency: "Kenyan Shilling (KES)",
    visa: "eTA required for most visitors — apply online before travel.",
    highlights: [
      "Great Migration river crossings in the Maasai Mara",
      "Elephant herds beneath Mt. Kilimanjaro in Amboseli",
      "White-sand beaches and coral reefs in Diani",
      "Flamingos and rhinos at Lake Nakuru",
      "Maasai cultural villages and hot-air balloon safaris",
    ],
    sampleItinerary: [
      "Day 1–2: Arrive Nairobi, visit Giraffe Centre & David Sheldrick",
      "Day 3–5: Fly to Maasai Mara — game drives & migration",
      "Day 6–7: Amboseli — elephants with Kilimanjaro backdrop",
      "Day 8–10: Diani Beach — relax and snorkel",
    ],
  },
  {
    type: "africa",
    slug: "uganda",
    name: "Uganda",
    tagline: "The Pearl of Africa",
    spots: "Bwindi · Murchison Falls · Queen Elizabeth NP",
    detail:
      "Trek mountain gorillas in Bwindi, cruise to the base of Murchison Falls, and spot tree-climbing lions in Queen Elizabeth National Park.",
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
    overview:
      "Uganda packs dense rainforests, snow-capped Rwenzori peaks, and the source of the Nile into one compact country — and it's one of only three places on Earth to see mountain gorillas.",
    bestTime: "June – September & December – February (dry seasons)",
    language: "English, Swahili, Luganda",
    currency: "Ugandan Shilling (UGX)",
    visa: "e-Visa required — apply online. Gorilla permits must be booked months ahead.",
    highlights: [
      "Mountain gorilla trekking in Bwindi Impenetrable Forest",
      "Boat cruise to the base of Murchison Falls",
      "Tree-climbing lions in Ishasha, Queen Elizabeth NP",
      "Chimpanzee tracking in Kibale Forest",
      "Source of the Nile at Jinja",
    ],
    sampleItinerary: [
      "Day 1: Arrive Entebbe, transfer to Kampala",
      "Day 2–3: Murchison Falls — game drive & Nile cruise",
      "Day 4–5: Kibale — chimpanzee tracking",
      "Day 6–8: Bwindi — gorilla trekking",
      "Day 9: Lake Bunyonyi relaxation",
    ],
  },
  {
    type: "africa",
    slug: "botswana",
    name: "Botswana",
    tagline: "Wild Luxury in the Delta",
    spots: "Okavango Delta · Chobe · Kalahari",
    detail:
      "Glide through the Okavango Delta in a mokoro, see massive elephant herds in Chobe, and experience the stark beauty of the Kalahari.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    overview:
      "Botswana is Africa's premium safari destination — a low-volume, high-value model that keeps the wilderness pristine. The Okavango Delta is a UNESCO World Heritage Site and the world's largest inland delta.",
    bestTime:
      "May – October (dry season, best game viewing) · July – September (flooded delta)",
    language: "Setswana, English",
    currency: "Botswana Pula (BWP)",
    visa: "Visa-free for many nationalities; check your country's status.",
    highlights: [
      "Mokoro (dugout canoe) safaris in the Okavango Delta",
      "World's largest elephant population in Chobe NP",
      "Black-maned Kalahari lions in the Central Kalahari",
      "Salt pans of Makgadikgadi — meerkats & starry skies",
      "Luxury fly-in tented camps",
    ],
    sampleItinerary: [
      "Day 1–2: Maun → Okavango Delta mokoro camp",
      "Day 3–4: Moremi Game Reserve game drives",
      "Day 5–6: Chobe — river cruise & elephant herds",
      "Day 7: Victoria Falls day trip (Zimbabwe side)",
    ],
  },
  {
    type: "africa",
    slug: "tanzania",
    name: "Tanzania",
    tagline: "Serengeti and Kilimanjaro",
    spots: "Serengeti · Ngorongoro · Zanzibar",
    detail:
      "Experience the Serengeti's endless plains, descend into the Ngorongoro Crater, and unwind on Zanzibar's spice-scented beaches.",
    image:
      "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=800&q=80",
    overview:
      "Tanzania is the complete East African package: the Serengeti's great plains, the wildlife-packed Ngorongoro Crater, Africa's highest peak, and the exotic island of Zanzibar.",
    bestTime:
      "June – October (dry season) · December – February (calving season)",
    language: "Swahili, English",
    currency: "Tanzanian Shilling (TZS)",
    visa: "e-Visa required for most visitors. Yellow fever certificate if arriving from an endemic country.",
    highlights: [
      "Great Migration in the Serengeti (June–July river crossings)",
      "Ngorongoro Crater — Big Five in a volcanic caldera",
      "Climb Mount Kilimanjaro (5,895 m) — Africa's highest peak",
      "Stone Town, Zanzibar — UNESCO spice & slave-trade history",
      "Nungwi & Kendwa beaches, Zanzibar",
    ],
    sampleItinerary: [
      "Day 1: Arrive Kilimanjaro/Arusha",
      "Day 2–4: Serengeti — migration & big cats",
      "Day 5: Ngorongoro Crater full-day game drive",
      "Day 6–7: Fly to Zanzibar — Stone Town & beaches",
      "Day 8–9: Nungwi beach relaxation",
    ],
  },
  {
    type: "africa",
    slug: "rwanda",
    name: "Rwanda",
    tagline: "Gorilla Trekking in the Land of a Thousand Hills",
    spots: "Volcanoes NP · Kigali · Lake Kivu · Nyungwe Forest",
    detail:
      "Track mountain gorillas in Volcanoes NP, explore Kigali's vibrant culture, and relax on the shores of Lake Kivu.",
    image:
      "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=800&q=80",
    overview:
      "Rwanda has transformed into one of Africa's most exciting destinations — clean, safe, and home to a third of the world's remaining mountain gorillas. It's also a leader in conservation and community tourism.",
    bestTime:
      "June – September & December – February (dry seasons for trekking)",
    language: "Kinyarwanda, French, English, Swahili",
    currency: "Rwandan Franc (RWF)",
    visa: "Visa on arrival for all Africans; e-Visa for others. Gorilla permits (~$1,500) must be booked in advance.",
    highlights: [
      "Mountain gorilla trekking in Volcanoes National Park",
      "Golden monkey tracking",
      "Kigali Genocide Memorial — powerful history",
      "Nyungwe Forest canopy walk & chimpanzees",
      "Lake Kivu — kayaking & beach relaxation",
    ],
    sampleItinerary: [
      "Day 1: Arrive Kigali — city tour & memorial",
      "Day 2–3: Volcanoes NP — gorilla trekking",
      "Day 4: Lake Kivu relaxation",
      "Day 5–6: Nyungwe Forest — canopy walk & chimps",
      "Day 7: Depart Kigali",
    ],
  },
  {
    type: "africa",
    slug: "south-africa",
    name: "South Africa",
    tagline: "Big Five and Cape Beauty",
    spots: "Kruger · Cape Town · Garden Route",
    detail:
      "Spot the Big Five in Kruger, explore Cape Town's stunning coastline, and drive the scenic Garden Route.",
    image:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=800&q=80",
    overview:
      "South Africa is Africa's most diverse destination — world-class safaris, dramatic coastlines, wine country, and vibrant cities all in one country. It's ideal for first-time visitors to Africa.",
    bestTime:
      "May – September (dry season, best game viewing) · November – March (Cape Town summer)",
    language: "English, Afrikaans, Zulu, Xhosa (11 official languages)",
    currency: "South African Rand (ZAR)",
    visa: "Visa-free for many nationalities (90 days for US, UK, EU). Check your status.",
    highlights: [
      "Big Five safaris in Kruger National Park",
      "Table Mountain & Cape Point, Cape Town",
      "Wine tasting in Stellenbosch & Franschhoek",
      "Garden Route — Knysna, Tsitsikamma, Plettenberg Bay",
      "Boulders Beach penguins & Cape Winelands",
    ],
    sampleItinerary: [
      "Day 1–3: Cape Town — Table Mountain, V&A, Cape Point",
      "Day 4–5: Stellenbosch & Franschhoek wine country",
      "Day 6–8: Garden Route drive to Knysna",
      "Day 9–11: Fly to Kruger — Big Five safari",
      "Day 12: Johannesburg departure",
    ],
  },
];

export const internationalPackages: Destination[] = [
  {
    type: "international",
    slug: "maldives",
    name: "Maldives",
    tagline: "Overwater Luxury & Coral Reefs",
    spots: "Malé · Private Islands · Snorkeling · Spa",
    detail:
      "Stay in an overwater villa, snorkel vibrant coral reefs, enjoy world-class spa treatments, and dine under the stars.",
    badge: "5-7 Days · Couples & Honeymoon",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    overview:
      "The Maldives is the world's most iconic honeymoon destination — 1,192 coral islands scattered across the Indian Ocean, famous for overwater villas, glass-clear lagoons, and vibrant reefs teeming with manta rays and whale sharks.",
    bestTime:
      "November – April (dry season, best visibility) · May – October (wet, lower prices)",
    language: "Dhivehi, English widely spoken",
    currency: "Maldivian Rufiyaa (MVR); USD widely accepted",
    visa: "Free 30-day visa on arrival for all nationalities. Valid passport + return ticket required.",
    idealFor: "Couples, honeymooners, divers, luxury seekers",
    highlights: [
      "Overwater villa with private infinity pool",
      "Snorkel with manta rays & whale sharks in Hanifaru Bay",
      "Underwater restaurant dining (e.g., Ithaa)",
      "Sunset dolphin cruise & bioluminescent beaches",
      "World-class spas and floating breakfasts",
    ],
    sampleItinerary: [
      "Day 1: Arrive Malé — speedboat/seaplane transfer to resort",
      "Day 2–3: Overwater villa — snorkeling & spa",
      "Day 4: Whale shark & manta ray excursion",
      "Day 5: Sunset cruise & beach dinner",
      "Day 6–7: Relaxation and departure",
    ],
  },
  {
    type: "international",
    slug: "dubai",
    name: "Dubai",
    tagline: "Skyline Glamour & Desert Adventure",
    spots: "Burj Khalifa · Miracle Garden · Desert Safari",
    detail:
      "Ascend the Burj Khalifa, wander through Miracle Garden, and enjoy a thrilling desert safari with dune bashing and camel rides.",
    badge: "4-5 Days · Family & Shopping",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    overview:
      "Dubai blends futuristic skyscrapers with old-world souks and golden desert dunes. It's the Middle East's most family-friendly, shopping-obsessed, and adventure-packed city.",
    bestTime:
      "November – March (cool, pleasant) · Avoid June – August (extreme heat)",
    language: "Arabic, English widely spoken",
    currency: "UAE Dirham (AED)",
    visa: "Visa on arrival for many nationalities (30–90 days). Check UAE rules for your passport.",
    idealFor: "Families, shoppers, first-time Middle East travelers",
    highlights: [
      "Burj Khalifa — 148th floor observation deck",
      "Dubai Mall, fountain show & aquarium",
      "Desert safari with dune bashing & BBQ dinner",
      "Miracle Garden & Global Village (seasonal)",
      "Palm Jumeirah & Atlantis Aquaventure",
    ],
    sampleItinerary: [
      "Day 1: Arrive Dubai — Dubai Mall & fountain show",
      "Day 2: Burj Khalifa + Dubai Frame + old town souks",
      "Day 3: Desert safari with dune bashing & dinner",
      "Day 4: Miracle Garden / Palm Jumeirah / beach day",
      "Day 5: Departure",
    ],
  },
  {
    type: "international",
    slug: "mauritius",
    name: "Mauritius",
    tagline: "Island Serenity & Creole Flavour",
    spots: "Le Morne · Flic en Flac · Black River Gorges",
    detail:
      "Hike Le Morne Brabant, relax on Flic en Flac beach, and explore the lush Black River Gorges National Park.",
    badge: "5-6 Days · Beach & Nature",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    overview:
      "Mauritius is a volcanic island of dramatic mountains, turquoise lagoons, and a rich Creole-Indian-French culture. It's the perfect mix of beach relaxation and outdoor adventure.",
    bestTime:
      "May – December (cool & dry) · January – April (cyclone season, humid)",
    language: "English, French, Mauritian Creole",
    currency: "Mauritian Rupee (MUR)",
    visa: "Visa-free 60 days for most nationalities; visa on arrival for others.",
    idealFor: "Couples, families, hikers, beach lovers",
    highlights: [
      "Hike Le Morne Brabant — UNESCO World Heritage Site",
      "Seven Coloured Earths of Chamarel",
      "Black River Gorges National Park",
      "Île aux Cerfs island day trip",
      "Port Louis central market & Aapravasi Ghat",
    ],
    sampleItinerary: [
      "Day 1: Arrive — transfer to Flic en Flac",
      "Day 2: Le Morne hike + beach afternoon",
      "Day 3: Chamarel — Seven Coloured Earths & waterfall",
      "Day 4: Île aux Cerfs boat trip",
      "Day 5: Port Louis market & cultural tour",
      "Day 6: Departure",
    ],
  },
  {
    type: "international",
    slug: "china",
    name: "China",
    tagline: "Ancient Wonders & Modern Cities",
    spots: "Beijing · Shanghai · Xi'an · Yangshuo",
    detail:
      "Walk the Great Wall, see the Terracotta Army in Xi'an, cruise the Li River in Yangshuo, and experience Shanghai's skyline.",
    badge: "7-10 Days · Culture & History",
    image:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80",
    overview:
      "China is a continent disguised as a country — 5,000 years of imperial history, dramatic karst landscapes, bustling megacities, and some of the world's most iconic monuments.",
    bestTime: "April – May & September – October (mild, clear skies)",
    language: "Mandarin Chinese; English limited outside major hotels",
    currency: "Chinese Yuan (CNY)",
    visa: "Visa required for most nationalities; 144-hour visa-free transit available in some cities.",
    idealFor: "Culture enthusiasts, history buffs, photographers",
    highlights: [
      "Great Wall at Mutianyu or Badaling",
      "Terracotta Army in Xi'an",
      "Li River cruise in Yangshuo",
      "The Bund & Shanghai skyline",
      "Forbidden City & Temple of Heaven, Beijing",
    ],
    sampleItinerary: [
      "Day 1–3: Beijing — Great Wall, Forbidden City, Temple of Heaven",
      "Day 4–5: Xi'an — Terracotta Army & Muslim Quarter",
      "Day 6–7: Yangshuo — Li River cruise & rice terraces",
      "Day 8–9: Shanghai — The Bund, Yu Garden, skyline",
      "Day 10: Departure",
    ],
  },
  {
    type: "international",
    slug: "malaysia",
    name: "Malaysia",
    tagline: "Street Food, Temples & Skylines",
    spots: "Kuala Lumpur · Penang · Melaka · Borneo",
    detail:
      "Taste iconic street food in Penang, explore Kuala Lumpur's Petronas Towers, and discover Borneo's rainforests and wildlife.",
    badge: "5-7 Days · Food & Culture",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80",
    overview:
      "Malaysia is Southeast Asia in miniature — Malay, Chinese, and Indian cultures layered over rainforests, islands, and one of the world's best street-food scenes.",
    bestTime:
      "March – October (west coast) · November – February (east coast)",
    language: "Malay, English widely spoken, Mandarin, Tamil",
    currency: "Malaysian Ringgit (MYR)",
    visa: "Visa-free 90 days for most nationalities; visa on arrival for some.",
    idealFor: "Foodies, families, culture & nature lovers",
    highlights: [
      "Petronas Twin Towers & KLCC Park",
      "Penang street food & George Town heritage",
      "Batu Caves & Melaka UNESCO old town",
      "Borneo — orangutans in Sepilok, Mount Kinabalu",
      "Langkawi & Perhentian Islands",
    ],
    sampleItinerary: [
      "Day 1–2: Kuala Lumpur — Petronas, Batu Caves, markets",
      "Day 3: Melaka — UNESCO heritage & Peranakan food",
      "Day 4–5: Penang — George Town street art & hawker food",
      "Day 6–7: Borneo — Sepilok orangutans & rainforest",
    ],
  },
  {
    type: "international",
    slug: "thailand",
    name: "Thailand",
    tagline: "Temples, Islands & Street Food Paradise",
    spots: "Bangkok · Phuket · Chiang Mai · Phi Phi Islands",
    detail:
      "Explore Bangkok's ornate temples, island-hop in Phuket and Phi Phi, and savor Chiang Mai's night markets and cuisine.",
    badge: "6-8 Days · Beach & Culture",
    image:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
    overview:
      "Thailand is the gateway to Southeast Asia — glittering temples, tropical islands, mountain villages, and arguably the world's best street food, all wrapped in the famous 'Land of Smiles' hospitality.",
    bestTime:
      "November – February (cool & dry) · March – May (hot) · June – October (green season)",
    language: "Thai; English common in tourist areas",
    currency: "Thai Baht (THB)",
    visa: "Visa-free 30–60 days for most nationalities; visa on arrival available.",
    idealFor: "Backpackers, couples, foodies, beach lovers",
    highlights: [
      "Grand Palace & Wat Pho, Bangkok",
      "Island-hopping in Phi Phi & Phuket",
      "Chiang Mai night markets & elephant sanctuaries",
      "Floating markets & Chao Phraya river cruise",
      "Thai cooking classes & street-food tours",
    ],
    sampleItinerary: [
      "Day 1–2: Bangkok — Grand Palace, Wat Pho, floating market",
      "Day 3–4: Fly to Phuket — beaches & old town",
      "Day 5: Phi Phi Islands day trip & snorkeling",
      "Day 6–7: Fly to Chiang Mai — temples & night market",
      "Day 8: Departure",
    ],
  },
];

// Combined lookup
export const allDestinations: Destination[] = [
  ...africanDestinations,
  ...internationalPackages,
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return allDestinations.find((d) => d.slug === slug);
}