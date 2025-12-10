// PRODUCT ARRAY
const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 25.99,
    discount: 5,
    rating: 4.3,
    inStock: true,
    tags: ["computer", "mouse", "wireless"],
    variants: [
      { color: "Black", quantity: 25 },
      { color: "White", quantity: 10 }
    ]
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 89.99,
    discount: 10,
    rating: 4.7,
    inStock: false,
    tags: ["keyboard", "mechanical", "rgb"],
    variants: [
      { color: "Black", quantity: 0 },
      { color: "Gray", quantity: 5 }
    ]
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "Fashion",
    price: 59.5,
    discount: 15,
    rating: 4.1,
    inStock: true,
    tags: ["shoes", "sports", "running"],
    variants: [
      { color: "Blue", quantity: 15 },
      { color: "Red", quantity: 7 }
    ]
  },
  {
    id: 4,
    name: "Cotton Hoodie",
    category: "Fashion",
    price: 35.0,
    discount: 0,
    rating: 4.0,
    inStock: false,
    tags: ["hoodie", "cotton", "winter"],
    variants: [
      { color: "Black", quantity: 0 },
      { color: "Green", quantity: 2 }
    ]
  },
  {
    id: 5,
    name: "Smart Watch",
    category: "Electronics",
    price: 149.99,
    discount: 20,
    rating: 4.8,
    inStock: true,
    tags: ["watch", "smart", "fitness"],
    variants: [
      { color: "Black", quantity: 30 },
      { color: "Pink", quantity: 12 }
    ]
  }
];
// 1. SEARCH BY PRODUCT NAME
function searchByName(name) {
  return products.filter(p =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );
}

console.log("Search 'mouse':", searchByName("mouse"));
// 2. CHECK IF ANY PRODUCT OUT OF STOCK
const anyOutOfStock = products.some(p => !p.inStock);
console.log("Any out of stock:", anyOutOfStock);
// 3. CHECK IF ALL ELECTRONICS > $20
const allElectronicsAbove20 = products
  .filter(p => p.category === "Electronics")
  .every(p => p.price > 20);

console.log("All electronics above $20:", allElectronicsAbove20);
// 4. SORT BY PRICE (ASC)
const sortByPrice = [...products].sort((a, b) => a.price - b.price);
console.log("Sorted by price:", sortByPrice);
// 5. SORT BY RATING (DESC)
const sortByRating = [...products].sort((a, b) => b.rating - a.rating);
console.log("Sorted by rating:", sortByRating);
// 6. TOTAL STOCK (ALL VARIANTS)
const totalStock = products.reduce((total, p) => {
  const variantStock = p.variants.reduce((sum, v) => sum + v.quantity, 0);
  return total + variantStock;
}, 0);

console.log("Total stock:", totalStock);
// 7. INSERT A PRODUCT
products.push({
  id: 6,
  name: "Gaming Chair",
  category: "Furniture",
  price: 199,
  discount: 10,
  rating: 4.6,
  inStock: true,
  tags: ["gaming", "chair"],
  variants: [{ color: "Black", quantity: 8 }]
});

console.log("After adding product:", products);
// 8. REMOVE PRODUCT BY ID
const removeById = (id) => {
  return products.filter(p => p.id !== id);
};

console.log("After removing product ID 3:", removeById(3));
// 9. FILTER BY ELECTRONICS
const electronicsOnly = products.filter(p => p.category === "Electronics");
console.log("Electronics only:", electronicsOnly);
