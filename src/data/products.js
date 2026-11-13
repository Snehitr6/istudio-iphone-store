
const products = [
  // IPHONE 17 PRO MAX
  {
    id: 1,
    name: "iPhone 17 Pro Max",
    category: "iPhone",
    price: 164900,
    oldPrice: 179900,
    tagline: "The ultimate iPhone experience.",
    description:
      "Experience incredible performance, advanced camera technology and a stunning display with iPhone 17 Pro Max.",
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=1000",
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=1000",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1000",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1000",
    ],
    colors: ["Cosmic Orange", "Silver", "Deep Blue"],
    storage: ["256GB", "512GB", "1TB"],
    specs: ["Pro Camera System", "A19 Pro Chip", "Super Retina XDR"],
    rating: 4.9,
    badge: "BEST SELLER",
  },

  // IPHONE 17 PRO
  {
    id: 2,
    name: "iPhone 17 Pro",
    category: "iPhone",
    price: 134900,
    oldPrice: 149900,
    tagline: "Power meets precision.",
    description:
      "A powerful Pro experience with advanced photography, beautiful design and incredible performance.",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1000",
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1000",
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=1000",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1000",
    ],
    colors: ["Silver", "Black", "Blue"],
    storage: ["256GB", "512GB", "1TB"],
    specs: ["Pro Camera System", "A19 Pro Chip", "120Hz Display"],
    rating: 4.8,
    badge: "NEW",
  },

  // IPHONE 17
  {
    id: 3,
    name: "iPhone 17",
    category: "iPhone",
    price: 82900,
    oldPrice: 89900,
    tagline: "A beautiful way to do more.",
    description:
      "Discover an amazing everyday iPhone with a brilliant display and powerful performance.",
    image:
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=1000",
    images: [
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=1000",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1000",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1000",
    ],
    colors: ["Black", "White", "Pink", "Blue"],
    storage: ["128GB", "256GB", "512GB"],
    specs: ["Advanced Camera", "A19 Chip", "Super Retina XDR"],
    rating: 4.7,
    badge: "POPULAR",
  },

  // IPHONE 16 PRO MAX
  {
    id: 4,
    name: "iPhone 16 Pro Max",
    category: "iPhone",
    price: 119900,
    oldPrice: 144900,
    tagline: "Pro performance. Pro photography.",
    description:
      "Capture more detail and enjoy an immersive experience with the iPhone 16 Pro Max.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1000",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1000",
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=1000",
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=1000",
    ],
    colors: ["Natural Titanium", "Black Titanium", "White Titanium"],
    storage: ["256GB", "512GB", "1TB"],
    specs: ["A18 Pro Chip", "48MP Camera", "Titanium Design"],
    rating: 4.8,
    badge: "SALE",
  },

  // AIRPODS PRO
  {
    id: 5,
    name: "AirPods Pro",
    category: "Accessories",
    price: 24900,
    oldPrice: 26900,
    tagline: "Sound that surrounds you.",
    description:
      "Enjoy immersive audio, active noise cancellation and a comfortable wireless listening experience.",
    image:
      "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=1000",
    images: [
      "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=1000",
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1000",
    ],
    colors: ["White"],
    storage: ["Standard"],
    specs: ["Active Noise Cancellation", "Spatial Audio", "Wireless"],
    rating: 4.8,
    badge: "POPULAR",
  },

  // APPLE WATCH
  {
    id: 6,
    name: "Apple Watch",
    category: "Accessories",
    price: 44900,
    oldPrice: 49900,
    tagline: "A healthier you, every day.",
    description:
      "Stay connected, track your fitness and manage your day with Apple Watch.",
    image:
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=1000",
    images: [
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=1000",
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=1000",
    ],
    colors: ["Black", "Silver", "Gold"],
    storage: ["Standard"],
    specs: ["Fitness Tracking", "Heart Rate", "Smart Notifications"],
    rating: 4.7,
    badge: "NEW",
  },

  // MAGSAFE CHARGER
  {
    id: 7,
    name: "MagSafe Charger",
    category: "Accessories",
    price: 4500,
    oldPrice: 4990,
    tagline: "Effortless wireless charging.",
    description:
      "Enjoy convenient wireless charging with a magnetic connection.",
    image:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=1000",
    images: [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=1000",
    ],
    colors: ["White"],
    storage: ["Standard"],
    specs: ["Wireless Charging", "Magnetic Connection", "Compact Design"],
    rating: 4.6,
    badge: "ACCESSORY",
  },

  // IPHONE 16
  {
    id: 8,
    name: "iPhone 16",
    category: "iPhone",
    price: 69900,
    oldPrice: 79900,
    tagline: "Ready for anything.",
    description:
      "A great everyday smartphone with powerful performance and a stunning camera.",
    image:
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=1000",
    images: [
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=1000",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1000",
    ],
    colors: ["Black", "White", "Pink"],
    storage: ["128GB", "256GB", "512GB"],
    specs: ["A18 Chip", "48MP Camera", "Dynamic Island"],
    rating: 4.7,
    badge: "VALUE PICK",
  },

  // NEW: IPHONE 18 PRO
  {
    id: 9,
    name: "iPhone 18 Pro",
    category: "iPhone",
    price: 134900,
    oldPrice: 149900,
    tagline: "The next generation of Pro.",
    description:
      "Experience the A20 Pro chip, advanced 48MP variable aperture camera and next-generation performance.",
    image:
      "https://www.apple.com/newsroom/images/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/article/Apple-iPhone-18-Pro-2up-260909_inline.jpg.large.jpg",
    images: [
      "https://www.apple.com/newsroom/images/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/article/Apple-iPhone-18-Pro-2up-260909_inline.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/article/Apple-iPhone-18-Pro-color-lineup-260909_big.jpg.large.jpg",
    ],
    colors: ["Burgundy", "Glacier", "Silver", "Black"],
    storage: ["256GB", "512GB", "1TB", "2TB"],
    specs: [
      "A20 Pro Chip",
      "48MP Variable Aperture Camera",
      "ProMotion Display",
      "iOS 27",
    ],
    rating: 5.0,
    badge: "JUST LAUNCHED",
  },

  // NEW: IPHONE 18 PRO MAX
  {
    id: 10,
    name: "iPhone 18 Pro Max",
    category: "iPhone",
    price: 154900,
    oldPrice: 169900,
    tagline: "Big screen. Bigger possibilities.",
    description:
      "Discover Apple's flagship experience with A20 Pro performance, advanced photography and exceptional battery life.",
    image:
      "https://www.apple.com/newsroom/images/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/article/Apple-iPhone-18-Pro-color-lineup-260909_big.jpg.large.jpg",
    images: [
      "https://www.apple.com/newsroom/images/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/article/Apple-iPhone-18-Pro-color-lineup-260909_big.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/article/Apple-iPhone-18-Pro-2up-260909_inline.jpg.large.jpg",
    ],
    colors: ["Burgundy", "Glacier", "Silver", "Black"],
    storage: ["256GB", "512GB", "1TB", "2TB"],
    specs: [
      "A20 Pro Chip",
      "Advanced Pro Camera",
      "Up to 45 Hours Video Playback",
      "iOS 27",
    ],
    rating: 5.0,
    badge: "NEW ARRIVAL",
  },

  // NEW: IPHONE DUO FOLDABLE
  {
    id: 11,
    name: "iPhone Duo",
    category: "iPhone",
    price: 299900,
    oldPrice: 319900,
    tagline: "A new dimension of iPhone.",
    description:
      "Discover the first foldable iPhone with a 7.6-inch inner display, 5.4-inch outer display and powerful A20 Pro chip.",
    image:
      "https://www.apple.com/newsroom/images/2026/09/apple-unveils-iphone-duo/article/Apple-iPhone-Duo-colors-260909_big.jpg.large.jpg",
    images: [
      "https://www.apple.com/newsroom/images/2026/09/apple-unveils-iphone-duo/article/Apple-iPhone-Duo-colors-260909_big.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/2026/09/apple-unveils-iphone-duo/article/Apple-iPhone-Duo-Case-sand-260909_big.jpg.large.jpg",
    ],
    colors: ["Star White", "Night Sky"],
    storage: ["256GB", "512GB", "1TB", "2TB"],
    specs: [
      "7.6-inch Foldable Display",
      "5.4-inch Outer Display",
      "A20 Pro Chip",
      "48MP Dual Fusion Camera",
    ],
    rating: 5.0,
    badge: "EXCLUSIVE",
  },

  // NEW: IPHONE DUO CASE
  {
    id: 12,
    name: "iPhone Duo Case",
    category: "Accessories",
    price: 8900,
    oldPrice: 9900,
    tagline: "Protection meets elegance.",
    description:
      "A slim two-part protective case designed specifically for iPhone Duo.",
    image:
      "https://www.apple.com/newsroom/images/2026/09/apple-unveils-iphone-duo/article/Apple-iPhone-Duo-Case-sand-260909_big.jpg.large.jpg",
    images: [
      "https://www.apple.com/newsroom/images/2026/09/apple-unveils-iphone-duo/article/Apple-iPhone-Duo-Case-sand-260909_big.jpg.large.jpg",
    ],
    colors: ["Sand", "Navy Blue"],
    storage: ["Standard"],
    specs: ["Two-Part Protection", "MagSafe Compatible", "Slim Design"],
    rating: 4.9,
    badge: "NEW",
  },

  // NEW: IPHONE DUO FOLIO
  {
    id: 13,
    name: "iPhone Duo Folio",
    category: "Accessories",
    price: 14900,
    oldPrice: 15900,
    tagline: "Your phone. Your perfect angle.",
    description:
      "Premium folio accessory with an integrated kickstand for comfortable viewing and hands-free use.",
    image:
      "https://www.apple.com/newsroom/images/2026/09/apple-unveils-iphone-duo/article/Apple-iPhone-Duo-Folio-taupe-260909_big.jpg.large.jpg",
    images: [
      "https://www.apple.com/newsroom/images/2026/09/apple-unveils-iphone-duo/article/Apple-iPhone-Duo-Folio-taupe-260909_big.jpg.large.jpg",
    ],
    colors: ["Taupe", "Navy Blue"],
    storage: ["Standard"],
    specs: ["Integrated Kickstand", "Premium Finish", "Foldable Design"],
    rating: 4.9,
    badge: "NEW",
  },

];

export default products;
