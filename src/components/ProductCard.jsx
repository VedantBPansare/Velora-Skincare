import { Link } from "react-router-dom";
import { addToCart } from "../utils/cart";

function ProductCard({ product }) {
    function handleAddToCart() {
        addToCart(product);

        alert(
            `${product.name} added to cart!`
        );
    }

    return (
        <div className="product-card">
            <img
                src={product.image}
                alt={product.name}
            />

            <div className="product-info">
                <p className="product-category">
                    {product.category}
                </p>

                <h3>{product.name}</h3>

                <p className="product-price">
                    ₹{product.price}
                </p>

                <div className="product-actions">
                    <Link
                        to={`/product/${product.id}`}
                        className="product-button"
                    >
                        View Product
                    </Link>

                    <button
                        className="add-cart-button"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;