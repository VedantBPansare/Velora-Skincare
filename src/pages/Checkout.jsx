import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCart, updateCart } from "../utils/cart";

function Checkout() {
    const navigate = useNavigate();

    const cart = getCart();

    const savedUser = JSON.parse(
        localStorage.getItem("veloraUser")
    );

    const [formData, setFormData] = useState({
        name: savedUser?.name || "",
        email: savedUser?.email || "",
        address: "",
        city: "",
        pincode: ""
    });

    const [paymentMethod, setPaymentMethod] =
        useState("Cash on Delivery");

    const [error, setError] = useState("");

    const subtotal = cart.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    function handlePlaceOrder(event) {
        event.preventDefault();

        const {
            name,
            email,
            address,
            city,
            pincode
        } = formData;

        if (
            !name ||
            !email ||
            !address ||
            !city ||
            !pincode
        ) {
            setError(
                "Please complete all delivery details."
            );
            return;
        }

        if (pincode.length !== 6) {
            setError(
                "Please enter a valid 6-digit pincode."
            );
            return;
        }

        const orderId =
            "VLR-" +
            Date.now().toString().slice(-8);

        const order = {
            orderId,
            customer: formData,
            paymentMethod,
            items: cart,
            total: subtotal,
            date: new Date().toLocaleDateString()
        };

        localStorage.setItem(
            "veloraLastOrder",
            JSON.stringify(order)
        );

        updateCart([]);

        navigate("/order-success");
    }

    if (cart.length === 0) {
        return (
            <main className="page">
                <section className="page-header">
                    <p className="eyebrow">
                        CHECKOUT
                    </p>

                    <h1>Your Cart Is Empty</h1>

                    <button
                        className="primary-button"
                        onClick={() =>
                            navigate("/shop")
                        }
                    >
                        Continue Shopping
                    </button>
                </section>
            </main>
        );
    }

    return (
        <main className="page checkout-page">
            <section className="page-header">
                <p className="eyebrow">
                    VELORA CHECKOUT
                </p>

                <h1>Complete Your Order</h1>

                <p>
                    A simple and secure checkout experience.
                </p>
            </section>

            <section className="checkout-container">

                <div className="checkout-form-box">
                    <h2>Delivery Details</h2>

                    <form onSubmit={handlePlaceOrder}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            name="address"
                            placeholder="Delivery Address"
                            value={formData.address}
                            onChange={handleChange}
                        />

                        <div className="checkout-row">
                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                value={formData.city}
                                onChange={handleChange}
                            />

                            <input
                                type="text"
                                name="pincode"
                                placeholder="Pincode"
                                maxLength="6"
                                value={formData.pincode}
                                onChange={handleChange}
                            />
                        </div>

                        <h2>
                            Payment Method
                        </h2>

                        <div className="payment-options">
                            <label>
                                <input
                                    type="radio"
                                    name="payment"
                                    checked={
                                        paymentMethod ===
                                        "Cash on Delivery"
                                    }
                                    onChange={() =>
                                        setPaymentMethod(
                                            "Cash on Delivery"
                                        )
                                    }
                                />

                                Cash on Delivery
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="payment"
                                    checked={
                                        paymentMethod === "UPI"
                                    }
                                    onChange={() =>
                                        setPaymentMethod("UPI")
                                    }
                                />

                                UPI
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="payment"
                                    checked={
                                        paymentMethod === "Card"
                                    }
                                    onChange={() =>
                                        setPaymentMethod("Card")
                                    }
                                />

                                Card
                            </label>
                        </div>

                        {error && (
                            <p className="form-error">
                                {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="primary-button place-order-button"
                        >
                            Place Order
                        </button>
                    </form>
                </div>

                <aside className="checkout-summary">
                    <p className="eyebrow">
                        ORDER SUMMARY
                    </p>

                    <h2>Your Order</h2>

                    {cart.map((item) => (
                        <div
                            className="checkout-item"
                            key={item.id}
                        >
                            <span>
                                {item.name}
                                <small>
                                    × {item.quantity}
                                </small>
                            </span>

                            <strong>
                                ₹
                                {item.price *
                                    item.quantity}
                            </strong>
                        </div>
                    ))}

                    <hr />

                    <div className="summary-row">
                        <span>Subtotal</span>
                        <strong>
                            ₹{subtotal}
                        </strong>
                    </div>

                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>

                    <div className="summary-row total-row">
                        <span>Total</span>
                        <strong>
                            ₹{subtotal}
                        </strong>
                    </div>
                </aside>

            </section>
        </main>
    );
}

export default Checkout;