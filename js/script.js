function addToCart(productName, productPrice, imageUrl) {
	let cart = JSON.parse(localStorage.getItem("cart")) || [];
	let productIndex = cart.findIndex(item => item.name === productName);
	if (productIndex !== -1) {
	  cart[productIndex].quantity++;
	} else {
	  let product = { name: productName, price: productPrice, image: imageUrl, quantity: 1 };
	  cart.push(product);
	}
	localStorage.setItem("cart", JSON.stringify(cart));
	showCart();
  }
  
  function removeFromCart(index) {
	let cart = JSON.parse(localStorage.getItem("cart")) || [];
	cart.splice(index, 1);
	localStorage.setItem("cart", JSON.stringify(cart));
	showCart();
  }
  
  function increaseQuantity(index) {
	let cart = JSON.parse(localStorage.getItem("cart")) || [];
	cart[index].quantity++;
	localStorage.setItem("cart", JSON.stringify(cart));
	showCart();
  }
  
  function decreaseQuantity(index) {
	let cart = JSON.parse(localStorage.getItem("cart")) || [];
	if (cart[index].quantity > 1) {
	  cart[index].quantity--;
	} else {
	  cart.splice(index, 1);
	}
	localStorage.setItem("cart", JSON.stringify(cart));
	showCart();
  }
  
  function showCart() {
	let cart = JSON.parse(localStorage.getItem("cart")) || [];
	let total = 0;
  
	let cartHtml = "<h1>My Cart</h1>";
  
	for (let i = 0; i < cart.length; i++) {
	  cartHtml += `
		<div class="card">
		  <img src="${cart[i].image}" alt="${cart[i].name}" width="100">
		  <div>
			<h2 class="product-name">${cart[i].name}</h2>
			<p class="product-price">\u20B9${cart[i].price} x ${cart[i].quantity}</p>
		  </div>
		  <div>
			<button class="product-plus" onclick="increaseQuantity(${i})">+</button>
			<button class="product-minuns" onclick="decreaseQuantity(${i})">-</button>
		  </div>
		  <button class="product-remove" onclick="removeFromCart(${i})">Remove</button>
		</div>
	  `;
	  total += cart[i].price * cart[i].quantity;
	}
  
	cartHtml += `<p class="total">Total: \u20B9${total}</p>`;
  
	document.getElementById("cart").innerHTML = cartHtml;
  }
  
  showCart();
  

  
  function viewCart() {
	window.location.href = "addtocartpage.html";
  }