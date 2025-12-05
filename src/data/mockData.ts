export interface Farmer {
  id: string;
  name: string;
  farmName: string;
  location: string;
  distance: number;
  rating: number;
  image: string;
  specialties: string[];
  description: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  farmerId: string;
  farmerName: string;
  farmName: string;
  distance: number;
  image: string;
  organic: boolean;
  inStock: boolean;
  description: string;
}

export const farmers: Farmer[] = [
  {
    id: "1",
    name: "John Mwangi",
    farmName: "Green Valley Farm",
    location: "Kiambu County",
    distance: 2.5,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=400&fit=crop",
    specialties: ["Vegetables", "Fruits"],
    description: "Family-owned farm specializing in organic vegetables for over 20 years."
  },
  {
    id: "2",
    name: "Mary Wanjiku",
    farmName: "Sunrise Organic Farm",
    location: "Nairobi West",
    distance: 4.2,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&h=400&fit=crop",
    specialties: ["Dairy", "Eggs", "Honey"],
    description: "Certified organic farm producing the freshest dairy and eggs."
  },
  {
    id: "3",
    name: "Peter Ochieng",
    farmName: "Heritage Farms",
    location: "Karen",
    distance: 6.8,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=400&h=400&fit=crop",
    specialties: ["Grains", "Legumes"],
    description: "Traditional farming methods passed down through generations."
  },
  {
    id: "4",
    name: "Grace Akinyi",
    farmName: "Fresh Harvest Gardens",
    location: "Westlands",
    distance: 3.1,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1589923188651-268a9765e432?w=400&h=400&fit=crop",
    specialties: ["Herbs", "Leafy Greens"],
    description: "Urban farm growing premium herbs and microgreens."
  }
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Fresh Tomatoes",
    category: "Vegetables",
    price: 150,
    unit: "kg",
    farmerId: "1",
    farmerName: "John Mwangi",
    farmName: "Green Valley Farm",
    distance: 2.5,
    image: "https://images.unsplash.com/photo-1546470427-227c7369a9f0?w=400&h=400&fit=crop",
    organic: true,
    inStock: true,
    description: "Vine-ripened tomatoes, perfect for salads and cooking."
  },
  {
    id: "p2",
    name: "Organic Spinach",
    category: "Vegetables",
    price: 80,
    unit: "bunch",
    farmerId: "4",
    farmerName: "Grace Akinyi",
    farmName: "Fresh Harvest Gardens",
    distance: 3.1,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop",
    organic: true,
    inStock: true,
    description: "Nutrient-rich spinach, harvested fresh daily."
  },
  {
    id: "p3",
    name: "Farm Fresh Eggs",
    category: "Dairy & Eggs",
    price: 450,
    unit: "tray",
    farmerId: "2",
    farmerName: "Mary Wanjiku",
    farmName: "Sunrise Organic Farm",
    distance: 4.2,
    image: "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?w=400&h=400&fit=crop",
    organic: true,
    inStock: true,
    description: "Free-range eggs from happy, healthy hens."
  },
  {
    id: "p4",
    name: "Fresh Milk",
    category: "Dairy & Eggs",
    price: 120,
    unit: "liter",
    farmerId: "2",
    farmerName: "Mary Wanjiku",
    farmName: "Sunrise Organic Farm",
    distance: 4.2,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop",
    organic: true,
    inStock: true,
    description: "Creamy, fresh milk from grass-fed cows."
  },
  {
    id: "p5",
    name: "Sweet Mangoes",
    category: "Fruits",
    price: 200,
    unit: "kg",
    farmerId: "1",
    farmerName: "John Mwangi",
    farmName: "Green Valley Farm",
    distance: 2.5,
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=400&fit=crop",
    organic: false,
    inStock: true,
    description: "Juicy, ripe mangoes picked at peak sweetness."
  },
  {
    id: "p6",
    name: "Organic Honey",
    category: "Natural Products",
    price: 800,
    unit: "500g",
    farmerId: "2",
    farmerName: "Mary Wanjiku",
    farmName: "Sunrise Organic Farm",
    distance: 4.2,
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=400&fit=crop",
    organic: true,
    inStock: true,
    description: "Pure, raw honey from our own beehives."
  },
  {
    id: "p7",
    name: "Brown Rice",
    category: "Grains",
    price: 250,
    unit: "kg",
    farmerId: "3",
    farmerName: "Peter Ochieng",
    farmName: "Heritage Farms",
    distance: 6.8,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop",
    organic: false,
    inStock: true,
    description: "Wholesome brown rice, rich in fiber and nutrients."
  },
  {
    id: "p8",
    name: "Fresh Basil",
    category: "Herbs",
    price: 50,
    unit: "bunch",
    farmerId: "4",
    farmerName: "Grace Akinyi",
    farmName: "Fresh Harvest Gardens",
    distance: 3.1,
    image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=400&h=400&fit=crop",
    organic: true,
    inStock: true,
    description: "Aromatic basil, perfect for Italian dishes."
  }
];

export const categories = [
  { name: "All", icon: "🌾" },
  { name: "Vegetables", icon: "🥬" },
  { name: "Fruits", icon: "🍎" },
  { name: "Dairy & Eggs", icon: "🥛" },
  { name: "Grains", icon: "🌾" },
  { name: "Herbs", icon: "🌿" },
  { name: "Natural Products", icon: "🍯" },
];
