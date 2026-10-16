"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, Users, ArrowRight, X, MapPin, Calendar, CheckCircle, XCircle, Utensils, Bed, Compass, Backpack, Info, CreditCard, ShieldCheck, Lightbulb } from "lucide-react";

type DayPlan = {
  day: string;
  title: string;
  description: string;
};

type SafariDetails = {
  overview: string;
  highlights: string[];
  itinerary: DayPlan[];
  accommodation: string;
  meals: string;
  activities: string[];
  inclusions: string[];
  exclusions: string[];
  packingList: string[];
  bestTime: string;
  pricingTerms: string;
  bookingPolicy: string;
  travelTips: string[];
};

type Safari = {
  id: string;
  title: string;
  country:
    | "Kenya"
    | "Uganda"
    | "Botswana"
    | "Tanzania"
    | "Rwanda"
    | "South Africa";
  duration: string;
  groupSize: string;
  price: string;
  description: string;
  image: string;
  featured?: boolean;
  details: SafariDetails;
};

const safaris: Safari[] = [
  // KENYA
  {
    id: "masai-mara",
    title: "3 Days Masai Mara Safari",
    country: "Kenya",
    duration: "3 Days / 2 Nights",
    groupSize: "2-7 Guests",
    price: "From KShs 20,633",
    description:
      "Witness the legendary Great Wildebeest Migration and Big Five in Kenya's most iconic reserve.",
    image:
      "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=800&q=80",
    featured: true,
    details: {
      overview:
        "This 3-day Masai Mara safari takes you to Kenya's most celebrated wildlife reserve, home to the Big Five and the annual Great Wildebeest Migration. Enjoy thrilling game drives across the open savannah and experience Maasai culture firsthand.",
      highlights: [
        "Great Wildebeest Migration (July–October)",
        "Big Five game viewing",
        "Maasai village cultural visit",
        "Sunrise and sunset game drives",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Nairobi – Masai Mara",
          description:
            "Depart Nairobi early morning and drive through the Great Rift Valley with a stop at the viewpoint. Arrive in Masai Mara in time for lunch, followed by an afternoon game drive. Dinner and overnight at your lodge/camp.",
        },
        {
          day: "Day 2",
          title: "Full Day in Masai Mara",
          description:
            "Spend a full day exploring the Mara with morning and afternoon game drives. Optional visit to a Maasai village. Look out for lions, cheetahs, elephants, buffalo, and the migration herds. All meals at the lodge.",
        },
        {
          day: "Day 3",
          title: "Masai Mara – Nairobi",
          description:
            "Early morning game drive, then breakfast and check-out. Drive back to Nairobi arriving in the late afternoon. Drop-off at your hotel or the airport.",
        },
      ],
      accommodation:
        "2 nights in a mid-range safari lodge or luxury tented camp inside or near the reserve (e.g., Mara Sopa Lodge, Ashnil Mara Camp, or similar).",
      meals:
        "Full board — breakfast, lunch, and dinner daily, plus drinking water during game drives.",
      activities: [
        "Morning and afternoon game drives in a 4x4 safari vehicle",
        "Maasai village cultural visit (optional)",
        "Photography and birdwatching",
        "Hot air balloon safari (optional, at extra cost)",
      ],
      inclusions: [
        "Park entrance fees",
        "Transport in a 4x4 safari vehicle with a professional guide",
        "Full board accommodation",
        "Game drives as per itinerary",
        "Drinking water during game drives",
        "Government taxes and levies",
      ],
      exclusions: [
        "International flights",
        "Travel insurance",
        "Visas",
        "Alcoholic and soft drinks",
        "Tips and gratuities",
        "Optional activities (balloon safari, Maasai village)",
      ],
      packingList: [
        "Lightweight clothing in neutral colors",
        "Warm jacket for early morning game drives",
        "Comfortable walking shoes",
        "Sun hat, sunglasses, and sunscreen",
        "Binoculars and camera",
        "Insect repellent",
        "Personal medication",
      ],
      bestTime:
        "July to October for the Great Migration; December to March for excellent general game viewing and calving season.",
      pricingTerms:
        "Prices are per person sharing and vary by season, lodge category, and group size. A 30% deposit is required to confirm booking, with the balance due 30 days before arrival.",
      bookingPolicy:
        "Free cancellation up to 30 days before departure. 50% refund for cancellations 15–29 days prior. No refund for cancellations within 14 days.",
      travelTips: [
        "Book early during migration season as lodges fill up fast.",
        "Carry cash in KES or USD for tips and souvenirs.",
        "Respect wildlife — always follow your guide's instructions.",
        "Drink plenty of water and use sunscreen.",
      ],
    },
  },
  {
    id: "amboseli",
    title: "Amboseli and Mount Kilimanjaro Views",
    country: "Kenya",
    duration: "4 Days / 3 Nights",
    groupSize: "2-7 Guests",
    price: "From $650",
    description:
      "Elephant herds against the backdrop of Africa's highest peak — a photographer's dream.",
    image:
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=800&q=80",
    details: {
      overview:
        "Amboseli National Park offers some of the best elephant viewing in Africa, set against the stunning backdrop of Mount Kilimanjaro. This 4-day safari is perfect for photographers and wildlife lovers.",
      highlights: [
        "Large elephant herds",
        "Mount Kilimanjaro views",
        "Observation Hill panoramic views",
        "Maasai cultural encounters",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Nairobi – Amboseli",
          description:
            "Depart Nairobi and drive south to Amboseli National Park. Arrive for lunch, then enjoy an afternoon game drive with views of Kilimanjaro. Dinner and overnight at your lodge.",
        },
        {
          day: "Day 2",
          title: "Full Day in Amboseli",
          description:
            "Morning and afternoon game drives. Visit Observation Hill for panoramic views of the park and the mountain. Encounter elephants, buffalo, lions, cheetahs, and over 400 bird species.",
        },
        {
          day: "Day 3",
          title: "Amboseli Exploration",
          description:
            "Another full day of game drives. Optional visit to a Maasai village. Enjoy photography sessions as the light changes across the plains.",
        },
        {
          day: "Day 4",
          title: "Amboseli – Nairobi",
          description:
            "Morning game drive, breakfast, then drive back to Nairobi. Arrive in the afternoon and drop-off at your hotel or airport.",
        },
      ],
      accommodation:
        "3 nights in a comfortable safari lodge or camp with views of Kilimanjaro (e.g., Amboseli Sopa Lodge, Kibo Safari Camp, or similar).",
      meals:
        "Full board — breakfast, lunch, and dinner daily.",
      activities: [
        "Game drives in a 4x4 vehicle",
        "Observation Hill visit",
        "Maasai village visit (optional)",
        "Birdwatching",
      ],
      inclusions: [
        "Park fees",
        "Transport in a 4x4 safari vehicle",
        "Full board accommodation",
        "Professional guide",
        "Drinking water during game drives",
      ],
      exclusions: [
        "Flights",
        "Insurance",
        "Visas",
        "Drinks",
        "Tips",
        "Optional activities",
      ],
      packingList: [
        "Neutral-colored clothing",
        "Warm layer for mornings",
        "Comfortable shoes",
        "Sun protection",
        "Camera and binoculars",
        "Insect repellent",
      ],
      bestTime:
        "June to October and January to February for dry season game viewing. Kilimanjaro is clearest in the mornings.",
      pricingTerms:
        "Per person sharing. Deposit of 30% required. Balance due 30 days before arrival.",
      bookingPolicy:
        "Free cancellation up to 30 days prior. 50% refund 15–29 days. No refund within 14 days.",
      travelTips: [
        "Kilimanjaro is best viewed early morning.",
        "Bring a good zoom lens for photography.",
        "Dust can be heavy — protect your camera.",
      ],
    },
  },
  {
    id: "diani-beach",
    title: "Diani Beach and Safari Combo",
    country: "Kenya",
    duration: "7 Days / 6 Nights",
    groupSize: "2-10 Guests",
    price: "From $1,200",
    description:
      "Combine thrilling game drives in Tsavo with relaxation on Kenya's white sandy beaches.",
    image:
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=800&q=80",
    details: {
      overview:
        "This 7-day combo blends the excitement of a Tsavo safari with the relaxation of Diani Beach. Perfect for travelers who want both wildlife and beach time.",
      highlights: [
        "Tsavo East and West game drives",
        "Diani's white sandy beaches",
        "Snorkeling and water sports",
        "Relaxed beach resort stay",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Nairobi – Tsavo",
          description:
            "Depart Nairobi and drive to Tsavo East National Park. Afternoon game drive. Dinner and overnight at your lodge.",
        },
        {
          day: "Day 2",
          title: "Tsavo East – Tsavo West",
          description:
            "Morning game drive in Tsavo East, then transfer to Tsavo West. Visit Mzima Springs and enjoy an afternoon game drive.",
        },
        {
          day: "Day 3",
          title: "Tsavo West – Diani Beach",
          description:
            "Morning game drive, then drive to Diani Beach. Check into your beach resort and relax.",
        },
        {
          day: "Day 4",
          title: "Diani Beach",
          description:
            "Full day at leisure. Optional snorkeling, diving, or dhow cruise.",
        },
        {
          day: "Day 5",
          title: "Diani Beach",
          description:
            "Another relaxing day at the beach. Optional visit to Shimba Hills or Wasini Island.",
        },
        {
          day: "Day 6",
          title: "Diani Beach",
          description:
            "Free day for relaxation and water activities.",
        },
        {
          day: "Day 7",
          title: "Diani – Nairobi",
          description:
            "Breakfast, then transfer to Ukunda airstrip for your flight to Nairobi, or drive back.",
        },
      ],
      accommodation:
        "2 nights safari lodge in Tsavo + 4 nights beach resort in Diani (e.g., Baobab Beach Resort, Diani Sea Lodge, or similar).",
      meals:
        "Full board on safari; bed & breakfast or half board at the beach resort.",
      activities: [
        "Game drives in Tsavo",
        "Snorkeling and diving",
        "Dhow cruise",
        "Beach relaxation",
      ],
      inclusions: [
        "Park fees",
        "Transport",
        "Accommodation",
        "Meals as specified",
        "Professional guide",
      ],
      exclusions: [
        "Flights",
        "Insurance",
        "Drinks",
        "Tips",
        "Optional water sports",
      ],
      packingList: [
        "Safari clothing",
        "Swimwear",
        "Beachwear",
        "Sunscreen",
        "Camera",
        "Snorkeling gear (optional)",
      ],
      bestTime:
        "December to March and July to October for dry season and calm seas.",
      pricingTerms:
        "Per person sharing. 30% deposit required. Balance due 30 days before arrival.",
      bookingPolicy:
        "Free cancellation up to 30 days prior. 50% refund 15–29 days. No refund within 14 days.",
      travelTips: [
        "Book flights between Nairobi and Ukunda in advance.",
        "Bring reef-safe sunscreen.",
        "Respect local marine life while snorkeling.",
      ],
    },
  },
  {
    id: "lake-nakuru",
    title: "Lake Nakuru and Naivasha Escape",
    country: "Kenya",
    duration: "3 Days / 2 Nights",
    groupSize: "2-6 Guests",
    price: "From $450",
    description:
      "Flamingos, rhinos and boat rides in the Great Rift Valley's most scenic lakes.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    details: {
      overview:
        "A short escape to the Great Rift Valley's most scenic lakes — Lake Nakuru and Lake Naivasha. Ideal for weekend getaways and bird lovers.",
      highlights: [
        "Flamingos and pelicans",
        "White and black rhinos",
        "Boat ride on Lake Naivasha",
        "Crescent Island walking safari",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Nairobi – Lake Nakuru",
          description:
            "Depart Nairobi and drive to Lake Nakuru National Park. Afternoon game drive. Dinner and overnight at your lodge.",
        },
        {
          day: "Day 2",
          title: "Lake Nakuru – Lake Naivasha",
          description:
            "Morning game drive in Nakuru, then transfer to Lake Naivasha. Afternoon boat ride and optional Crescent Island walk.",
        },
        {
          day: "Day 3",
          title: "Lake Naivasha – Nairobi",
          description:
            "Morning at leisure or optional Hell's Gate visit. Drive back to Nairobi in the afternoon.",
        },
      ],
      accommodation:
        "1 night in Lake Nakuru lodge + 1 night in Lake Naivasha lodge or camp.",
      meals: "Full board throughout.",
      activities: [
        "Game drives",
        "Boat ride on Lake Naivasha",
        "Crescent Island walking safari",
        "Birdwatching",
      ],
      inclusions: [
        "Park fees",
        "Transport",
        "Accommodation",
        "Meals",
        "Boat ride",
      ],
      exclusions: [
        "Drinks",
        "Tips",
        "Optional activities",
        "Insurance",
      ],
      packingList: [
        "Comfortable clothing",
        "Binoculars",
        "Camera",
        "Sun hat",
        "Insect repellent",
      ],
      bestTime:
        "Year-round, but best during dry seasons (June–October, January–February).",
      pricingTerms:
        "Per person sharing. 30% deposit required.",
      bookingPolicy:
        "Free cancellation up to 14 days prior. 50% refund 7–13 days. No refund within 7 days.",
      travelTips: [
        "Bring binoculars for birdwatching.",
        "Hell's Gate is great for cycling.",
        "Wear neutral colors.",
      ],
    },
  },

  // UGANDA
  {
    id: "gorilla-uganda",
    title: "Uganda Gorilla Trekking Adventure",
    country: "Uganda",
    duration: "4 Days / 3 Nights",
    groupSize: "2-6 Guests",
    price: "From $1,800",
    description:
      "Come face-to-face with mountain gorillas in Bwindi Impenetrable Forest.",
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
    featured: true,
    details: {
      overview:
        "This 4-day Uganda safari takes you to Bwindi Impenetrable Forest for an unforgettable mountain gorilla trekking experience, plus a visit to Lake Bunyonyi.",
      highlights: [
        "Mountain gorilla trekking",
        "Bwindi Impenetrable Forest",
        "Lake Bunyonyi",
        "Batwa cultural experience",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Entebbe – Bwindi",
          description:
            "Drive or fly to Bwindi. Afternoon relaxation at your lodge. Briefing for gorilla trekking.",
        },
        {
          day: "Day 2",
          title: "Gorilla Trekking",
          description:
            "Early morning briefing, then trek into Bwindi Forest to find a gorilla family. Spend one hour with the gorillas. Return to lodge for dinner.",
        },
        {
          day: "Day 3",
          title: "Lake Bunyonyi",
          description:
            "Transfer to Lake Bunyonyi. Boat ride and optional community visit. Relax by the lake.",
        },
        {
          day: "Day 4",
          title: "Bwindi – Entebbe",
          description:
            "Drive or fly back to Entebbe. Drop-off at hotel or airport.",
        },
      ],
      accommodation:
        "3 nights in a comfortable lodge near Bwindi and Lake Bunyonyi.",
      meals: "Full board throughout.",
      activities: [
        "Gorilla trekking",
        "Lake Bunyonyi boat ride",
        "Batwa cultural experience",
        "Nature walks",
      ],
      inclusions: [
        "Gorilla permit",
        "Park fees",
        "Transport",
        "Accommodation",
        "Meals",
        "Professional guide",
      ],
      exclusions: [
        "Flights",
        "Insurance",
        "Visas",
        "Drinks",
        "Tips",
      ],
      packingList: [
        "Sturdy hiking boots",
        "Long pants and long-sleeved shirts",
        "Rain jacket",
        "Gardening gloves",
        "Camera (no flash)",
        "Insect repellent",
      ],
      bestTime:
        "June to August and December to February for drier trails.",
      pricingTerms:
        "Per person sharing. Gorilla permits must be paid in full at booking. 30% deposit for the rest.",
      bookingPolicy:
        "Gorilla permits are non-refundable. Lodge cancellation: free up to 30 days prior.",
      travelTips: [
        "Book gorilla permits at least 3–6 months in advance.",
        "Bring gloves for the trek.",
        "Maintain a 7-meter distance from gorillas.",
      ],
    },
  },
  {
    id: "murchison-falls",
    title: "Murchison Falls Wildlife Safari",
    country: "Uganda",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 Guests",
    price: "From $1,500",
    description:
      "Big game, Nile boat cruises and the world's most powerful waterfall.",
    image:
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=800&q=80",
    details: {
      overview:
        "Explore Uganda's largest national park, Murchison Falls, home to the powerful Nile River waterfall and an abundance of wildlife including elephants, lions, giraffes, and hippos.",
      highlights: [
        "Murchison Falls",
        "Nile boat cruise",
        "Big game drives",
        "Ziwa Rhino Sanctuary",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Entebbe – Murchison Falls",
          description:
            "Drive to Murchison Falls via Ziwa Rhino Sanctuary for rhino tracking. Arrive at lodge in the evening.",
        },
        {
          day: "Day 2",
          title: "Murchison Falls",
          description:
            "Morning game drive in the northern sector. Afternoon boat cruise to the base of the falls.",
        },
        {
          day: "Day 3",
          title: "Murchison Falls",
          description:
            "Full day of game drives and optional hike to the top of the falls.",
        },
        {
          day: "Day 4",
          title: "Murchison Falls",
          description:
            "Morning game drive, afternoon at leisure or optional fishing.",
        },
        {
          day: "Day 5",
          title: "Murchison Falls – Entebbe",
          description:
            "Drive back to Entebbe, arriving in the afternoon.",
        },
      ],
      accommodation:
        "4 nights in a safari lodge inside or near the park.",
      meals: "Full board throughout.",
      activities: [
        "Game drives",
        "Nile boat cruise",
        "Rhino tracking",
        "Hike to top of the falls",
      ],
      inclusions: [
        "Park fees",
        "Transport",
        "Accommodation",
        "Meals",
        "Boat cruise",
        "Guide",
      ],
      exclusions: [
        "Flights",
        "Insurance",
        "Visas",
        "Drinks",
        "Tips",
      ],
      packingList: [
        "Neutral clothing",
        "Comfortable shoes",
        "Sun protection",
        "Camera",
        "Binoculars",
      ],
      bestTime:
        "December to February and June to September for dry season.",
      pricingTerms:
        "Per person sharing. 30% deposit required.",
      bookingPolicy:
        "Free cancellation up to 30 days prior. 50% refund 15–29 days.",
      travelTips: [
        "The hike to the top of the falls is worth it.",
        "Bring a rain jacket.",
        "Watch for hippos during the boat cruise.",
      ],
    },
  },

  // BOTSWANA
  {
    id: "okavango",
    title: "Okavango Delta and Chobe Safari",
    country: "Botswana",
    duration: "6 Days / 5 Nights",
    groupSize: "2-6 Guests",
    price: "From $2,900",
    description:
      "Explore the world's largest inland delta and Chobe's legendary elephant herds.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    featured: true,
    details: {
      overview:
        "Discover the Okavango Delta and Chobe National Park on this 6-day Botswana safari. Enjoy mokoro canoe rides, game drives, and boat cruises among the largest elephant herds in Africa.",
      highlights: [
        "Okavango Delta mokoro rides",
        "Chobe elephant herds",
        "Sunset boat cruises",
        "Luxury tented camps",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Maun – Okavango Delta",
          description:
            "Fly or drive to the Delta. Afternoon mokoro ride. Overnight at a Delta camp.",
        },
        {
          day: "Day 2",
          title: "Okavango Delta",
          description:
            "Full day of game drives and mokoro excursions. Guided nature walks.",
        },
        {
          day: "Day 3",
          title: "Okavango Delta – Chobe",
          description:
            "Transfer to Chobe National Park. Afternoon game drive.",
        },
        {
          day: "Day 4",
          title: "Chobe National Park",
          description:
            "Morning game drive and afternoon boat cruise on the Chobe River.",
        },
        {
          day: "Day 5",
          title: "Chobe National Park",
          description:
            "Full day of game drives in Chobe.",
        },
        {
          day: "Day 6",
          title: "Chobe – Kasane",
          description:
            "Morning game drive, then transfer to Kasane for departure.",
        },
      ],
      accommodation:
        "5 nights in luxury tented camps and lodges.",
      meals: "Full board throughout, including drinks at some camps.",
      activities: [
        "Mokoro canoe rides",
        "Game drives",
        "Boat cruises",
        "Guided walks",
      ],
      inclusions: [
        "Park fees",
        "Accommodation",
        "Meals",
        "Activities",
        "Local flights",
      ],
      exclusions: [
        "International flights",
        "Insurance",
        "Visas",
        "Premium drinks",
        "Tips",
      ],
      packingList: [
        "Neutral clothing",
        "Sun hat",
        "Camera",
        "Binoculars",
        "Insect repellent",
        "Light jacket",
      ],
      bestTime:
        "May to October for dry season and best game viewing.",
      pricingTerms:
        "Per person sharing. 30% deposit required. Balance due 45 days before arrival.",
      bookingPolicy:
        "Free cancellation up to 45 days prior. 50% refund 30–44 days.",
      travelTips: [
        "Book early — camps are small and fill up.",
        "Bring a wide-angle lens for the Delta.",
        "Respect the fragile ecosystem.",
      ],
    },
  },
  {
    id: "kalahari",
    title: "Kalahari and Makgadikgadi Pans",
    country: "Botswana",
    duration: "5 Days / 4 Nights",
    groupSize: "2-6 Guests",
    price: "From $2,400",
    description:
      "Discover the surreal salt pans, meerkats and black-maned lions of the Kalahari.",
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800&q=80",
    details: {
      overview:
        "Explore the Kalahari Desert and the surreal Makgadikgadi Salt Pans. Encounter meerkats, black-maned lions, and the unique desert-adapted wildlife of Botswana.",
      highlights: [
        "Makgadikgadi Salt Pans",
        "Meerkat encounters",
        "Black-maned lions",
        "San Bushmen culture",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Maun – Kalahari",
          description:
            "Drive to the Kalahari. Afternoon game drive.",
        },
        {
          day: "Day 2",
          title: "Kalahari",
          description:
            "Full day of game drives and nature walks with San guides.",
        },
        {
          day: "Day 3",
          title: "Kalahari – Makgadikgadi",
          description:
            "Transfer to Makgadikgadi Pans. Afternoon quad-bike excursion.",
        },
        {
          day: "Day 4",
          title: "Makgadikgadi Pans",
          description:
            "Meerkat experience and salt pan exploration.",
        },
        {
          day: "Day 5",
          title: "Makgadikgadi – Maun",
          description:
            "Morning activity, then transfer to Maun for departure.",
        },
      ],
      accommodation:
        "4 nights in desert lodges and pan camps.",
      meals: "Full board throughout.",
      activities: [
        "Game drives",
        "Quad-biking",
        "Meerkat experience",
        "San cultural walks",
      ],
      inclusions: [
        "Park fees",
        "Accommodation",
        "Meals",
        "Activities",
        "Guide",
      ],
      exclusions: [
        "Flights",
        "Insurance",
        "Visas",
        "Drinks",
        "Tips",
      ],
      packingList: [
        "Neutral clothing",
        "Warm jacket for cold nights",
        "Sun protection",
        "Camera",
        "Binoculars",
      ],
      bestTime:
        "April to October for dry season. Salt pans are best in the dry months.",
      pricingTerms:
        "Per person sharing. 30% deposit required.",
      bookingPolicy:
        "Free cancellation up to 45 days prior. 50% refund 30–44 days.",
      travelTips: [
        "Nights can be very cold — pack warm layers.",
        "Bring a dust-proof camera bag.",
        "Quad-biking is optional but highly recommended.",
      ],
    },
  },

  // TANZANIA
  {
    id: "serengeti",
    title: "Serengeti and Ngorongoro Crater",
    country: "Tanzania",
    duration: "7 Days / 6 Nights",
    groupSize: "2-7 Guests",
    price: "From $2,100",
    description:
      "Follow the Great Migration through the Serengeti and descend into the Ngorongoro Crater.",
    image:
      "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=800&q=80",
    details: {
      overview:
        "This 7-day Tanzania safari takes you through the legendary Serengeti and the Ngorongoro Crater, with opportunities to witness the Great Migration and the Big Five.",
      highlights: [
        "Great Migration",
        "Ngorongoro Crater",
        "Big Five",
        "Maasai culture",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Arusha – Tarangire",
          description:
            "Drive to Tarangire National Park for an afternoon game drive.",
        },
        {
          day: "Day 2",
          title: "Tarangire – Serengeti",
          description:
            "Morning game drive, then drive to the Serengeti.",
        },
        {
          day: "Day 3",
          title: "Serengeti",
          description:
            "Full day of game drives in the Serengeti.",
        },
        {
          day: "Day 4",
          title: "Serengeti",
          description:
            "Another full day exploring the Serengeti.",
        },
        {
          day: "Day 5",
          title: "Serengeti – Ngorongoro",
          description:
            "Morning game drive, then transfer to the Ngorongoro Conservation Area.",
        },
        {
          day: "Day 6",
          title: "Ngorongoro Crater",
          description:
            "Descend into the crater for a full day of game viewing.",
        },
        {
          day: "Day 7",
          title: "Ngorongoro – Arusha",
          description:
            "Drive back to Arusha for departure.",
        },
      ],
      accommodation:
        "6 nights in safari lodges and tented camps.",
      meals: "Full board throughout.",
      activities: [
        "Game drives",
        "Crater tour",
        "Maasai village visit",
        "Photography",
      ],
      inclusions: [
        "Park fees",
        "Crater fees",
        "Accommodation",
        "Meals",
        "Transport",
        "Guide",
      ],
      exclusions: [
        "Flights",
        "Insurance",
        "Visas",
        "Drinks",
        "Tips",
      ],
      packingList: [
        "Neutral clothing",
        "Warm jacket",
        "Comfortable shoes",
        "Camera",
        "Binoculars",
        "Sun protection",
      ],
      bestTime:
        "June to October for dry season and migration. January to March for calving.",
      pricingTerms:
        "Per person sharing. 30% deposit required. Balance due 45 days before arrival.",
      bookingPolicy:
        "Free cancellation up to 45 days prior. 50% refund 30–44 days.",
      travelTips: [
        "Book early for migration season.",
        "The crater can be cold in the morning.",
        "Bring a good zoom lens.",
      ],
    },
  },
  {
    id: "kilimanjaro",
    title: "Mount Kilimanjaro Trek – Machame Route",
    country: "Tanzania",
    duration: "8 Days / 7 Nights",
    groupSize: "2-10 Guests",
    price: "From $2,300",
    description:
      "Summit Africa's highest peak on the most scenic route to Uhuru Point.",
    image:
      "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=800&q=80",
    details: {
      overview:
        "Trek Africa's highest peak via the scenic Machame Route. This 8-day adventure takes you through five climatic zones to the summit of Mount Kilimanjaro at Uhuru Point (5,895m).",
      highlights: [
        "Uhuru Point summit",
        "Five climatic zones",
        "Scenic Machame Route",
        "Professional mountain guides",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Machame Gate – Machame Camp",
          description:
            "Trek through the rainforest to Machame Camp (2,835m).",
        },
        {
          day: "Day 2",
          title: "Machame Camp – Shira Camp",
          description:
            "Trek to Shira Camp (3,750m) through moorland.",
        },
        {
          day: "Day 3",
          title: "Shira Camp – Barranco Camp",
          description:
            "Acclimatization day via Lava Tower (4,600m) to Barranco Camp (3,900m).",
        },
        {
          day: "Day 4",
          title: "Barranco Camp – Karanga Camp",
          description:
            "Climb the Barranco Wall to Karanga Camp (3,995m).",
        },
        {
          day: "Day 5",
          title: "Karanga Camp – Barafu Camp",
          description:
            "Trek to Barafu Camp (4,673m) for summit preparation.",
        },
        {
          day: "Day 6",
          title: "Summit Day – Mweka Camp",
          description:
            "Summit via Stella Point to Uhuru Point (5,895m), then descend to Mweka Camp (3,100m).",
        },
        {
          day: "Day 7",
          title: "Mweka Camp – Mweka Gate",
          description:
            "Descend through the rainforest to Mweka Gate. Transfer to hotel.",
        },
        {
          day: "Day 8",
          title: "Departure",
          description:
            "Transfer to Kilimanjaro Airport for departure.",
        },
      ],
      accommodation:
        "7 nights camping on the mountain + 1 night hotel before/after trek.",
      meals: "Full board on the mountain.",
      activities: [
        "Trekking",
        "Summit attempt",
        "Wildlife spotting",
        "Scenic photography",
      ],
      inclusions: [
        "Park fees",
        "Camping fees",
        "Mountain guides and porters",
        "Meals on the mountain",
        "Camping equipment",
        "Transfers",
      ],
      exclusions: [
        "Flights",
        "Insurance",
        "Visas",
        "Tips for guides and porters",
        "Personal gear",
      ],
      packingList: [
        "Hiking boots",
        "Warm layers",
        "Rain gear",
        "Sleeping bag",
        "Headlamp",
        "Water bottle",
        "Sun protection",
      ],
      bestTime:
        "January to March and June to October for clear skies and safer conditions.",
      pricingTerms:
        "Per person. 30% deposit required. Balance due 60 days before trek.",
      bookingPolicy:
        "Free cancellation up to 60 days prior. 50% refund 30–59 days.",
      travelTips: [
        "Train well before the trek.",
        "Acclimatization is key — follow your guide's pace.",
        "Bring cash for tips.",
      ],
    },
  },
  {
    id: "zanzibar",
    title: "Zanzibar Beach and Safari Combo",
    country: "Tanzania",
    duration: "8 Days / 7 Nights",
    groupSize: "2-8 Guests",
    price: "From $1,950",
    description:
      "Pair a Serengeti safari with the spice-scented beaches of Zanzibar.",
    image:
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=800&q=80",
    details: {
      overview:
        "Combine a Serengeti and Ngorongoro safari with relaxation on the beaches of Zanzibar. This 8-day combo offers the best of Tanzania's wildlife and coast.",
      highlights: [
        "Serengeti and Ngorongoro",
        "Zanzibar beaches",
        "Stone Town tour",
        "Spice tour",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Arusha – Serengeti",
          description:
            "Fly to the Serengeti for an afternoon game drive.",
        },
        {
          day: "Day 2",
          title: "Serengeti",
          description:
            "Full day of game drives.",
        },
        {
          day: "Day 3",
          title: "Serengeti – Ngorongoro",
          description:
            "Morning game drive, then transfer to Ngorongoro.",
        },
        {
          day: "Day 4",
          title: "Ngorongoro Crater",
          description:
            "Descend into the crater for game viewing.",
        },
        {
          day: "Day 5",
          title: "Ngorongoro – Zanzibar",
          description:
            "Fly to Zanzibar. Transfer to beach resort.",
        },
        {
          day: "Day 6",
          title: "Zanzibar",
          description:
            "Day at leisure. Optional Stone Town or spice tour.",
        },
        {
          day: "Day 7",
          title: "Zanzibar",
          description:
            "Relax on the beach or enjoy water sports.",
        },
        {
          day: "Day 8",
          title: "Zanzibar – Departure",
          description:
            "Transfer to Zanzibar Airport for departure.",
        },
      ],
      accommodation:
        "4 nights safari lodges + 3 nights beach resort.",
      meals: "Full board on safari; bed & breakfast on the beach.",
      activities: [
        "Game drives",
        "Crater tour",
        "Stone Town tour",
        "Spice tour",
        "Beach relaxation",
      ],
      inclusions: [
        "Park fees",
        "Accommodation",
        "Meals as specified",
        "Internal flights",
        "Transfers",
      ],
      exclusions: [
        "International flights",
        "Insurance",
        "Visas",
        "Drinks",
        "Tips",
      ],
      packingList: [
        "Safari clothing",
        "Swimwear",
        "Beachwear",
        "Sun protection",
        "Camera",
      ],
      bestTime:
        "June to October for safari; December to March for beaches.",
      pricingTerms:
        "Per person sharing. 30% deposit required.",
      bookingPolicy:
        "Free cancellation up to 45 days prior. 50% refund 30–44 days.",
      travelTips: [
        "Book internal flights early.",
        "Respect local customs in Stone Town.",
        "Bring reef-safe sunscreen.",
      ],
    },
  },

  // RWANDA
  {
    id: "rwanda-gorilla",
    title: "Rwanda Gorilla Trekking in Volcanoes NP",
    country: "Rwanda",
    duration: "4 Days / 3 Nights",
    groupSize: "2-6 Guests",
    price: "From $2,200",
    description:
      "Trek mountain gorillas and golden monkeys through the misty bamboo forests of Volcanoes National Park.",
    image:
      "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=800&q=80",
    featured: true,
    details: {
      overview:
        "Trek mountain gorillas and golden monkeys in Rwanda's Volcanoes National Park. This 4-day safari also includes a visit to Kigali and optional cultural experiences.",
      highlights: [
        "Mountain gorilla trekking",
        "Golden monkey tracking",
        "Volcanoes National Park",
        "Kigali city tour",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Kigali – Volcanoes NP",
          description:
            "Arrive in Kigali, city tour, then drive to Volcanoes National Park.",
        },
        {
          day: "Day 2",
          title: "Gorilla Trekking",
          description:
            "Early morning briefing, then trek to find mountain gorillas. One hour with the gorillas.",
        },
        {
          day: "Day 3",
          title: "Golden Monkey Tracking",
          description:
            "Track golden monkeys in the park. Afternoon cultural visit to Ibyiwacu Village.",
        },
        {
          day: "Day 4",
          title: "Volcanoes NP – Kigali",
          description:
            "Drive back to Kigali for departure.",
        },
      ],
      accommodation:
        "3 nights in a comfortable lodge near Volcanoes National Park.",
      meals: "Full board throughout.",
      activities: [
        "Gorilla trekking",
        "Golden monkey tracking",
        "Cultural village visit",
        "Kigali city tour",
      ],
      inclusions: [
        "Gorilla permit",
        "Golden monkey permit",
        "Park fees",
        "Accommodation",
        "Meals",
        "Transport",
        "Guide",
      ],
      exclusions: [
        "Flights",
        "Insurance",
        "Visas",
        "Drinks",
        "Tips",
      ],
      packingList: [
        "Hiking boots",
        "Long pants",
        "Rain jacket",
        "Gardening gloves",
        "Camera (no flash)",
        "Insect repellent",
      ],
      bestTime:
        "June to September and December to February for drier trails.",
      pricingTerms:
        "Per person sharing. Gorilla permits must be paid in full at booking.",
      bookingPolicy:
        "Gorilla permits are non-refundable. Lodge cancellation: free up to 30 days prior.",
      travelTips: [
        "Book permits 3–6 months in advance.",
        "Bring gloves for the trek.",
        "Keep a 7-meter distance from gorillas.",
      ],
    },
  },
  {
    id: "rwanda-golden-monkey-kivu",
    title: "Golden Monkeys and Lake Kivu Retreat",
    country: "Rwanda",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 Guests",
    price: "From $1,650",
    description:
      "Track playful golden monkeys in Volcanoes NP, then unwind on the serene shores of Lake Kivu.",
    image:
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=800&q=80",
    details: {
      overview:
        "Track golden monkeys in Volcanoes National Park and relax on the shores of Lake Kivu. This 5-day retreat combines wildlife and relaxation.",
      highlights: [
        "Golden monkey tracking",
        "Lake Kivu beaches",
        "Coffee plantation tour",
        "Cultural experiences",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Kigali – Volcanoes NP",
          description:
            "Arrive in Kigali, drive to Volcanoes National Park.",
        },
        {
          day: "Day 2",
          title: "Golden Monkey Tracking",
          description:
            "Track golden monkeys in the park. Afternoon cultural visit.",
        },
        {
          day: "Day 3",
          title: "Volcanoes NP – Lake Kivu",
          description:
            "Drive to Lake Kivu. Afternoon relaxation.",
        },
        {
          day: "Day 4",
          title: "Lake Kivu",
          description:
            "Day at leisure. Optional boat ride or coffee tour.",
        },
        {
          day: "Day 5",
          title: "Lake Kivu – Kigali",
          description:
            "Drive back to Kigali for departure.",
        },
      ],
      accommodation:
        "4 nights in lodges near Volcanoes NP and Lake Kivu.",
      meals: "Full board throughout.",
      activities: [
        "Golden monkey tracking",
        "Boat ride",
        "Coffee tour",
        "Cultural visits",
      ],
      inclusions: [
        "Golden monkey permit",
        "Park fees",
        "Accommodation",
        "Meals",
        "Transport",
      ],
      exclusions: [
        "Flights",
        "Insurance",
        "Visas",
        "Drinks",
        "Tips",
      ],
      packingList: [
        "Hiking boots",
        "Long pants",
        "Rain jacket",
        "Swimwear",
        "Camera",
      ],
      bestTime:
        "June to September and December to February.",
      pricingTerms:
        "Per person sharing. 30% deposit required.",
      bookingPolicy:
        "Free cancellation up to 30 days prior. 50% refund 15–29 days.",
      travelTips: [
        "Bring swimwear for Lake Kivu.",
        "Try the local coffee.",
        "Book permits in advance.",
      ],
    },
  },

  // SOUTH AFRICA
  {
    id: "kruger",
    title: "Kruger National Park Safari",
    country: "South Africa",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 Guests",
    price: "From $1,700",
    description:
      "Big Five game drives in South Africa's largest and most famous national park.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    details: {
      overview:
        "Experience the Big Five in Kruger National Park, South Africa's largest and most famous wildlife reserve. This 5-day safari offers excellent game viewing and comfortable lodges.",
      highlights: [
        "Big Five",
        "Kruger National Park",
        "Sunset game drives",
        "Bush walks",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Johannesburg – Kruger",
          description:
            "Fly or drive to Kruger. Afternoon game drive.",
        },
        {
          day: "Day 2",
          title: "Kruger National Park",
          description:
            "Full day of game drives.",
        },
        {
          day: "Day 3",
          title: "Kruger National Park",
          description:
            "Morning bush walk and afternoon game drive.",
        },
        {
          day: "Day 4",
          title: "Kruger National Park",
          description:
            "Full day of game drives.",
        },
        {
          day: "Day 5",
          title: "Kruger – Johannesburg",
          description:
            "Morning game drive, then transfer to Johannesburg.",
        },
      ],
      accommodation:
        "4 nights in a safari lodge or rest camp in Kruger.",
      meals: "Full board or half board depending on lodge.",
      activities: [
        "Game drives",
        "Bush walks",
        "Birdwatching",
        "Night drives",
      ],
      inclusions: [
        "Park fees",
        "Accommodation",
        "Meals as specified",
        "Game drives",
        "Guide",
      ],
      exclusions: [
        "Flights",
        "Insurance",
        "Visas",
        "Drinks",
        "Tips",
      ],
      packingList: [
        "Neutral clothing",
        "Warm jacket",
        "Comfortable shoes",
        "Camera",
        "Binoculars",
        "Sun protection",
      ],
      bestTime:
        "May to September for dry season and best game viewing.",
      pricingTerms:
        "Per person sharing. 30% deposit required.",
      bookingPolicy:
        "Free cancellation up to 30 days prior. 50% refund 15–29 days.",
      travelTips: [
        "Book early for peak season.",
        "Bring a good zoom lens.",
        "Respect park rules.",
      ],
    },
  },
  {
    id: "cape-town",
    title: "Cape Town and Winelands Experience",
    country: "South Africa",
    duration: "6 Days / 5 Nights",
    groupSize: "2-10 Guests",
    price: "From $1,500",
    description:
      "Table Mountain, Cape Point, penguins and world-class wine estates.",
    image:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=800&q=80",
    details: {
      overview:
        "Explore Cape Town's iconic landmarks, including Table Mountain and Cape Point, and enjoy wine tasting in the nearby Winelands.",
      highlights: [
        "Table Mountain",
        "Cape Point",
        "Boulders Beach penguins",
        "Winelands tasting",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Arrive Cape Town",
          description:
            "Arrive and transfer to hotel. Afternoon at leisure.",
        },
        {
          day: "Day 2",
          title: "Cape Town City Tour",
          description:
            "Table Mountain, city center, and V&A Waterfront.",
        },
        {
          day: "Day 3",
          title: "Cape Peninsula",
          description:
            "Cape Point, Boulders Beach penguins, and Chapman's Peak.",
        },
        {
          day: "Day 4",
          title: "Winelands",
          description:
            "Stellenbosch and Franschhoek wine tasting.",
        },
        {
          day: "Day 5",
          title: "Cape Town",
          description:
            "Free day or optional Robben Island tour.",
        },
        {
          day: "Day 6",
          title: "Departure",
          description:
            "Transfer to airport for departure.",
        },
      ],
      accommodation:
        "5 nights in a Cape Town hotel.",
      meals: "Bed & breakfast.",
      activities: [
        "Table Mountain cable car",
        "Cape Point tour",
        "Wine tasting",
        "Penguin viewing",
      ],
      inclusions: [
        "Accommodation",
        "Breakfast",
        "Tours as per itinerary",
        "Transport",
      ],
      exclusions: [
        "Flights",
        "Insurance",
        "Visas",
        "Lunches and dinners",
        "Tips",
      ],
      packingList: [
        "Comfortable walking shoes",
        "Jacket for Table Mountain",
        "Camera",
        "Sun protection",
      ],
      bestTime:
        "November to March for warm weather; year-round for wine tasting.",
      pricingTerms:
        "Per person sharing. 30% deposit required.",
      bookingPolicy:
        "Free cancellation up to 30 days prior.",
      travelTips: [
        "Book Table Mountain cable car in advance.",
        "Weather can change quickly — bring layers.",
        "Try local wines.",
      ],
    },
  },
];

const countries = [
  "All",
  "Kenya",
  "Uganda",
  "Botswana",
  "Tanzania",
  "Rwanda",
  "South Africa",
] as const;

export default function Safaris() {
  const [active, setActive] = useState<(typeof countries)[number]>("All");
  const [selectedSafari, setSelectedSafari] = useState<Safari | null>(null);

  const filtered =
    active === "All" ? safaris : safaris.filter((s) => s.country === active);

  const openDetails = (safari: Safari) => {
    setSelectedSafari(safari);
    document.body.style.overflow = "hidden";
  };

  const closeDetails = () => {
    setSelectedSafari(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section id="safaris" className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-[#d4a24c] font-medium tracking-widest uppercase text-sm mb-3">
              Our Safari Packages
            </p>
            <h2 className="section-title mx-auto">Explore Our Safaris</h2>
            <p className="section-subtitle mx-auto">
              From the Great Migration in Kenya to gorilla trekking in Uganda and
              Rwanda, and the wilds of Botswana — discover the perfect African
              adventure.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {countries.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  active === c
                    ? "bg-[#1f5e3b] text-white border-[#1f5e3b]"
                    : "bg-white text-gray-700 border-gray-300 hover:border-[#1f5e3b] hover:text-[#1f5e3b]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((safari) => (
              <article
                key={safari.id}
                onClick={() => openDetails(safari)}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col cursor-pointer"
              >
                <div className="relative h-60 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url('${safari.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-4 left-4 bg-[#d4a24c] text-[#14291f] text-xs font-semibold px-3 py-1 rounded-full">
                    {safari.country}
                  </span>
                  {safari.featured && (
                    <span className="absolute top-4 right-4 bg-[#1f5e3b] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-brand text-xl font-bold text-[#14291f] mb-2 group-hover:text-[#1f5e3b] transition-colors">
                    {safari.title}
                  </h3>

                  <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {safari.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={14} /> {safari.groupSize}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mb-6 flex-1">
                    {safari.description}
                  </p>

                  <div className="flex items-center justify-end border-t pt-4">
                    <Link
                      href="/#contact"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-sm font-medium text-[#d4a24c] hover:text-[#1f5e3b] transition-colors"
                    >
                      Enquire <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">
              Can&apos;t find what you&apos;re looking for? We build custom
              safaris too.
            </p>
            <Link href="/#contact" className="btn-secondary">
              Request a Custom Safari
            </Link>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedSafari && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 backdrop-blur-sm p-4 md:p-8"
          onClick={closeDetails}
        >
          <div
            className="relative bg-white rounded-2xl max-w-4xl w-full my-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${selectedSafari.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <button
                onClick={closeDetails}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-colors"
                aria-label="Close details"
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="inline-block bg-[#d4a24c] text-[#14291f] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {selectedSafari.country}
                </span>
                <h2 className="font-brand text-2xl md:text-3xl font-bold text-white mb-2">
                  {selectedSafari.title}
                </h2>
                <div className="flex flex-wrap gap-4 text-sm text-white/90">
                  <span className="flex items-center gap-1">
                    <Clock size={16} /> {selectedSafari.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={16} /> {selectedSafari.groupSize}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={16} /> {selectedSafari.country}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
              {/* Overview */}
              <section>
                <h3 className="flex items-center gap-2 text-lg font-bold text-[#14291f] mb-3">
                  <Info size={20} className="text-[#1f5e3b]" /> Overview
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedSafari.details.overview}
                </p>
              </section>

              {/* Highlights */}
              <section>
                <h3 className="flex items-center gap-2 text-lg font-bold text-[#14291f] mb-3">
                  <Compass size={20} className="text-[#1f5e3b]" /> Trip Highlights
                </h3>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {selectedSafari.details.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle size={16} className="text-[#d4a24c] mt-0.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Day-by-Day Itinerary */}
              <section>
                <h3 className="flex items-center gap-2 text-lg font-bold text-[#14291f] mb-3">
                  <Calendar size={20} className="text-[#1f5e3b]" /> Day-by-Day Itinerary
                </h3>
                <div className="space-y-4">
                  {selectedSafari.details.itinerary.map((day, i) => (
                    <div
                      key={i}
                      className="border-l-4 border-[#d4a24c] pl-4 py-1"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-[#1f5e3b] text-white text-xs font-bold px-2 py-0.5 rounded">
                          {day.day}
                        </span>
                        <h4 className="font-semibold text-[#14291f]">
                          {day.title}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600">{day.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Accommodation & Meals */}
              <div className="grid md:grid-cols-2 gap-6">
                <section>
                  <h3 className="flex items-center gap-2 text-lg font-bold text-[#14291f] mb-3">
                    <Bed size={20} className="text-[#1f5e3b]" /> Accommodation
                  </h3>
                  <p className="text-sm text-gray-600">
                    {selectedSafari.details.accommodation}
                  </p>
                </section>
                <section>
                  <h3 className="flex items-center gap-2 text-lg font-bold text-[#14291f] mb-3">
                    <Utensils size={20} className="text-[#1f5e3b]" /> Meals
                  </h3>
                  <p className="text-sm text-gray-600">
                    {selectedSafari.details.meals}
                  </p>
                </section>
              </div>

              {/* Activities */}
              <section>
                <h3 className="flex items-center gap-2 text-lg font-bold text-[#14291f] mb-3">
                  <Compass size={20} className="text-[#1f5e3b]" /> Activities & Experiences
                </h3>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {selectedSafari.details.activities.map((a, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle size={16} className="text-[#d4a24c] mt-0.5 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Inclusions & Exclusions */}
              <div className="grid md:grid-cols-2 gap-6">
                <section>
                  <h3 className="flex items-center gap-2 text-lg font-bold text-[#14291f] mb-3">
                    <CheckCircle size={20} className="text-green-600" /> Inclusions
                  </h3>
                  <ul className="space-y-1.5">
                    {selectedSafari.details.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle size={14} className="text-green-600 mt-0.5 shrink-0" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h3 className="flex items-center gap-2 text-lg font-bold text-[#14291f] mb-3">
                    <XCircle size={20} className="text-red-500" /> Exclusions
                  </h3>
                  <ul className="space-y-1.5">
                    {selectedSafari.details.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <XCircle size={14} className="text-red-500 mt-0.5 shrink-0" />
                        {exc}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Packing List */}
              <section>
                <h3 className="flex items-center gap-2 text-lg font-bold text-[#14291f] mb-3">
                  <Backpack size={20} className="text-[#1f5e3b]" /> What to Bring
                </h3>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {selectedSafari.details.packingList.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle size={16} className="text-[#d4a24c] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Best Time */}
              <section>
                <h3 className="flex items-center gap-2 text-lg font-bold text-[#14291f] mb-3">
                  <Calendar size={20} className="text-[#1f5e3b]" /> Best Time to Visit
                </h3>
                <p className="text-sm text-gray-600">
                  {selectedSafari.details.bestTime}
                </p>
              </section>

              {/* Pricing Terms */}
              <section>
                <h3 className="flex items-center gap-2 text-lg font-bold text-[#14291f] mb-3">
                  <CreditCard size={20} className="text-[#1f5e3b]" /> Pricing & Payment Terms
                </h3>
                <p className="text-sm text-gray-600">
                  {selectedSafari.details.pricingTerms}
                </p>
              </section>

              {/* Booking Policy */}
              <section>
                <h3 className="flex items-center gap-2 text-lg font-bold text-[#14291f] mb-3">
                  <ShieldCheck size={20} className="text-[#1f5e3b]" /> Booking & Cancellation Policy
                </h3>
                <p className="text-sm text-gray-600">
                  {selectedSafari.details.bookingPolicy}
                </p>
              </section>

              {/* Travel Tips */}
              <section>
                <h3 className="flex items-center gap-2 text-lg font-bold text-[#14291f] mb-3">
                  <Lightbulb size={20} className="text-[#1f5e3b]" /> Travel Tips & Important Notes
                </h3>
                <ul className="space-y-1.5">
                  {selectedSafari.details.travelTips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <Lightbulb size={16} className="text-[#d4a24c] mt-0.5 shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </section>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
                <Link
                  href="/#contact"
                  onClick={closeDetails}
                  className="btn-secondary flex-1 text-center"
                >
                  Enquire About This Safari
                </Link>
                <button
                  onClick={closeDetails}
                  className="flex-1 px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:border-[#1f5e3b] hover:text-[#1f5e3b] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}