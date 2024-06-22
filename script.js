document.addEventListener('DOMContentLoaded', () => {
    loadCart();
});

function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart');

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        let cartHTML = '<ul>';
        let totalPrice = 0;
        cart.forEach((item, index) => {
            cartHTML += `
                <li>
                    ${item.name} - $${item.price} x ${item.quantity}
                    <button onclick="removeFromCart(${index})">Remove</button>
                </li>`;
            totalPrice += item.price * item.quantity;
        });
        cartHTML += `</ul><p>Total: $${totalPrice.toFixed(2)}</p>`;
        cartHTML += '<button onclick="clearCart()">Clear Cart</button>';
        cartContainer.innerHTML = cartHTML;
    }
}

function scrollProducts(direction) {
    const productsContainer = document.querySelector('.products');
    const scrollAmount = 200; // Adjust this value to change the scroll distance
    productsContainer.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

function orderNow(productName) {
    const phoneNumber = '+250791750397';
    const message = `Hey! I would like to buy this ${productName}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}