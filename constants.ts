import { MenuCategory, TestimonialData, FaqItem } from './types';

export const MENU_ITEMS: MenuCategory[] = [
  {
    category: "Breakfast Tacos",
    description: "The reason for the line. Freshly cracked eggs on your choice of flour or corn tortillas.",
    items: [
      { 
        name: "The Migas", 
        price: "$4.50", 
        desc: "Crispy tortilla strips, fluffy eggs, melted cheese, pico de gallo.", 
        featured: true,
        image: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=400&auto=format&fit=crop"
      },
      { 
        name: "Chorizo & Egg", 
        price: "$4.25", 
        desc: "House-made spicy pork sausage scrambled with fresh eggs.", 
        featured: true,
        image: "https://images.unsplash.com/photo-1593584785033-9c7604d0863f?q=80&w=400&auto=format&fit=crop"
      },
      { 
        name: "Bacon & Egg", 
        price: "$4.25", 
        desc: "Thick cut bacon, fluffy eggs, cheddar cheese.", 
        featured: false,
        image: "https://images.unsplash.com/photo-1604085792782-8d92f276d7d8?q=80&w=400&auto=format&fit=crop"
      },
      { 
        name: "Potato & Egg", 
        price: "$3.90", 
        desc: "Tender potatoes, eggs, cheese.", 
        featured: false,
        image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=400&auto=format&fit=crop"
      },
    ]
  },
  {
    category: "Street Tacos & Plates",
    description: "Classic meats prepared Estilo Michoacán—steamed to tenderness, never dry.",
    items: [
      { 
        name: "Al Pastor", 
        price: "$4.75", 
        desc: "Marinated pork, pineapple, cilantro, onion.", 
        featured: false,
        image: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?q=80&w=400&auto=format&fit=crop"
      },
      { 
        name: "Lengua", 
        price: "$5.50", 
        desc: "Beef tongue, slow-cooked Michoacán style. Melt in your mouth.", 
        featured: true,
        image: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?q=80&w=400&auto=format&fit=crop"
      },
      { 
        name: "Asada", 
        price: "$4.75", 
        desc: "Steak, cilantro, onion, salsa.", 
        featured: false,
        image: "https://images.unsplash.com/photo-1611250188496-e966043a0629?q=80&w=400&auto=format&fit=crop"
      },
      { 
        name: "Barbacoa", 
        price: "$5.00", 
        desc: "Slow cooked beef cheek.", 
        featured: false,
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400&auto=format&fit=crop"
      },
    ]
  },
  {
    category: "Burritos & Tortas",
    description: "Heavy hitters for a serious appetite.",
    items: [
      { 
        name: "The Super Torta", 
        price: "$12.40", 
        desc: "Huge, toasted, and packed with Asada, Pastor, and Ham. Avocado, mayo, beans.", 
        featured: true,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&auto=format&fit=crop"
      },
      { 
        name: "El Monstruo Burrito", 
        price: "$11.00", 
        desc: "Choice of meat, beans, cheese, rice, avocado, sour cream.", 
        featured: false,
        image: "https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?q=80&w=400&auto=format&fit=crop"
      },
    ]
  }
];

export const TESTIMONIALS: TestimonialData[] = [
  { name: "Sarah L.", source: "Yelp", text: "I’ve lived in Austin for 20 years. Torchy's is for tourists. El Primo is for us. The Migas taco is absolute perfection." },
  { name: "Michael B.", source: "Google Reviews", text: "I drive from North Austin on Saturdays just for these tacos. The Asada is juicy, not dried out like other trucks." },
  { name: "Local Resident", source: "Reddit", text: "Their tortas are the unsung heroes... They destroy the big chains! No competition." },
];

export const FAQS: FaqItem[] = [
  { q: "Are you still cash only?", a: "No! We now accept credit cards and mobile orders through our online system." },
  { q: "What are your hours?", a: "We are open Mon-Fri 8am–5pm and Saturday 8am–4pm. We rest on Sundays." },
  { q: "Where exactly are you located?", a: "We are permanently parked at 2011 S 1st St, sharing the lot with the coffee shop." },
];