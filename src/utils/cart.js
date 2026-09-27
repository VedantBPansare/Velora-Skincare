function getCurrentUserKey() {
    const isLoggedIn =
        localStorage.getItem("veloraLoggedIn") === "true";

    if (!isLoggedIn) {
        return null;
    }

    const user = JSON.parse(
        localStorage.getItem("veloraUser")
    );

    if (!user?.email) {
        return null;
    }

    return `veloraCart_${user.email.toLowerCase()}`;
}

export function getCart() {
    const cartKey = getCurrentUserKey();

    if (!cartKey) {
        return [];
    }

    return (
        JSON.parse(
            localStorage.getItem(cartKey)
        ) || []
    );
}

export function addToCart(product, quantity = 1) {
    const cartKey = getCurrentUserKey();

    if (!cartKey) {
        return;
    }

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
        cartKey,
        JSON.stringify(cart)
    );

    window.dispatchEvent(
        new Event("veloraCartChange")
    );
}

export function updateCart(cart) {
    const cartKey = getCurrentUserKey();

    if (!cartKey) {
        return;
    }

    localStorage.setItem(
        cartKey,
        JSON.stringify(cart)
    );

    window.dispatchEvent(
        new Event("veloraCartChange")
    );
}