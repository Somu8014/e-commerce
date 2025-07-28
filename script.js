const products = [
  { name: "Smartphone", category: "electronics", price: 599 },
  { name: "Laptop", category: "electronics", price: 999 },
  { name: "T-shirt", category: "clothing", price: 25 },
  { name: "Jeans", category: "clothing", price: 40 },
  { name: "JavaScript Book", category: "books", price: 15 },
  { name: "Headphones", category: "electronics", price: 49 },
  { name: "Novel", category: "books", price: 10 },
  { name: "Sweater", category: "clothing", price: 575 },
{ name: "Crop Top", category: "clothing", price: 70 },
{ name: "Scarf", category: "clothing", price: 780 },
{ name: "Tunic", category: "clothing", price: 530 },
{ name: "Swimsuit", category: "clothing", price: 315 },
{ name: "Hoodie", category: "clothing", price: 406 },
{ name: "Sherwani", category: "clothing", price: 795 },
{ name: "Cardigan", category: "clothing", price: 681 },
{ name: "Athletic Shorts", category: "clothing", price: 129 },
{ name: "Formal Shirt", category: "clothing", price: 449 },
{ name: "Overcoat", category: "clothing", price: 562 },
{ name: "Cargo Pants", category: "clothing", price: 804 },
{ name: "Chinos", category: "clothing", price: 284 },
{ name: "Tank Dress", category: "clothing", price: 295 },
{ name: "Kurta", category: "clothing", price: 304 },
{ name: "Sleepwear", category: "clothing", price: 491 },
{ name: "Skirt", category: "clothing", price: 172 },
{ name: "Blouse", category: "clothing", price: 767 },
{ name: "Tie", category: "clothing", price: 155 },
{ name: "Jumpsuit", category: "clothing", price: 184 },
{ name: "Raincoat", category: "clothing", price: 986 },
{ name: "Tracksuit", category: "clothing", price: 362 },
{ name: "Dupatta", category: "clothing", price: 101 },
{ name: "Socks", category: "clothing", price: 57 },
{ name: "Tank Top", category: "clothing", price: 94 },
{ name: "Thermal Wear", category: "clothing", price: 615 },
{ name: "Blazer", category: "clothing", price: 314 },
{ name: "Bomber Jacket", category: "clothing", price: 614 },
{ name: "Jeans", category: "clothing", price: 605 },
{ name: "Loafers", category: "clothing", price: 340 },
{ name: "Peacoat", category: "clothing", price: 433 },
{ name: "Cap", category: "clothing", price: 310 },
{ name: "Leggings", category: "clothing", price: 753 },
{ name: "Hat", category: "clothing", price: 987 },
{ name: "Jacket", category: "clothing", price: 935 },
{ name: "Shorts", category: "clothing", price: 497 },
{ name: "Polo Shirt", category: "clothing", price: 677 },
{ name: "Boots", category: "clothing", price: 742 },
{ name: "Denim Jacket", category: "clothing", price: 716 },
{ name: "Gloves", category: "clothing", price: 425 },
{ name: "Sandals", category: "clothing", price: 645 },
{ name: "Lehenga", category: "clothing", price: 899 },
{ name: "T-shirt", category: "clothing", price: 279 },
{ name: "Suit", category: "clothing", price: 824 },
{ name: "Casual Shirt", category: "clothing", price: 588 },
{ name: "Belt", category: "clothing", price: 101 },
{ name: "Underwear", category: "clothing", price: 49 },
{ name: "Shawl", category: "clothing", price: 297 },
{ name: "Sneakers", category: "clothing", price: 675 },
{ name: "Dress", category: "clothing", price: 367 },
  { name: "Gaming Console", category: "electronics", price: 514 },
{ name: "Drone", category: "electronics", price: 933 },
{ name: "Earbuds", category: "electronics", price: 601 },
{ name: "Camera", category: "electronics", price: 917 },
{ name: "Microphone", category: "electronics", price: 728 },
{ name: "Tripod", category: "electronics", price: 926 },
{ name: "Charger Cable", category: "electronics", price: 420 },
{ name: "VR Headset", category: "electronics", price: 831 },
{ name: "Laptop", category: "electronics", price: 753 },
{ name: "Smartwatch", category: "electronics", price: 292 },
{ name: "Screen Protector", category: "electronics", price: 249 },
{ name: "Portable Fan", category: "electronics", price: 160 },
{ name: "Smart Plug", category: "electronics", price: 654 },
{ name: "Digital Clock", category: "electronics", price: 288 },
{ name: "Cooling Pad", category: "electronics", price: 234 },
{ name: "Wireless Charger", category: "electronics", price: 384 },
{ name: "Monitor", category: "electronics", price: 885 },
{ name: "Router", category: "electronics", price: 183 },
{ name: "Stylus Pen", category: "electronics", price: 219 },
{ name: "Graphics Card", category: "electronics", price: 946 },
{ name: "Webcam", category: "electronics", price: 332 },
{ name: "LED Strip", category: "electronics", price: 537 },
{ name: "Tablet", category: "electronics", price: 746 },
{ name: "3D Printer", category: "electronics", price: 959 },
{ name: "Processor", category: "electronics", price: 921 },
{ name: "E-Reader", category: "electronics", price: 199 },
{ name: "Power Bank", category: "electronics", price: 377 },
{ name: "Phone Case", category: "electronics", price: 142 },
{ name: "Bluetooth Speaker", category: "electronics", price: 564 },
{ name: "Mouse", category: "electronics", price: 106 },
{ name: "USB Drive", category: "electronics", price: 94 },
{ name: "Keyboard", category: "electronics", price: 338 },
{ name: "Laptop Stand", category: "electronics", price: 449 },
{ name: "Camera Lens", category: "electronics", price: 809 },
{ name: "Selfie Stick", category: "electronics", price: 157 },
{ name: "Hard Disk", category: "electronics", price: 535 },
{ name: "SSD", category: "electronics", price: 682 },
{ name: "Surge Protector", category: "electronics", price: 488 },
{ name: "RAM Module", category: "electronics", price: 311 },
{ name: "Phone", category: "electronics", price: 899 },
{ name: "Smart TV", category: "electronics", price: 970 },
{ name: "Projector", category: "electronics", price: 865 },
{ name: "Dash Cam", category: "electronics", price: 425 },
{ name: "Electric Shaver", category: "electronics", price: 292 },
{ name: "Car Charger", category: "electronics", price: 120 },
{ name: "Home Assistant", category: "electronics", price: 444 },
{ name: "Memory Card", category: "electronics", price: 85 },
{ name: "Phone Holder", category: "electronics", price: 210 },
{ name: "Desktop Lamp", category: "electronics", price: 167 },


  { name: "Jacket", category: "clothing", price: 75 }
];

const productList = document.getElementById("productList");
const filterButtons = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("searchInput");

// Display products
function displayProducts(filteredProducts) {
  productList.innerHTML = "";

  if (filteredProducts.length === 0) {
    productList.innerHTML = "<p>No products found.</p>";
    return;
  }

  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: $${product.price}</p>
    `;
    productList.appendChild(card);
  });
}

// Filter by category
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    const searchTerm = searchInput.value.toLowerCase();

    let filtered = products.filter(p =>
      p.name.toLowerCase().includes(searchTerm)
    );

    if (category !== "all") {
      filtered = filtered.filter(p => p.category === category);
    }

    displayProducts(filtered);
  });
});

// Search by name
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const activeCategory = document.querySelector(".filter-btn.active")?.getAttribute("data-category") || "all";

  let filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm)
  );

  if (activeCategory !== "all") {
    filtered = filtered.filter(p => p.category === activeCategory);
  }

  displayProducts(filtered);
});

// Highlight active filter button
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Initial display
displayProducts(products);
