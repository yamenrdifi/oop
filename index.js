// 1. Product Class
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// 2. ShoppingCartItem Class
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Method to calculate the total price for the item
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

// 3. ShoppingCart Class
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Method to add an item to the cart
    addItem(product, quantity) {
        // Check if the product already exists in the cart
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            const cartItem = new ShoppingCartItem(product, quantity);
            this.items.push(cartItem);
        }
    }

    // Method to remove an item from the cart
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Method to get the total quantity of items in the cart
    getTotalQuantity() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    // Method to get the total price of the cart
    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    // Method to display all items in the cart
    displayCart() {
        if (this.items.length === 0) {
            console.log("Your shopping cart is empty.");
        } else {
            console.log("Shopping Cart:");
            this.items.forEach(item => {
                console.log(`- ${item.product.name}: $${item.product.price} x ${item.quantity} = $${item.getTotalPrice()}`);
            });
            console.log(`Total Price: $${this.getTotalPrice()}`);
            console.log(`Total Quantity: ${this.getTotalQuantity()}`);
        }
    }
}

// Testing the Shopping Cart

// Creating products
const product1 = new Product(1, "T-Shirt", 20);
const product2 = new Product(2, "Jeans", 40);
const product3 = new Product(3, "Sneakers", 60);

// Creating a shopping cart
const cart = new ShoppingCart();

// Adding items to the cart
cart.addItem(product1, 2); // 2 T-Shirts
cart.addItem(product2, 1); // 1 Jeans
cart.addItem(product3, 3); // 3 Sneakers

// Displaying the cart
cart.displayCart();

// Removing an item from the cart (e.g., remove T-Shirt)
cart.removeItem(1);

// Displaying the cart after removing an item
cart.displayCart();
