export type Category =
  | "All"
  | "Restaurant"
  | "Bakery"
  | "Cakes"
  | "Sweets"
  | "Beverages"
  | "Kashmiri";

export interface Product {
  id: number;
  name: string;
  price: number;
  displayPrice: string;
  category: Exclude<Category, "All">;
  desc: string;
  longDesc: string;
  badge: string;
  emoji: string;
}

export const categories: Category[] = [
  "All",
  "Restaurant",
  "Bakery",
  "Cakes",
  "Sweets",
  "Beverages",
  "Kashmiri",
];

export const products: Product[] = [
  {
    id: 1,
    name: "Tandoori Chicken",
    price: 450,
    displayPrice: "From ₹450",
    category: "Restaurant",
    desc: "Smoky, tender chicken marinated with deep spices.",
    longDesc:
      "A frequently praised Just Bukhara favorite, known for smoky flavor, tenderness, and generous spice. Final portion and price can be confirmed on WhatsApp.",
    badge: "Customer Pick",
    emoji: "🍗",
  },
  {
    id: 2,
    name: "Butter Chicken",
    price: 500,
    displayPrice: "From ₹500",
    category: "Restaurant",
    desc: "Rich North Indian gravy with soft chicken pieces.",
    longDesc:
      "A creamy, comforting restaurant classic mentioned in public food listings and review summaries for Just Bukhara.",
    badge: "Popular",
    emoji: "🥘",
  },
  {
    id: 3,
    name: "Chicken Biryani",
    price: 350,
    displayPrice: "From ₹350",
    category: "Restaurant",
    desc: "Aromatic rice and chicken with warm spices.",
    longDesc:
      "A hearty meal option from the restaurant side of Just Bukhara, suitable for takeaway, dine-in, or delivery requests.",
    badge: "Meal",
    emoji: "🍛",
  },
  {
    id: 4,
    name: "Butter Chicken Pizza",
    price: 400,
    displayPrice: "From ₹400",
    category: "Restaurant",
    desc: "A fusion pizza built around butter chicken flavor.",
    longDesc:
      "One of the more distinctive items repeatedly associated with Just Bukhara in public menu and review references.",
    badge: "Fusion",
    emoji: "🍕",
  },
  {
    id: 5,
    name: "Wazwan Order",
    price: 1000,
    displayPrice: "From ₹1000",
    category: "Kashmiri",
    desc: "Traditional Kashmiri feast, prepared by order.",
    longDesc:
      "For family functions and special gatherings. Add this to cart with your required quantity and confirm details directly on WhatsApp.",
    badge: "By Order",
    emoji: "🍲",
  },
  {
    id: 6,
    name: "Custom Celebration Cake",
    price: 800,
    displayPrice: "From ₹800",
    category: "Cakes",
    desc: "Fresh cake for birthdays, family functions, and events.",
    longDesc:
      "Customer feedback specifically praises Just Bukhara cakes for freshness and quality. Share flavor, weight, message, and timing during checkout.",
    badge: "Made to Order",
    emoji: "🎂",
  },
  {
    id: 7,
    name: "Fresh Biscuits",
    price: 180,
    displayPrice: "From ₹180",
    category: "Bakery",
    desc: "Daily bakery biscuits for tea-time and gifting.",
    longDesc:
      "Bakery manufacturing is a major part of Just Bukhara's business registration, including biscuits, cakes, pastries, and rusks.",
    badge: "Fresh",
    emoji: "🥖",
  },
  {
    id: 8,
    name: "Pastries",
    price: 120,
    displayPrice: "From ₹120",
    category: "Bakery",
    desc: "Soft, sweet pastries from the bakery counter.",
    longDesc:
      "A bakery counter item suitable for quick orders, small celebrations, or pairing with coffee.",
    badge: "Bakery",
    emoji: "🍰",
  },
  {
    id: 9,
    name: "Rusks",
    price: 150,
    displayPrice: "From ₹150",
    category: "Bakery",
    desc: "Crunchy rusks baked for tea and snack boxes.",
    longDesc:
      "Rusks are part of the bakery-product activity listed for Just Bukhara and work well for bulk or family packs.",
    badge: "Tea-Time",
    emoji: "🍪",
  },
  {
    id: 10,
    name: "Kashmiri Basrakh",
    price: 250,
    displayPrice: "From ₹250",
    category: "Kashmiri",
    desc: "Buttery, crunchy Kashmiri sweet.",
    longDesc:
      "Basrakh is specifically mentioned in customer feedback as buttery, crunchy, and melt-in-mouth.",
    badge: "Local Favorite",
    emoji: "🥮",
  },
  {
    id: 11,
    name: "Sweets Box",
    price: 300,
    displayPrice: "From ₹300",
    category: "Sweets",
    desc: "Assorted sweets and confectionery for home or gifting.",
    longDesc:
      "Just Bukhara is repeatedly described as a restaurant, bakery, sweets, and confectionery outlet.",
    badge: "Gift Box",
    emoji: "🍬",
  },
  {
    id: 12,
    name: "Coffee",
    price: 100,
    displayPrice: "From ₹100",
    category: "Beverages",
    desc: "Warm coffee to pair with bakery items.",
    longDesc:
      "Coffee appears in customer comments alongside cakes, sweets, fast food, and bakery products.",
    badge: "Cafe",
    emoji: "☕",
  },
];

export function getProductById(id: string | number): Product | undefined {
  return products.find((product) => product.id === Number(id));
}
