// Business Information
export const BUSINESS_NAME = "Applegraphics";
export const BUSINESS_TAGLINE = "Professional Printing & Graphic Design in Chirala";
export const BUSINESS_DESCRIPTION = "Your trusted partner for flex printing, vinyl printing, banners, visiting cards, signage, and custom graphic design in Chirala, Andhra Pradesh.";

// Contact Information
export const PHONE_NUMBER = "+91 9876543210"; // Replace with actual number
export const PHONE_NUMBER_RAW = "919876543210"; // For WhatsApp links
export const EMAIL = "contact@applegraphics.in";
export const ADDRESS = {
  street: "Main Road, Near Bus Stand",
  city: "Chirala",
  district: "Bapatla District",
  state: "Andhra Pradesh",
  pincode: "523155",
  country: "India"
};
export const FULL_ADDRESS = `${ADDRESS.street}, ${ADDRESS.city}, ${ADDRESS.district}, ${ADDRESS.state} - ${ADDRESS.pincode}`;

// Google Maps
export const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30773.147854566874!2d80.33!3d15.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a73d8b4ade8e5%3A0x9c9e5e3c5d3a3e5!2sChirala%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1703300000000!5m2!1sen!2sin";
export const GOOGLE_MAPS_URL = "https://maps.google.com/?q=Applegraphics+Chirala+Andhra+Pradesh";

// Working Hours
export const WORKING_HOURS = {
  weekdays: "9:00 AM - 8:00 PM",
  saturday: "9:00 AM - 8:00 PM",
  sunday: "10:00 AM - 2:00 PM"
};

// WhatsApp Message
export const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'm interested in your printing services. Please share more details.");
export const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER_RAW}?text=${WHATSAPP_MESSAGE}`;

// Phone URL
export const PHONE_URL = `tel:${PHONE_NUMBER.replace(/\s/g, '')}`;

// Social Links
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/applegraphicschirala",
  instagram: "https://instagram.com/applegraphicschirala",
  whatsapp: WHATSAPP_URL
};

// Services
export const SERVICES = [
  {
    id: "flex-printing",
    title: "Flex Printing",
    shortDescription: "High-quality flex banners for shops, events, and advertisements",
    fullDescription: "We provide premium quality flex printing for all your advertising needs. Our state-of-the-art flex printing machines deliver vibrant colors and sharp images that grab attention and last long.",
    useCases: [
      "Shop name boards and signage",
      "Event banners and backdrops",
      "Advertising hoardings",
      "Political campaign banners",
      "Festival and wedding banners"
    ],
    icon: "Printer"
  },
  {
    id: "vinyl-printing",
    title: "Vinyl Printing",
    shortDescription: "Durable vinyl stickers and graphics for vehicles and surfaces",
    fullDescription: "Premium vinyl printing for stickers, vehicle wraps, and surface graphics. Our vinyl prints are weather-resistant and maintain their quality for years.",
    useCases: [
      "Vehicle branding and wraps",
      "Window graphics",
      "Wall stickers and decals",
      "Floor graphics",
      "Product labels and stickers"
    ],
    icon: "Sticker"
  },
  {
    id: "sunboard-signage",
    title: "Sunboard & Signage",
    shortDescription: "Professional sign boards for businesses and offices",
    fullDescription: "Custom sunboard printing and professional signage solutions for businesses. We create eye-catching sign boards that enhance your brand visibility.",
    useCases: [
      "Office name plates",
      "Direction signs",
      "Menu boards",
      "Real estate signs",
      "Exhibition displays"
    ],
    icon: "SquareStack"
  },
  {
    id: "visiting-cards",
    title: "Visiting Cards",
    shortDescription: "Premium business cards that make lasting impressions",
    fullDescription: "Create a professional first impression with our high-quality visiting cards. We offer various paper stocks, finishes, and designs to match your brand identity.",
    useCases: [
      "Business networking cards",
      "Professional visiting cards",
      "Premium embossed cards",
      "Matte and glossy finish cards",
      "Custom shaped cards"
    ],
    icon: "CreditCard"
  },
  {
    id: "banners-posters",
    title: "Banners & Posters",
    shortDescription: "Eye-catching banners and posters for any occasion",
    fullDescription: "From promotional posters to grand event banners, we deliver high-quality prints that capture attention. Perfect for marketing campaigns, events, and celebrations.",
    useCases: [
      "Promotional posters",
      "Movie and event posters",
      "Roll-up standees",
      "X-stand banners",
      "Outdoor advertisement banners"
    ],
    icon: "Image"
  },
  {
    id: "logo-branding",
    title: "Logo & Branding Design",
    shortDescription: "Complete brand identity design for your business",
    fullDescription: "Build a strong brand identity with our professional logo and branding design services. We create memorable logos and complete brand guidelines that set you apart from competition.",
    useCases: [
      "Logo design",
      "Brand identity packages",
      "Letterhead and envelope design",
      "Social media branding",
      "Complete brand guidelines"
    ],
    icon: "Palette"
  }
];

// Gallery Categories
export const GALLERY_CATEGORIES = [
  { id: "all", name: "All Works" },
  { id: "flex-banners", name: "Flex & Banners" },
  { id: "visiting-cards", name: "Visiting Cards" },
  { id: "sign-boards", name: "Sign Boards" },
  { id: "branding", name: "Branding Designs" }
];

// Gallery Works
export const GALLERY_WORKS = [
  {
    id: 1,
    title: "Shop Flex Banner",
    category: "flex-banners",
    image: "/images/works/flex-1.jpg"
  },
  {
    id: 2,
    title: "Event Banner Design",
    category: "flex-banners",
    image: "/images/works/flex-2.jpg"
  },
  {
    id: 3,
    title: "Premium Business Card",
    category: "visiting-cards",
    image: "/images/works/card-1.jpg"
  },
  {
    id: 4,
    title: "Minimalist Visiting Card",
    category: "visiting-cards",
    image: "/images/works/card-2.jpg"
  },
  {
    id: 5,
    title: "Office Sign Board",
    category: "sign-boards",
    image: "/images/works/sign-1.jpg"
  },
  {
    id: 6,
    title: "Shop Name Board",
    category: "sign-boards",
    image: "/images/works/sign-2.jpg"
  },
  {
    id: 7,
    title: "Restaurant Logo Design",
    category: "branding",
    image: "/images/works/brand-1.jpg"
  },
  {
    id: 8,
    title: "Corporate Brand Identity",
    category: "branding",
    image: "/images/works/brand-2.jpg"
  },
  {
    id: 9,
    title: "Political Campaign Banner",
    category: "flex-banners",
    image: "/images/works/flex-3.jpg"
  },
  {
    id: 10,
    title: "Doctor Visiting Card",
    category: "visiting-cards",
    image: "/images/works/card-3.jpg"
  },
  {
    id: 11,
    title: "Direction Sign Board",
    category: "sign-boards",
    image: "/images/works/sign-3.jpg"
  },
  {
    id: 12,
    title: "Startup Brand Package",
    category: "branding",
    image: "/images/works/brand-3.jpg"
  }
];

// Why Choose Us Points
export const WHY_CHOOSE_US = [
  {
    title: "Local Chirala Business",
    description: "Proudly serving Chirala and Prakasam district for over 10 years. We understand local business needs.",
    icon: "MapPin"
  },
  {
    title: "Quality Materials",
    description: "We use only premium quality materials for all our printing work. Your prints will last longer.",
    icon: "Award"
  },
  {
    title: "Fast Delivery",
    description: "Quick turnaround time for all orders. Most orders ready within 24-48 hours.",
    icon: "Clock"
  },
  {
    title: "Affordable Prices",
    description: "Best prices in Chirala without compromising on quality. Value for money guaranteed.",
    icon: "IndianRupee"
  },
  {
    title: "Expert Design Team",
    description: "Skilled designers who create eye-catching designs that help your business stand out.",
    icon: "Users"
  },
  {
    title: "Customer Satisfaction",
    description: "1000+ happy customers across Chirala. Your satisfaction is our priority.",
    icon: "ThumbsUp"
  }
];

// Navigation Links
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/our-works", label: "Our Works" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" }
];

// SEO Keywords
export const SEO_KEYWORDS = [
  "printing shop in Chirala",
  "flex printing in Chirala",
  "graphic design shop in Chirala",
  "banner printing Chirala",
  "visiting card printing Chirala",
  "vinyl printing Chirala",
  "signboard maker Chirala",
  "logo design Chirala",
  "branding design Chirala",
  "Applegraphics Chirala"
];
