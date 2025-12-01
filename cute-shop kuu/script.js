let cart = JSON.parse(localStorage.getItem("cart") || "[]");

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Produk masuk ke keranjang!");
}

// DETAIL PRODUK
if (window.location.pathname.includes("detail.html")) {
    const params = new URLSearchParams(window.location.search);

    document.getElementById("productName").innerText = params.get("name");
    document.getElementById("productPrice").innerText = "Rp " + Number(params.get("price")).toLocaleString();
    document.getElementById("productImage").src = params.get("img");
    document.getElementById("productDesc").innerText = params.get("desc");

    document.getElementById("addBtn").onclick = function() {
        addToCart(params.get("name"), Number(params.get("price")));
    };
}

// KERANJANG
if (window.location.pathname.includes("cart.html")) {
    let cartHTML = "";
    let total = 0;

    cart.forEach(item => {
        cartHTML += <div class="cart-item">${item.name} - Rp ${item.price.toLocaleString()}</div>;
        total += item.price;
    });

    document.getElementById("cartItems").innerHTML = cartHTML;
    document.getElementById("totalPrice").innerText = "Rp " + total.toLocaleString();
}