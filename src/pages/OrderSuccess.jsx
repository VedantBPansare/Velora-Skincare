import { Link } from "react-router-dom";

function OrderSuccess() {
    const order = JSON.parse(
        localStorage.getItem("veloraLastOrder")
    );

    return (
        <main className="page success-page">
            <div className="success-box">

                <div className="success-icon">
                    ✓
                </div>

                <p className="eyebrow">
                    ORDER CONFIRMED
                </p>

                <h1>
                    Thank You for Shopping with VELORA
                </h1>

                <p>
                    Your order has been placed successfully.
                    We appreciate your trust in VELORA.
                </p>

                <div className="order-id">
                    <span>Order ID</span>
                    <strong>
                        {order?.orderId || "VLR-ORDER"}
                    </strong>
                </div>

                <p className="success-payment">
                    Payment Method:{" "}
                    <strong>
                        {order?.paymentMethod ||
                            "Cash on Delivery"}
                    </strong>
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

export default OrderSuccess;