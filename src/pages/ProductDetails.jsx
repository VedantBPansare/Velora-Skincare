import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { addToCart } from "../utils/cart";

function ProductDetails() {
    const { id } = useParams();

    const product = products.find(
        (item) => item.id === Number(id)
    );

    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return (
            <main className="page">
                <div className="no-products">
                    <h2>Product Not Found</h2>
                </div>
            </main>
        );
    }

    function handleAddToCart() {
        const isLoggedIn =
            localStorage.getItem("veloraLoggedIn") === "true";

        if (!isLoggedIn) {
            const savedUser =
                localStorage.getItem("veloraUser");

            if (savedUser) {
                alert(
                    "Please login to add products to your cart."
                );
            } else {
                alert(
                    "Please create an account and login to add products to your cart."
                );
            }

            return;
        }

        addToCart(product, quantity);

        alert(
            `${quantity} ${product.name} added to cart!`
        );
    }

    return (
        <main className="product-detail page">

            <div className="detail-image">
                <img
                    src={product.image}
                    alt={product.name}
                />
            </div>

            <div className="detail-content">

                <p className="eyebrow">
                    {product.category}
                </p>

                <h1>{product.name}</h1>

                <div className="product-rating">
                    <span className="stars">
                        ★★★★★
                    </span>

                    <span>
                        {product.rating} / 5
                    </span>
                </div>

                <h2>₹{product.price}</h2>

                <p className="detail-description">
                    {product.description}
                </p>

                <div className="product-meta">
                    <div>
                        <span>Size</span>
                        <strong>{product.size}</strong>
                    </div>

                    <div>
                        <span>Category</span>
                        <strong>{product.category}</strong>
                    </div>
                </div>

                <div className="detail-section">
                    <h3>Benefits</h3>
                    <p>{product.benefits}</p>
                </div>

                <div className="detail-section">
                    <h3>Ingredients</h3>
                    <p>{product.ingredients}</p>
                </div>

                <div className="detail-section">
                    <h3>How to Use</h3>
                    <p>{product.howToUse}</p>
                </div>

                <div className="quantity-selector">

                    <span>Quantity</span>

                    <div>
                        <button
                            onClick={() =>
                                setQuantity(
                                    Math.max(
                                        1,
                                        quantity - 1
                                    )
                                )
                            }
                        >
                            −
                        </button>

                        <span>{quantity}</span>

                        <button
                            onClick={() =>
                                setQuantity(
                                    quantity + 1
                                )
                            }
                        >
                            +
                        </button>
                    </div>

                </div>

                <button
                    className="primary-button"
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>

            </div>

        </main>
    );
}

export default ProductDetails;