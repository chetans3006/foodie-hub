const reslist = [
  {
    id: "101",
    name: "La Pino'z Pizza",
    promoted: true,
    deliveryTime: "30 mins",
    rating: "4.3",
    cuisines: ["Pizza", "Italian", "Fast Food"],
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
    menu: [
      {
        category: "Pizzas",
        items: [
          { id: 1, name: "Margherita Pizza", price: 199 },
          { id: 2, name: "Farmhouse Pizza", price: 299 },
          { id: 3, name: "Pepperoni Pizza", price: 279 },
          { id: 4, name: "Veggie Supreme", price: 249 },
          { id: 5, name: "Chicken Tikka Pizza", price: 329 },
          { id: 6, name: "Paneer Makhani Pizza", price: 299 },
          { id: 7, name: "BBQ Chicken Pizza", price: 349 },
          { id: 8, name: "Extra Cheese Pizza", price: 259 },
        ],
      },
      {
        category: "Garlic Bread",
        items: [
          { id: 9, name: "Cheese Garlic Bread", price: 149 },
          { id: 10, name: "Garlic Bread Sticks", price: 129 },
          { id: 11, name: "Peri Peri Garlic Bread", price: 169 },
          { id: 12, name: "Mozzarella Garlic Bread", price: 189 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 13, name: "Coca Cola", price: 60 },
          { id: 14, name: "Fanta Orange", price: 60 },
          { id: 15, name: "Iced Tea", price: 50 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 16, name: "Choco Lava Cake", price: 149 },
          { id: 17, name: "Brownie", price: 99 },
        ],
      },
    ],
  },
  {
    id: "102",
    name: "Biryani By Kilo",
    promoted: false,
    deliveryTime: "35 mins",
    rating: "4.5",
    cuisines: ["Biryani", "North Indian", "Mughlai"],
    image:
      "https://plus.unsplash.com/premium_photo-1694141252026-3df1de888a21?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJpcnlhbml8ZW58MHx8MHx8fDA%3D",
    menu: [
      {
        category: "Biryani",
        items: [
          { id: 1, name: "Chicken Dum Biryani", price: 349 },
          { id: 2, name: "Hyderabadi Biryani", price: 399 },
          { id: 3, name: "Mutton Biryani", price: 449 },
          { id: 4, name: "Prawns Biryani", price: 499 },
          { id: 5, name: "Veg Dum Biryani", price: 299 },
          { id: 6, name: "Paneer Biryani", price: 329 },
          { id: 7, name: "Fish Biryani", price: 429 },
          { id: 8, name: "Mixed Biryani", price: 459 },
        ],
      },
      {
        category: "Kebabs",
        items: [
          { id: 9, name: "Chicken Seekh Kebab", price: 249 },
          { id: 10, name: "Paneer Tikka", price: 229 },
          { id: 11, name: "Tandoori Chicken", price: 299 },
          { id: 12, name: "Shami Kebab", price: 199 },
        ],
      },
      {
        category: "Gravy",
        items: [
          { id: 13, name: "Butter Chicken", price: 299 },
          { id: 14, name: "Paneer Butter Masala", price: 279 },
          { id: 15, name: "Dal Makhani", price: 199 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 16, name: "Sweet Lassi", price: 99 },
          { id: 17, name: "Mango Lassi", price: 109 },
          { id: 18, name: "Chaach", price: 79 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 19, name: "Kheer", price: 89 },
          { id: 20, name: "Gulab Jamun", price: 99 },
        ],
      },
    ],
  },
  {
    id: "103",
    name: "KFC",
    promoted: true,
    deliveryTime: "25 mins",
    rating: "4.1",
    cuisines: ["Chicken", "Burgers", "Fast Food"],
    image:
      "https://images.unsplash.com/photo-1615380547279-f983fb6241d5?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGtmY3xlbnwwfHwwfHx8MA%3D%3D",
    menu: [
      {
        category: "Chicken Buckets",
        items: [
          { id: 1, name: "Hot & Crispy Bucket", price: 599 },
          { id: 2, name: "Chicken Popcorn", price: 199 },
          { id: 3, name: "Zinger Bucket", price: 649 },
          { id: 4, name: "Classic Bucket", price: 549 },
          { id: 5, name: "Family Bucket", price: 799 },
          { id: 6, name: "Crispy Chicken Pieces", price: 299 },
          { id: 7, name: "Spicy Chicken Bucket", price: 629 },
          { id: 8, name: "Mixed Bucket", price: 699 },
        ],
      },
      {
        category: "Burgers",
        items: [
          { id: 9, name: "Zinger Burger", price: 249 },
          { id: 10, name: "Mighty Zinger", price: 279 },
          { id: 11, name: "Original Recipe Burger", price: 229 },
          { id: 12, name: "Double Zinger", price: 349 },
        ],
      },
      {
        category: "Snacks",
        items: [
          { id: 13, name: "Veg Snack Box", price: 149 },
          { id: 14, name: "Wicked Combo", price: 429 },
          { id: 15, name: "Strips Combo", price: 399 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 16, name: "Coke", price: 60 },
          { id: 17, name: "Sprite", price: 60 },
          { id: 18, name: "Fanta", price: 60 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 19, name: "Churros", price: 99 },
          { id: 20, name: "Apple Pie", price: 79 },
        ],
      },
    ],
  },
  {
    id: "104",
    name: "Burger King",
    promoted: false,
    deliveryTime: "20 mins",
    rating: "4.2",
    cuisines: ["Burgers", "American", "Snacks"],
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500",
    menu: [
      {
        category: "Burgers",
        items: [
          { id: 1, name: "Whopper", price: 249 },
          { id: 2, name: "Grilled Chicken Burger", price: 229 },
          { id: 3, name: "Double Whopper", price: 349 },
          { id: 4, name: "Vegetarian Whopper", price: 199 },
          { id: 5, name: "Spicy Whopper", price: 269 },
          { id: 6, name: "Cheese Whopper", price: 279 },
          { id: 7, name: "Triple Whopper", price: 429 },
          { id: 8, name: "Whopper Combo", price: 399 },
        ],
      },
      {
        category: "Snacks",
        items: [
          { id: 9, name: "French Fries", price: 79 },
          { id: 10, name: "Chicken Nuggets", price: 149 },
          { id: 11, name: "Onion Rings", price: 99 },
          { id: 12, name: "Mozzarella Sticks", price: 129 },
        ],
      },
      {
        category: "Sandwiches",
        items: [
          { id: 13, name: "Chicken Sandwich", price: 169 },
          { id: 14, name: "Fish Sandwich", price: 189 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 15, name: "Coca Cola", price: 70 },
          { id: 16, name: "Sprite", price: 70 },
          { id: 17, name: "Iced Tea", price: 60 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 18, name: "Sundae", price: 99 },
          { id: 19, name: "Apple Pie", price: 89 },
        ],
      },
    ],
  },
  {
    id: "105",
    name: "Subway",
    promoted: false,
    deliveryTime: "28 mins",
    rating: "4.0",
    cuisines: ["Healthy Food", "Sandwiches", "Salads"],
    image: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=500",
    menu: [
      {
        category: "6 Inch Subs",
        items: [
          { id: 1, name: "Italian BMT", price: 199 },
          { id: 2, name: "Steak & Cheese", price: 189 },
          { id: 3, name: "Chicken Teriyaki", price: 179 },
          { id: 4, name: "Veggie Delight", price: 149 },
          { id: 5, name: "Turkey Breast", price: 169 },
          { id: 6, name: "Tuna", price: 179 },
          { id: 7, name: "Meatball Marinara", price: 189 },
          { id: 8, name: "Cold Cut Combo", price: 159 },
        ],
      },
      {
        category: "Footlong Subs",
        items: [
          { id: 9, name: "Italian BMT Footlong", price: 329 },
          { id: 10, name: "Steak & Cheese Footlong", price: 319 },
          { id: 11, name: "Veggie Delight Footlong", price: 259 },
        ],
      },
      {
        category: "Salads",
        items: [
          { id: 12, name: "Garden Salad", price: 169 },
          { id: 13, name: "Protein Salad", price: 199 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 14, name: "Coca Cola", price: 60 },
          { id: 15, name: "Bottled Water", price: 30 },
          { id: 16, name: "Iced Tea", price: 50 },
        ],
      },
      {
        category: "Snacks",
        items: [
          { id: 17, name: "Cookies", price: 50 },
          { id: 18, name: "Chips", price: 40 },
        ],
      },
    ],
  },
  {
    id: "106",
    name: "Taco Bell",
    promoted: false,
    deliveryTime: "22 mins",
    rating: "4.4",
    cuisines: ["Mexican", "Fast Food", "Snacks"],
    image: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=500",
    menu: [
      {
        category: "Tacos",
        items: [
          { id: 1, name: "Crunchy Taco", price: 99 },
          { id: 2, name: "Soft Taco", price: 109 },
          { id: 3, name: "Doritos Locos Taco", price: 139 },
          { id: 4, name: "Cheesy Bean and Rice Taco", price: 89 },
          { id: 5, name: "Grilled Chicken Taco", price: 119 },
          { id: 6, name: "Steak Taco", price: 129 },
          { id: 7, name: "Veggie Taco", price: 99 },
          { id: 8, name: "Beefy 5-Layer Burrito", price: 119 },
        ],
      },
      {
        category: "Burritos",
        items: [
          { id: 9, name: "Burrito Supreme", price: 219 },
          { id: 10, name: "XXL Grilled Stuft Burrito", price: 249 },
          { id: 11, name: "Beefy Burrito", price: 149 },
          { id: 12, name: "Cheesy Bean and Rice Burrito", price: 129 },
        ],
      },
      {
        category: "Quesadillas",
        items: [
          { id: 13, name: "Cheesy Bean and Rice Quesadilla", price: 139 },
          { id: 14, name: "Chicken Quesadilla", price: 179 },
          { id: 15, name: "Steak Quesadilla", price: 189 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 16, name: "Pepsi", price: 60 },
          { id: 17, name: "Aquafina Water", price: 40 },
          { id: 18, name: "Iced Tea", price: 50 },
        ],
      },
      {
        category: "Snacks",
        items: [
          { id: 19, name: "Nachos", price: 99 },
          { id: 20, name: "Churro", price: 79 },
        ],
      },
    ],
  },
  {
    id: "107",
    name: "Domino's Pizza",
    promoted: false,
    deliveryTime: "27 mins",
    rating: "4.1",
    cuisines: ["Pizza", "Italian", "Pastas"],
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
    menu: [
      {
        category: "Pizzas",
        items: [
          { id: 1, name: "Margherita Pizza", price: 219 },
          { id: 2, name: "Double Cheese Margherita", price: 269 },
          { id: 3, name: "Farmhouse Pizza", price: 319 },
          { id: 4, name: "MeatZZa Pizza", price: 369 },
          { id: 5, name: "Chicken Fiesta Pizza", price: 349 },
          { id: 6, name: "Peppy Paneer Pizza", price: 299 },
          { id: 7, name: "Indi Tandoori Paneer Pizza", price: 319 },
          { id: 8, name: "Honolulu Pizza", price: 329 },
        ],
      },
      {
        category: "Garlic Bread",
        items: [
          { id: 9, name: "Cheese Garlic Bread", price: 159 },
          { id: 10, name: "Garlic Breadsticks", price: 139 },
          { id: 11, name: "Peri Peri Garlic Bread", price: 179 },
        ],
      },
      {
        category: "Sides",
        items: [
          { id: 12, name: "Garlic Parmesan Bread", price: 149 },
          { id: 13, name: "Loaded Nachos", price: 219 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 14, name: "Coca Cola", price: 70 },
          { id: 15, name: "Sprite", price: 70 },
          { id: 16, name: "Fanta", price: 70 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 17, name: "Choco Lava Cake", price: 129 },
          { id: 18, name: "Icy Gummies", price: 99 },
        ],
      },
    ],
  },
  {
    id: "108",
    name: "Bikanervala",
    promoted: false,
    deliveryTime: "30 mins",
    rating: "4.3",
    cuisines: ["North Indian", "Mithai", "Snacks"],
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500",
    menu: [
      {
        category: "Sweets",
        items: [
          { id: 1, name: "Gulab Jamun", price: 99 },
          { id: 2, name: "Kaju Katli", price: 249 },
          { id: 3, name: "Rasgulla", price: 119 },
          { id: 4, name: "Laddu", price: 89 },
          { id: 5, name: "Jalebi", price: 79 },
          { id: 6, name: "Barfi", price: 129 },
          { id: 7, name: "Motichoor Laddu", price: 99 },
          { id: 8, name: "Paneer Fudge", price: 149 },
        ],
      },
      {
        category: "Savory Snacks",
        items: [
          { id: 9, name: "Samosa", price: 39 },
          { id: 10, name: "Kachori", price: 49 },
          { id: 11, name: "Namak Pare", price: 79 },
          { id: 12, name: "Mathri", price: 89 },
        ],
      },
      {
        category: "Breads",
        items: [
          { id: 13, name: "Puri", price: 49 },
          { id: 14, name: "Bhatura", price: 99 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 15, name: "Lassi", price: 99 },
          { id: 16, name: "Masala Chai", price: 49 },
          { id: 17, name: "Cold Coffee", price: 89 },
        ],
      },
      {
        category: "Recommended",
        items: [
          { id: 18, name: "Thali Combo", price: 299 },
          { id: 19, name: "Sweet Mix Box", price: 399 },
        ],
      },
    ],
  },
  {
    id: "109",
    name: "Bansi Vaishno Dhaba",
    promoted: false,
    deliveryTime: "18 mins",
    rating: "4.6",
    cuisines: ["Punjabi", "North Indian"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500",
    menu: [
      {
        category: "Curries",
        items: [
          { id: 1, name: "Butter Chicken", price: 299 },
          { id: 2, name: "Paneer Butter Masala", price: 279 },
          { id: 3, name: "Chole Bhature", price: 199 },
          { id: 4, name: "Dal Makhani", price: 199 },
          { id: 5, name: "Rajma Chawal", price: 169 },
          { id: 6, name: "Chana Masala", price: 159 },
          { id: 7, name: "Aloo Gobi", price: 149 },
          { id: 8, name: "Sarson da Saag with Makki di Roti", price: 249 },
        ],
      },
      {
        category: "Breads",
        items: [
          { id: 9, name: "Naan", price: 49 },
          { id: 10, name: "Roti", price: 29 },
          { id: 11, name: "Paratha", price: 59 },
          { id: 12, name: "Bhatura", price: 99 },
        ],
      },
      {
        category: "Rice Dishes",
        items: [
          { id: 13, name: "Basmati Rice", price: 79 },
          { id: 14, name: "Jeera Rice", price: 89 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 15, name: "Lassi", price: 79 },
          { id: 16, name: "Masala Chai", price: 39 },
          { id: 17, name: "Sweet Chai", price: 49 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 18, name: "Gulab Jamun", price: 99 },
          { id: 19, name: "Kheer", price: 119 },
        ],
      },
    ],
  },
  {
    id: "110",
    name: "McDonald's",
    promoted: false,
    deliveryTime: "26 mins",
    rating: "4.2",
    cuisines: ["Burgers", "Fast Food"],
    image:
      "https://images.unsplash.com/photo-1642413960687-41345eb83cb6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1jZG9uYWxkc3xlbnwwfHwwfHx8MA%3D%3D",
    menu: [
      {
        category: "Burgers",
        items: [
          { id: 1, name: "Big Mac", price: 219 },
          { id: 2, name: "Quarter Pounder", price: 239 },
          { id: 3, name: "McChicken Burger", price: 179 },
          { id: 4, name: "Double Cheese Burger", price: 199 },
          { id: 5, name: "Crispy or Grilled Chicken Burger", price: 189 },
          { id: 6, name: "Veg Burger", price: 129 },
          { id: 7, name: "McSpicy Paneer Burger", price: 199 },
          { id: 8, name: "McSpicy Chicken Burger", price: 219 },
        ],
      },
      {
        category: "Chicken",
        items: [
          { id: 9, name: "Chicken McNuggets", price: 169 },
          { id: 10, name: "Crispy Strips", price: 189 },
        ],
      },
      {
        category: "Snacks",
        items: [
          { id: 11, name: "French Fries", price: 99 },
          { id: 12, name: "Corn Cup", price: 99 },
          { id: 13, name: "Apple Slices", price: 59 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 14, name: "Coca Cola", price: 60 },
          { id: 15, name: "Sprite", price: 60 },
          { id: 16, name: "Fanta Orange", price: 60 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 17, name: "Apple Pie", price: 59 },
          { id: 18, name: "Brownie", price: 99 },
        ],
      },
    ],
  },
  {
    id: "111",
    name: "Wow! Momo",
    promoted: true,
    deliveryTime: "20 mins",
    rating: "4.4",
    cuisines: ["Momos", "Tibetan", "Asian"],
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9tb3N8ZW58MHx8MHx8fDA%3D",
    menu: [
      {
        category: "Momos",
        items: [
          { id: 1, name: "Chicken Momo", price: 139 },
          { id: 2, name: "Veg Momo", price: 119 },
          { id: 3, name: "Paneer Momo", price: 129 },
          { id: 4, name: "Schezwan Chicken Momo", price: 149 },
          { id: 5, name: "Tandoori Chicken Momo", price: 159 },
          { id: 6, name: "Chilli Garlic Momo", price: 139 },
          { id: 7, name: "Pork Momo", price: 159 },
          { id: 8, name: "Mixed Momo", price: 149 },
        ],
      },
      {
        category: "Fried Momos",
        items: [
          { id: 9, name: "Fried Chicken Momo", price: 159 },
          { id: 10, name: "Fried Veg Momo", price: 139 },
          { id: 11, name: "Fried Paneer Momo", price: 149 },
        ],
      },
      {
        category: "Noodles",
        items: [
          { id: 12, name: "Chicken Noodles", price: 179 },
          { id: 13, name: "Veg Noodles", price: 159 },
          { id: 14, name: "Shrimp Noodles", price: 199 },
        ],
      },
      {
        category: "Rice Bowls",
        items: [
          { id: 15, name: "Chicken Fried Rice", price: 179 },
          { id: 16, name: "Veg Fried Rice", price: 159 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 17, name: "Coca Cola", price: 60 },
          { id: 18, name: "Sprite", price: 60 },
          { id: 19, name: "Iced Tea", price: 50 },
        ],
      },
    ],
  },
  {
    id: "112",
    name: "Pizza Hut",
    promoted: false,
    deliveryTime: "32 mins",
    rating: "4.0",
    cuisines: ["Pizza", "Italian"],
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
    menu: [
      {
        category: "Pizzas",
        items: [
          { id: 1, name: "Cheese Pizza", price: 199 },
          { id: 2, name: "Pepperoni Pizza", price: 249 },
          { id: 3, name: "Veggie Pizza", price: 239 },
          { id: 4, name: "Meat Lovers Pizza", price: 349 },
          { id: 5, name: "Paneer Makhani Pizza", price: 279 },
          { id: 6, name: "Chicken Tikka Pizza", price: 299 },
          { id: 7, name: "Black Forest Pizza", price: 359 },
          { id: 8, name: "Ultimate Pepperoni", price: 329 },
        ],
      },
      {
        category: "Sides",
        items: [
          { id: 9, name: "Garlic Breadsticks", price: 149 },
          { id: 10, name: "Chicken Wings", price: 179 },
          { id: 11, name: "Dips", price: 59 },
        ],
      },
      {
        category: "Pastas",
        items: [
          { id: 12, name: "Chicken Alfredo", price: 249 },
          { id: 13, name: "Meat Pasta", price: 269 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 14, name: "Coca Cola", price: 70 },
          { id: 15, name: "Sprite", price: 70 },
          { id: 16, name: "Fanta", price: 70 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 17, name: "Choco Brownie", price: 129 },
          { id: 18, name: "Ice Cream", price: 99 },
        ],
      },
    ],
  },
  {
    id: "113",
    name: "Haldiram's",
    promoted: false,
    deliveryTime: "26 mins",
    rating: "4.4",
    cuisines: ["North Indian", "Sweets"],
    image:
      "https://images.unsplash.com/photo-1599307767316-776533bb941c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGlra2l8ZW58MHx8MHx8fDA%3D",
    menu: [
      {
        category: "Sweets",
        items: [
          { id: 1, name: "Kaju Katli", price: 299 },
          { id: 2, name: "Gulab Jamun", price: 99 },
          { id: 3, name: "Rasgulla", price: 119 },
          { id: 4, name: "Motichoor Laddu", price: 109 },
          { id: 5, name: "Besan Laddu", price: 89 },
          { id: 6, name: "Barfi", price: 139 },
          { id: 7, name: "Jalebi", price: 89 },
          { id: 8, name: "Peda", price: 99 },
        ],
      },
      {
        category: "Savory",
        items: [
          { id: 9, name: "Samosa", price: 49 },
          { id: 10, name: "Kachori", price: 59 },
          { id: 11, name: "Chakli", price: 69 },
        ],
      },
      {
        category: "Namkeen",
        items: [
          { id: 12, name: "Namak Pare", price: 89 },
          { id: 13, name: "Mathri", price: 99 },
          { id: 14, name: "Boondi", price: 79 },
        ],
      },
      {
        category: "Snacks Mix",
        items: [
          { id: 15, name: "Mix Pack", price: 249 },
          { id: 16, name: "Premium Mix", price: 349 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 17, name: "Lassi", price: 99 },
          { id: 18, name: "Chai", price: 49 },
        ],
      },
    ],
  },
  {
    id: "114",
    name: "Cafe Coffee Day",
    promoted: false,
    deliveryTime: "27 mins",
    rating: "4.0",
    cuisines: ["Cafe", "Beverages", "Snacks"],
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500",
    menu: [
      {
        category: "Coffee",
        items: [
          { id: 1, name: "Americano", price: 99 },
          { id: 2, name: "Cappuccino", price: 119 },
          { id: 3, name: "Latte", price: 119 },
          { id: 4, name: "Espresso", price: 79 },
          { id: 5, name: "Macchiato", price: 109 },
          { id: 6, name: "Mocha", price: 139 },
          { id: 7, name: "Flat White", price: 129 },
          { id: 8, name: "Cold Brew", price: 139 },
        ],
      },
      {
        category: "Tea",
        items: [
          { id: 9, name: "English Breakfast Tea", price: 89 },
          { id: 10, name: "Green Tea", price: 89 },
          { id: 11, name: "Iced Tea", price: 99 },
          { id: 12, name: "Masala Chai", price: 59 },
        ],
      },
      {
        category: "Smoothies",
        items: [
          { id: 13, name: "Strawberry Smoothie", price: 129 },
          { id: 14, name: "Mango Smoothie", price: 129 },
          { id: 15, name: "Mixed Berry Smoothie", price: 139 },
        ],
      },
      {
        category: "Snacks",
        items: [
          { id: 16, name: "Croissant", price: 89 },
          { id: 17, name: "Muffin", price: 99 },
          { id: 18, name: "Brownie", price: 109 },
          { id: 19, name: "Sandwich", price: 149 },
        ],
      },
      {
        category: "Pastries",
        items: [
          { id: 20, name: "Cheesecake", price: 139 },
          { id: 21, name: "Chocolate Cake", price: 149 },
        ],
      },
    ],
  },
  {
    id: "115",
    name: "Starbucks",
    promoted: true,
    deliveryTime: "29 mins",
    rating: "4.6",
    cuisines: ["Cafe", "Coffee"],
    image:
      "https://images.unsplash.com/photo-1592321675774-3de57f3ee0dc?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN0YXJidWNrc3xlbnwwfHwwfHx8MA%3D%3D",
    menu: [
      {
        category: "Coffee",
        items: [
          { id: 1, name: "Caffe Americano", price: 119 },
          { id: 2, name: "Caffe Latte", price: 149 },
          { id: 3, name: "Caffe Cappuccino", price: 149 },
          { id: 4, name: "Espresso", price: 99 },
          { id: 5, name: "Macchiato", price: 129 },
          { id: 6, name: "Caffe Mocha", price: 169 },
          { id: 7, name: "Flat White", price: 159 },
          { id: 8, name: "Caramel Macchiato", price: 179 },
        ],
      },
      {
        category: "Frappuccino",
        items: [
          { id: 9, name: "Caramel Frappuccino", price: 189 },
          { id: 10, name: "Java Chip Frappuccino", price: 199 },
          { id: 11, name: "Mocha Frappuccino", price: 189 },
          { id: 12, name: "Strawberry Frappuccino", price: 189 },
        ],
      },
      {
        category: "Tea",
        items: [
          { id: 13, name: "Tazo Tea", price: 109 },
          { id: 14, name: "Iced Tea", price: 119 },
          { id: 15, name: "Green Tea", price: 109 },
        ],
      },
      {
        category: "Food",
        items: [
          { id: 16, name: "Croissant", price: 129 },
          { id: 17, name: "Pastry", price: 139 },
          { id: 18, name: "Sandwich", price: 179 },
          { id: 19, name: "Cookie", price: 79 },
        ],
      },
      {
        category: "Pastries & Cakes",
        items: [
          { id: 20, name: "Chocolate Cake", price: 179 },
          { id: 21, name: "Blueberry Muffin", price: 149 },
        ],
      },
    ],
  },
  {
    id: "116",
    name: "Chanda Chowk",
    promoted: false,
    deliveryTime: "24 mins",
    rating: "4.3",
    cuisines: ["Chinese", "Asian", "Fast Food"],
    image:
      "https://media.istockphoto.com/id/545286388/photo/chinese-food-blank-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=TKVlDVF8CL-LOZwfiP6PZ-rmzjGmIhQDxvkOMaBj_r8=",
    menu: [
      {
        category: "Noodles",
        items: [
          { id: 1, name: "Hakka Noodles", price: 169 },
          { id: 2, name: "Schezwan Noodles", price: 179 },
          { id: 3, name: "Chicken Noodles", price: 189 },
          { id: 4, name: "Shrimp Noodles", price: 219 },
          { id: 5, name: "Veg Fried Noodles", price: 159 },
          { id: 6, name: "Paneer Noodles", price: 179 },
          { id: 7, name: "Beef Noodles", price: 199 },
          { id: 8, name: "Mixed Noodles", price: 209 },
        ],
      },
      {
        category: "Fried Rice",
        items: [
          { id: 9, name: "Chicken Fried Rice", price: 179 },
          { id: 10, name: "Veg Fried Rice", price: 159 },
          { id: 11, name: "Shrimp Fried Rice", price: 219 },
        ],
      },
      {
        category: "Soups",
        items: [
          { id: 12, name: "Hot & Sour Soup", price: 149 },
          { id: 13, name: "Manchow Soup", price: 159 },
          { id: 14, name: "Corn Soup", price: 129 },
        ],
      },
      {
        category: "Dumplings",
        items: [
          { id: 15, name: "Chicken Dumplings", price: 159 },
          { id: 16, name: "Veg Dumplings", price: 139 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 17, name: "Coca Cola", price: 60 },
          { id: 18, name: "Sprite", price: 60 },
          { id: 19, name: "Lemonade", price: 50 },
        ],
      },
    ],
  },
  {
    id: "117",
    name: "Mainland China",
    promoted: false,
    deliveryTime: "31 mins",
    rating: "4.2",
    cuisines: ["Chinese", "Asian"],
    image:
      "https://plus.unsplash.com/premium_photo-1661602289442-be921f526ec0?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNoaW5hJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    menu: [
      {
        category: "Appetizers",
        items: [
          { id: 1, name: "Chicken Spring Roll", price: 189 },
          { id: 2, name: "Veg Spring Roll", price: 159 },
          { id: 3, name: "Prawn Spring Roll", price: 229 },
          { id: 4, name: "Paneer Tikka", price: 199 },
          { id: 5, name: "Crispy Chicken", price: 199 },
          { id: 6, name: "Garlic Chicken", price: 219 },
          { id: 7, name: "Schezwan Cauliflower", price: 189 },
          { id: 8, name: "Chilli Paneer", price: 189 },
        ],
      },
      {
        category: "Main Course",
        items: [
          { id: 9, name: "Chicken Hakka Noodles", price: 229 },
          { id: 10, name: "Chicken Fried Rice", price: 219 },
          { id: 11, name: "Beef with Broccoli", price: 279 },
          { id: 12, name: "Seafood Fried Rice", price: 299 },
        ],
      },
      {
        category: "Soups",
        items: [
          { id: 13, name: "Sweet Corn Soup", price: 169 },
          { id: 14, name: "Hot & Sour Soup", price: 179 },
          { id: 15, name: "Wonton Soup", price: 189 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 16, name: "Coca Cola", price: 70 },
          { id: 17, name: "Sprite", price: 70 },
          { id: 18, name: "Iced Tea", price: 60 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 19, name: "Lychee Pudding", price: 119 },
          { id: 20, name: "Mango Pudding", price: 129 },
        ],
      },
    ],
  },
  {
    id: "118",
    name: "Meghna",
    promoted: true,
    deliveryTime: "25 mins",
    rating: "4.5",
    cuisines: ["Hyderabadi", "Mughlai", "Biryani"],
    image:
      "https://plus.unsplash.com/premium_photo-1700253176330-71ee9f44e30b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGFhbHxlbnwwfHwwfHx8MA%3D%3D",
    menu: [
      {
        category: "Biryani",
        items: [
          { id: 1, name: "Hyderabadi Chicken Biryani", price: 299 },
          { id: 2, name: "Hyderabadi Mutton Biryani", price: 349 },
          { id: 3, name: "Hyderabadi Veg Biryani", price: 249 },
          { id: 4, name: "Hyderabadi Paneer Biryani", price: 279 },
          { id: 5, name: "Egg Biryani", price: 269 },
          { id: 6, name: "Haleem Biryani", price: 299 },
          { id: 7, name: "Seafood Biryani", price: 399 },
          { id: 8, name: "Royal Biryani", price: 449 },
        ],
      },
      {
        category: "Curries",
        items: [
          { id: 9, name: "Chicken Ghee Roast", price: 279 },
          { id: 10, name: "Mutton Nihari", price: 349 },
          { id: 11, name: "Dal Makhani", price: 179 },
          { id: 12, name: "Paneer Tikka Masala", price: 259 },
        ],
      },
      {
        category: "Breads",
        items: [
          { id: 13, name: "Naan", price: 59 },
          { id: 14, name: "Roomali Roti", price: 49 },
          { id: 15, name: "Paratha", price: 69 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 16, name: "Double Ka Meetha", price: 129 },
          { id: 17, name: "Phirni", price: 99 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 18, name: "Hyderabadi Chai", price: 59 },
          { id: 19, name: "Lassi", price: 99 },
        ],
      },
    ],
  },
  {
    id: "119",
    name: "Nando's Peri-Peri",
    promoted: false,
    deliveryTime: "23 mins",
    rating: "4.3",
    cuisines: ["Grilled", "Portuguese", "Chicken"],
    image:
      "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZXMlMjBwZXJpJTIwcGVyaXxlbnwwfHwwfHx8MA%3D%3D",
    menu: [
      {
        category: "Chicken",
        items: [
          { id: 1, name: "1/4 Peri Peri Chicken", price: 249 },
          { id: 2, name: "1/2 Peri Peri Chicken", price: 449 },
          { id: 3, name: "Whole Peri Peri Chicken", price: 799 },
          { id: 4, name: "Chicken Butterfly", price: 399 },
          { id: 5, name: "Chicken Thighs", price: 349 },
          { id: 6, name: "Chicken Strips", price: 289 },
          { id: 7, name: "Chicken Burger", price: 199 },
          { id: 8, name: "Hot Wings", price: 249 },
        ],
      },
      {
        category: "Sides",
        items: [
          { id: 9, name: "Peri Peri Rice", price: 129 },
          { id: 10, name: "Corn on the Cob", price: 99 },
          { id: 11, name: "French Fries", price: 89 },
          { id: 12, name: "Grilled Vegetables", price: 109 },
        ],
      },
      {
        category: "Salads",
        items: [
          { id: 13, name: "Caesar Salad", price: 149 },
          { id: 14, name: "Garden Salad", price: 129 },
        ],
      },
      {
        category: "Sauces",
        items: [
          { id: 15, name: "Peri Peri Sauce", price: 29 },
          { id: 16, name: "Garlic Sauce", price: 29 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 17, name: "Coca Cola", price: 70 },
          { id: 18, name: "Sprite", price: 70 },
          { id: 19, name: "Lemonade", price: 60 },
        ],
      },
    ],
  },
  {
    id: "120",
    name: "Grill Point",
    promoted: false,
    deliveryTime: "28 mins",
    rating: "4.1",
    cuisines: ["Grilled", "Indian", "Continental"],
    image:
      "https://plus.unsplash.com/premium_photo-1739906794633-71adada97314?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3JpbGwlMjBzYW5kd2ljaHxlbnwwfHwwfHx8MA%3D%3D",
    menu: [
      {
        category: "Grilled Meats",
        items: [
          { id: 1, name: "Tandoori Chicken", price: 299 },
          { id: 2, name: "Grilled Paneer", price: 249 },
          { id: 3, name: "Seekh Kebab", price: 279 },
          { id: 4, name: "Tandoori Fish", price: 349 },
          { id: 5, name: "Shami Kebab", price: 229 },
          { id: 6, name: "Chapli Kebab", price: 249 },
          { id: 7, name: "Kakori Kebab", price: 269 },
          { id: 8, name: "Galauti Kebab", price: 239 },
        ],
      },
      {
        category: "Rice & Bread",
        items: [
          { id: 9, name: "Basmati Rice", price: 99 },
          { id: 10, name: "Naan", price: 59 },
          { id: 11, name: "Roomali Roti", price: 49 },
          { id: 12, name: "Paratha", price: 69 },
        ],
      },
      {
        category: "Vegetable Dishes",
        items: [
          { id: 13, name: "Grilled Vegetables", price: 179 },
          { id: 14, name: "Paneer Tikka", price: 229 },
        ],
      },
      {
        category: "Salads",
        items: [
          { id: 15, name: "Green Salad", price: 99 },
          { id: 16, name: "Onion Salad", price: 79 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 17, name: "Lassi", price: 99 },
          { id: 18, name: "Chai", price: 49 },
        ],
      },
    ],
  },
];

export default reslist;
