/**
 * LAST BORN BARBING SALON - Central Data File
 * Edit any business info, prices, services, photos, reviews, or links here.
 */

export interface ServiceItem {
  id: string;
  name: string;
  category: 'haircut' | 'beard' | 'styling' | 'treatment';
  price: string;
  priceNumeric: number;
  duration: string;
  description: string;
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Fades' | 'Beards' | 'Styling' | 'Shop';
  image: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  source: 'Google Review';
}

export const SALON_DATA = {
  business: {
    name: 'LAST BORN BARBING SALON',
    shortName: 'Last Born',
    tagline: 'Fresh Cuts. Sharp Lines. Zero Stress.',
    subheadline: 'Ijebu-Jesa’s go-to barbing salon, clean, professional and always on point.',
    address: 'Oriade, Shop 16 Aribisala Shopping Complex, Ijebu Ijesa Roundabout, Ijebu-Jesa 233361, Osun State, Nigeria',
    landmark: 'Shop 16, Aribisala Shopping Complex (At the Ijebu Ijesa Roundabout)',
    phone: '0806 939 0462',
    phoneRaw: '+2348069390462',
    phoneTel: 'tel:+2348069390462',
    whatsappNumber: '2348069390462',
    whatsappUrl: 'https://wa.me/2348069390462',
    hours: 'Open Daily: 8:00 AM – 10:00 PM',
    rating: '5.0',
    reviewCount: '28+',
    googlePlusCode: 'MRJ8+WC Iwoye',
    googleMapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Last+Born+Barbing+Salon+Ijebu-Jesa+Osun+State',
    googleMapsEmbedUrl: 'https://www.google.com/maps?q=Ijebu-Jesa+Osun+State+Nigeria&output=embed',
    instagramUrl: 'https://instagram.com/lastbornbarbingsalon',
    facebookUrl: 'https://facebook.com/lastbornbarbingsalon',
  },

  images: {
    hero: '/src/assets/images/hero_barber_luxury_1793017413097.jpg',
    interior: '/src/assets/images/barber_shop_interior_1793017413133.jpg',
    fade: '/src/assets/images/haircut_sharp_fade_1793017413560.jpg',
    beard: '/src/assets/images/beard_grooming_luxury_1793017414843.jpg',
    dreadlocks: '/src/assets/images/dreadlocks_styling_1793017415660.jpg',
  },

  stats: [
    { label: 'Google Rating', value: '5.0 ★', detail: '100% verified 5-star customer feedback' },
    { label: 'Clean & Hygienic Environment', value: '100% Sanitized', detail: 'Sterilized clippers & fresh capes for every customer' },
    { label: 'Professional Barbers', value: 'Master Craft', detail: 'Precision lines, smooth tapers, zero razor bumps' },
  ],

  services: [
    {
      id: 'classic-haircut',
      name: 'Classic Haircut',
      category: 'haircut',
      price: 'From ₦1,500',
      priceNumeric: 1500,
      duration: '30 mins',
      description: 'Clean scissor and clipper cut tailored to your head shape, finished with sharp edge detailing.',
      popular: true,
    },
    {
      id: 'fade-and-taper',
      name: 'Fade and Taper',
      category: 'haircut',
      price: 'From ₦2,000',
      priceNumeric: 2000,
      duration: '40 mins',
      description: 'Seamless low, mid, or high skin fade with crisp temple tapers and razor lineup.',
      popular: true,
    },
    {
      id: 'low-cut',
      name: 'Low Cut',
      category: 'haircut',
      price: 'From ₦1,500',
      priceNumeric: 1500,
      duration: '25 mins',
      description: 'Even all-round clean cut, brushed finish, with precision edge-up and soothing neck clean.',
    },
    {
      id: 'beard-trim-shaping',
      name: 'Beard Trim and Shaping',
      category: 'beard',
      price: 'From ₦1,000',
      priceNumeric: 1000,
      duration: '20 mins',
      description: 'Symmetrical beard sculpting, straight-razor cheek lines, and nourishing beard oil finish.',
      popular: true,
    },
    {
      id: 'line-up-shape-up',
      name: 'Line-up / Shape-up',
      category: 'haircut',
      price: 'From ₦1,000',
      priceNumeric: 1000,
      duration: '15 mins',
      description: 'Razor-sharp forehead, temple, and neckline definition without altering hair length.',
    },
    {
      id: 'kids-cut',
      name: 'Kids Cut',
      category: 'haircut',
      price: 'From ₦1,200',
      priceNumeric: 1200,
      duration: '25 mins',
      description: 'Patient, gentle, and stylish cuts for young gentlemen in a calm, welcoming atmosphere.',
    },
    {
      id: 'hair-wash-treatment',
      name: 'Hair Wash and Treatment',
      category: 'treatment',
      price: 'From ₦1,500',
      priceNumeric: 1500,
      duration: '25 mins',
      description: 'Deep cleansing shampoo, scalp massage, hydrating conditioner, and anti-dandruff relief.',
    },
    {
      id: 'hair-dye-coloring',
      name: 'Hair Dye / Coloring',
      category: 'styling',
      price: 'From ₦2,500',
      priceNumeric: 2500,
      duration: '45 mins',
      description: 'Rich jet-black hair enhancement, grey hair coverage, or custom beard color enhancement.',
    },
    {
      id: 'dreadlocks-twist-styling',
      name: 'Dreadlocks and Twist Styling',
      category: 'styling',
      price: 'From ₦4,000',
      priceNumeric: 4000,
      duration: '60 mins',
      description: 'Expert re-twisting, locs maintenance, barrel twists, and neat styling with long-lasting hold.',
      popular: true,
    },
  ] as ServiceItem[],

  features: [
    {
      title: 'Hygienic & Safe',
      description: 'Clippers are thoroughly sterilized with UV equipment and antiseptic spray before every client. Fresh disposable neck strips used every time.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Skilled Barbers',
      description: 'Experienced master barbers with deep precision. We pay attention to the smallest details—from crisp symmetry to zero razor bumps.',
      icon: 'Scissors',
    },
    {
      title: 'Fair Prices',
      description: 'Premium VIP treatment at honest, transparent rates. No hidden fees, just first-class grooming tailored to every gentleman.',
      icon: 'BadgePercent',
    },
    {
      title: 'Easy to Find',
      description: 'Conveniently situated right at the Ijebu-Jesa Roundabout inside Aribisala Shopping Complex (Shop 16). Easy parking and quick access.',
      icon: 'MapPin',
    },
  ],

  reviews: [
    {
      id: 'review-1',
      name: 'Oyewo Roseline',
      rating: 5,
      date: 'Recent Google Review',
      comment: 'An impressive facility, clean and well-structured, exemplifying a commitment to the safety of both people and customers.',
      verified: true,
      source: 'Google Review',
    },
    {
      id: 'review-2',
      name: 'Helen Middleton',
      rating: 5,
      date: 'Recent Google Review',
      comment: 'What a great services they do offer there customers, thanks for your services bro ❤️',
      verified: true,
      source: 'Google Review',
    },
    {
      id: 'review-3',
      name: 'Kehinde Adeleke',
      rating: 5,
      date: '1 month ago',
      comment: 'The best barbing salon in Ijebu-Jesa without doubt. The clippers are always sterilized right in front of you, and the line-up is razor sharp.',
      verified: true,
      source: 'Google Review',
    },
    {
      id: 'review-4',
      name: 'David Oladipo',
      rating: 5,
      date: '2 months ago',
      comment: 'Calm ambiance, comfortable chairs, and real professionals. They handle beard grooming and taper fade with extreme precision.',
      verified: true,
      source: 'Google Review',
    },
  ] as ReviewItem[],

  gallery: [
    {
      id: 'gal-1',
      title: 'Sharp Skin Fade & Lineup',
      category: 'Fades',
      image: '/src/assets/images/haircut_sharp_fade_1793017413560.jpg',
      description: 'Clean low skin fade with defined hairline shape up.',
    },
    {
      id: 'gal-2',
      title: 'Luxury Beard Sculpt & Outline',
      category: 'Beards',
      image: '/src/assets/images/beard_grooming_luxury_1793017414843.jpg',
      description: 'Symmetric razor contouring and deep conditioning beard grooming.',
    },
    {
      id: 'gal-3',
      title: 'Dreadlocks & Temple Fade',
      category: 'Styling',
      image: '/src/assets/images/dreadlocks_styling_1793017415660.jpg',
      description: 'Intricate neat twists with clean graduated temple fade.',
    },
    {
      id: 'gal-4',
      title: 'Executive Salon Interior',
      category: 'Shop',
      image: '/src/assets/images/barber_shop_interior_1793017413133.jpg',
      description: 'Spotless luxury interior with backlit mirrors and vintage-modern chairs.',
    },
    {
      id: 'gal-5',
      title: 'Master Barber Craft',
      category: 'Shop',
      image: '/src/assets/images/hero_barber_luxury_1793017413097.jpg',
      description: 'Our lead barber delivering meticulous attention to detail on every cut.',
    },
    {
      id: 'gal-6',
      title: 'Classic Taper & Hot Towel Clean',
      category: 'Fades',
      image: '/src/assets/images/haircut_sharp_fade_1793017413560.jpg',
      description: 'Smooth blended taper suitable for professional and casual settings.',
    },
  ] as GalleryItem[],

  faqs: [
    {
      question: 'Do I need to book in advance or can I walk in?',
      answer: 'Both are welcome! Walk-ins are always accommodated, but booking ahead on WhatsApp guarantees zero wait time during peak hours.',
    },
    {
      question: 'How do you ensure clipper and equipment hygiene?',
      answer: 'We disinfect and sterilize all clippers with medical-grade antiseptic spray and UV sterilizers between every single client. We also use fresh disposable neck strips.',
    },
    {
      question: 'Where exactly is Last Born Barbing Salon located?',
      answer: 'We are situated in Oriade LGA at Shop 16, Aribisala Shopping Complex, right at the Ijebu-Jesa Roundabout. It is very easy to find with ample parking.',
    },
    {
      question: 'What are your opening hours?',
      answer: 'We are open daily Monday through Sunday, from 8:00 AM to 10:00 PM.',
    },
  ],
};

/**
 * Helper to build prefilled WhatsApp booking message URL
 */
export function buildWhatsAppLink(serviceName?: string, name?: string, date?: string, time?: string, notes?: string): string {
  let message = 'Hi Last Born Barbing Salon! ';
  if (serviceName) {
    message += `I would like to book a *${serviceName}*.`;
  } else {
    message += 'I would like to book a session for a fresh cut.';
  }

  if (name) {
    message += `\n\n*Name:* ${name}`;
  }
  if (date) {
    message += `\n*Preferred Date:* ${date}`;
  }
  if (time) {
    message += `\n*Preferred Time:* ${time}`;
  }
  if (notes) {
    message += `\n*Notes:* ${notes}`;
  }

  message += '\n\nPlease confirm availability. Thank you!';

  return `https://wa.me/${SALON_DATA.business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
