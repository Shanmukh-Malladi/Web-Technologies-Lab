
let products = [
    { id: 1, name: "Laptop", price: 800, category: "Electronics" },
    { id: 2, name: "T-Shirt", price: 20, category: "Clothing" },
    { id: 3, name: "Headphones", price: 50, category: "Electronics" },
    { id: 4, name: "Notebook", price: 5, category: "Stationery" }
];

let cart = [];
let discountMultiplier = 1;

function renderProducts() {
    var productContainer = document.getElementById("product-list");
    var html = "";
    
    for (let i = 0; i < products.length; i++) {
        
        html += products[i].name + " - $" + products[i].price + " ";
        html += "<button onclick='addToCart(" + products[i].id + ")'>Add</button><br><br>";
    }
    productContainer.innerHTML = html;
}


function addToCart(id) {
    
    var found = false;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            cart[i].quantity++;
            found = true;
            break;
        }
    }

    
    if (!found) {
        var productToAdd;
        for (var j = 0; j < products.length; j++) {
            if (products[j].id === id) {
                productToAdd = products[j];
                break;
            }
        }
        
        cart.push({
            id: productToAdd.id,
            name: productToAdd.name,
            price: productToAdd.price,
            category: productToAdd.category,
            quantity: 1
        });
    }
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}


function changeQty(index, amount) {
    cart[index].quantity += amount;
    if (cart[index].quantity <= 0) {
        removeFromCart(index);
    } else {
        updateCart();
    }
}


function applyCoupon() {
    let input = document.getElementById("coupon-code").value;
  
    let code = input.trim().toUpperCase();

    if (code === "SAVE10") {
        discountMultiplier = 0.9; 
        document.getElementById("coupon-message").innerHTML = "Coupon Applied!";
    } else if (code === "HALFPRICE") {
        discountMultiplier = 0.5;
        document.getElementById("coupon-message").innerHTML = "50% Discount Applied!";
    } else {
        discountMultiplier = 1;
        document.getElementById("coupon-message").innerHTML = "Invalid Code";
    }
    updateCart();
}

function updateCart() {
    let cartDisplay = document.getElementById("cart-display");
    let totalDisplay = document.getElementById("total-price");
    let displayHTML = "";
    let finalTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        let itemTotal = item.price * item.quantity;

        if (item.category === "Electronics") {
            itemTotal = itemTotal * 0.95; 
        }

        
        if (item.quantity > 5) {
            itemTotal = itemTotal - (item.quantity * 2);
        }

        finalTotal += itemTotal;

        displayHTML += item.name + " (Qty: " + item.quantity + ") - Cost: " + itemTotal + " ";
        displayHTML += "<button onclick='changeQty(" + i + ", 1)'>+</button>";
        displayHTML += "<button onclick='changeQty(" + i + ", -1)'>-</button>";
        displayHTML += "<button onclick='removeFromCart(" + i + ")'>Remove</button><br>";
    }

    
    finalTotal = finalTotal * discountMultiplier;

    cartDisplay.innerHTML = displayHTML;
    totalDisplay.innerHTML = finalTotal;
}

renderProducts();