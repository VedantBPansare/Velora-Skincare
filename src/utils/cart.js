export function getCart() {
    return (
        JSON.parse(
            localStorage.getItem("veloraCart")
        ) || []
    );
}

export function addToCart(product, quantity = 1) {
    const cart = getCart();

    const existingItem = cart.find(
        (item) => item.id === product.id
    );

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity
        });
    }

    localStorage.setItem(
        "veloraCart",
        JSON.stringify(cart)
    );

    window.dispatchEvent(
        new Event("veloraCartChange")
    );
}

export function updateCart(cart) {
    localStorage.setItem(
        "veloraCart",
        JSON.stringify(cart)
    );

    window.dispatchEvent(
        new Event("veloraCartChange")
    );
}