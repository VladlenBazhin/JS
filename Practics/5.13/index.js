function addToCart(productName) {
        const cart = document.querySelector('#cart');
        const li = document.createElement('li');

        li.textContent = productName;
        li.classList.add('cart-item');

        cart.append(li);
    }