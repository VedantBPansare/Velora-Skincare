import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import { getCart } from "../utils/cart";

function Cart() {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(getCart());

        function refreshCart() {
            setCart(getCart());
        }

        window.addEventListener(
            "veloraCartChange",
            refreshCart
        );

        return () => {
            window.removeEventListener(
                "veloraCartChange",
                refreshCart
            );
        };
    }, []);

    const subtotal = cart.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );

    if (cart.length === 0) {
        return (
            <main className="page cart-page">
                <section className="page-header">
                    <p className="eyebrow">
                        YOUR SHOPPING BAG
                    </p>

                    <h1>Your Cart</h1>
                </section>

                <div className="empty-cart">
                    <h2>Your cart is empty</h2>

                    <p>
                        Start exploring our collection.
                    </p>

                    <Link
                        to="/shop"
                        className="primary-button"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="page cart-page">
            <section className="page-header">
                <p className="eyebrow">
                    YOUR SHOPPING BAG
                </p>

                <h1>Your Cart</h1>
            </section>

            <section className="cart-container">
                <div className="cart-items">
                    {cart.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            cart={cart}
                            setCart={setCart}
                        />
                    ))}
                </div>

                <aside className="cart-summary">
                    <h2>Order Summary</h2>

                    <div className="summary-row">
                        <span>Subtotal</span>
                        <strong>₹{subtotal}</strong>
                    </div>

                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>

                    <hr />

                    <div className="summary-row total-row">
                        <span>Total</span>
                        <strong>₹{subtotal}</strong>
                    </div>

                    <button
    className="primary-button checkout-button"
    onClick={() => navigate("/checkout")}
>
    Proceed to Checkout
</button>
                </aside>
            </section>
        </main>
    );
}

export default Cart;