
export interface HeroContent {
  headline: string;
  subheadline: string;
  videoUrl: string;
  fallbackImage: string;
  badges: string[];
  primaryCTA: {
    text: string;
    link: string;
  };
  secondaryCTA: {
    text: string;
    link: string;
  };
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'steamed' | 'fried' | 'kurkure' | 'pizza';
  description: string;
  price: {
    half: number;
    full: number;
  };
  image: string;
  isPopular: boolean;
  spiceLevel: 'mild' | 'medium' | 'hot';
}

export interface AboutContent {
  story: string[];
  timeline: Array<{
    date: string;
    event: string;
  }>;
  philosophy: string;
  founderName: string;
  founderTitle: string;
  founderImage: string;
}

export interface ContactContent {
  address: {
    line1: string;
    line2: string;
    line3: string;
  };
  phone: string;
  email: string;
  hours: string;
  services: string[];
  mapUrl: string;
}

export const defaultHeroContent: HeroContent = {
  headline: "From Humble Stall to Culinary Legend",
  subheadline: "Experience the Magic That Transformed Sherghati's Street Food Scene",
  videoUrl: "/hero-video.mp4",
  fallbackImage: "/hero-bg.jpg",
  badges: [
    "Awarded 'Best Quality Food in City'",
    "FSSAI Certified: 20424201001152",
    "100% Pure Vegetarian · Since 2023",
    "⭐ 4.9/5 (2000+ Happy Customers)"
  ],
  primaryCTA: {
    text: "Taste the Magic → Order Now",
    link: "#menu"
  },
  secondaryCTA: {
    text: "Discover Our Story",
    link: "#story"
  }
};

export const defaultMenuItems: MenuItem[] = [
  {
    id: "1",
    name: "Veg Momos",
    category: "steamed",
    description: "Fresh vegetables wrapped in soft dough, steamed to perfection",
    price: { half: 25, full: 50 },
    image: "/menu/veg-momos.jpg",
    isPopular: true,
    spiceLevel: "mild"
  },
  {
    id: "2",
    name: "Paneer Momos",
    category: "steamed",
    description: "Premium cottage cheese filling with special spices",
    price: { half: 35, full: 70 },
    image: "/menu/paneer-momos.jpg",
    isPopular: true,
    spiceLevel: "medium"
  },
  {
    id: "3",
    name: "Soya Momos",
    category: "steamed",
    description: "Protein-rich soya chunks with aromatic herbs",
    price: { half: 30, full: 60 },
    image: "/menu/soya-momos.jpg",
    isPopular: false,
    spiceLevel: "medium"
  },
  {
    id: "4",
    name: "Cheese Corn Momos",
    category: "steamed",
    description: "Sweet corn and cheese blend for a creamy delight",
    price: { half: 50, full: 100 },
    image: "/menu/cheese-corn-momos.jpg",
    isPopular: true,
    spiceLevel: "mild"
  },
  {
    id: "5",
    name: "Veg Fried Momos",
    category: "fried",
    description: "Crispy golden-fried momos with tangy dipping sauce",
    price: { half: 30, full: 60 },
    image: "/menu/veg-fried.jpg",
    isPopular: true,
    spiceLevel: "medium"
  },
  {
    id: "6",
    name: "Paneer Fried Momos",
    category: "fried",
    description: "Paneer momos fried to golden perfection",
    price: { half: 46, full: 80 },
    image: "/menu/paneer-fried.jpg",
    isPopular: false,
    spiceLevel: "medium"
  },
  {
    id: "7",
    name: "Soya Fried Momos",
    category: "fried",
    description: "Crispy soya momos with special chutney",
    price: { half: 35, full: 70 },
    image: "/menu/soya-fried.jpg",
    isPopular: false,
    spiceLevel: "hot"
  },
  {
    id: "8",
    name: "Cheese Corn Fried",
    category: "fried",
    description: "Fried cheese corn momos with extra crunch",
    price: { half: 55, full: 119 },
    image: "/menu/cheese-corn-fried.jpg",
    isPopular: true,
    spiceLevel: "mild"
  },
  {
    id: "9",
    name: "Kurkure Veg Momos",
    category: "kurkure",
    description: "Our signature crispy kurkure coating - Sherghati exclusive!",
    price: { half: 50, full: 100 },
    image: "/menu/kurkure-veg.jpg",
    isPopular: true,
    spiceLevel: "medium"
  },
  {
    id: "10",
    name: "Paneer Kurkure Momos",
    category: "kurkure",
    description: "Premium paneer with our famous kurkure crunch",
    price: { half: 60, full: 120 },
    image: "/menu/paneer-kurkure.jpg",
    isPopular: true,
    spiceLevel: "medium"
  },
  {
    id: "11",
    name: "Cheese Kurkure Momos",
    category: "kurkure",
    description: "Cheesy goodness with kurkure coating",
    price: { half: 60, full: 120 },
    image: "/menu/cheese-kurkure.jpg",
    isPopular: true,
    spiceLevel: "mild"
  },
  {
    id: "12",
    name: "Veg Pizza Momos",
    category: "pizza",
    description: "Fusion innovation - Pizza meets momos!",
    price: { half: 80, full: 160 },
    image: "/menu/veg-pizza.jpg",
    isPopular: true,
    spiceLevel: "medium"
  },
  {
    id: "13",
    name: "Paneer Pizza Momos",
    category: "pizza",
    description: "Premium paneer pizza momos with Italian herbs",
    price: { half: 100, full: 200 },
    image: "/menu/paneer-pizza.jpg",
    isPopular: true,
    spiceLevel: "medium"
  },
  {
    id: "14",
    name: "Soya Pizza Momos",
    category: "pizza",
    description: "Protein-packed pizza momos",
    price: { half: 90, full: 180 },
    image: "/menu/soya-pizza.jpg",
    isPopular: false,
    spiceLevel: "hot"
  },
  {
    id: "15",
    name: "Cheese Corn Pizza Momos",
    category: "pizza",
    description: "Ultimate cheese corn pizza momos",
    price: { half: 120, full: 240 },
    image: "/menu/cheese-corn-pizza.jpg",
    isPopular: true,
    spiceLevel: "mild"
  }
];

export const defaultAboutContent: AboutContent = {
  story: [
    "In September 2023, Dhruv Gupta decided he'd rather build his own empire than work in someone else's. Starting with traditional Bihari 'Pita', he quickly learned that success requires understanding what people truly crave.",
    "The pivot to momos wasn't just a business decision - it was a revelation. Today, Momos Magic isn't just a food stall; it's a symbol of entrepreneurial spirit and culinary innovation."
  ],
  timeline: [
    { date: "Sep 2023", event: "Humble beginnings with small stall" },
    { date: "Nov 2023", event: "Pita to Momos transformation" },
    { date: "Jan 2024", event: "Exclusive Kurkure Momos introduced" },
    { date: "Jun 2024", event: "'Best Quality Food' award from DM Office" },
    { date: "Dec 2024", event: "Premium stall redesign" },
    { date: "Mar 2025", event: "Pizza Momos innovation launched" }
  ],
  philosophy: "Quantity bhi Mast, Taste bhi Zabardast",
  founderName: "Dhruv Gupta",
  founderTitle: "Founder & Head Innovator",
  founderImage: "/founder.jpg"
};

export const defaultContactContent: ContactContent = {
  address: {
    line1: "Momo Magic, Naya Bazar",
    line2: "Near Post Office, Sherghati",
    line3: "Bihar 824211"
  },
  phone: "+91 9955955191",
  email: "info@momomagic.com",
  hours: "Monday-Sunday: 10:00 AM - 10:00 PM",
  services: [
    "Takeaway Only (Currently Available)",
    "10KM Delivery Radius (Coming Soon)",
    "Online Ordering Available",
    "Group Order Special Discounts",
    "Catering Service Booking Available",
    "Table Booking Option (Coming Soon)"
  ],
  mapUrl: "https://maps.google.com/?q=Sherghati,Bihar"
};
