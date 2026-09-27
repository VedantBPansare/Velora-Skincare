import { updateCart } from "../utils/cart";

function CartItem({ item, cart, setCart }) {
    function changeQuantity(amount) {
        const updatedCart = cart.map(
            (cartItem) => {
                if (cartItem.id === item.id) {
                    return {
                        ...cartItem,
                        quantity: Math.max(
                            1,
                            cartItem.quantity + amount
                        )
                    };
                }

                return cartItem;
            }
        );

        setCart(updatedCart);
        updateCart(updatedCart);
    }

    function removeItem() {
        const updatedCart = cart.filter(
            (cartItem) =>
                cartItem.id !== item.id
        );

        setCart(updatedCart);
        updateCart(updatedCart);
    }

    return (
        <div className="cart-item">
            <img
                src={item.image}
                alt={item.name}
            />

            <div className="cart-item-info">
                <p className="product-category">
                    {item.category}
                </p>

                <h3>{item.name}</h3>

                <p>₹{item.price}</p>

                <div className="cart-quantity">
                    <button
                        onClick={() =>
                            changeQuantity(-1)
                        }
                    >
                        −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                        onClick={() =>
                            changeQuantity(1)
                        }
                    >
                        +
                    </button>
                </div>

                <button
                    className="remove-button"
                    onClick={removeItem}
                >
                    Remove
                </button>
            </div>

            <strong>
                ₹{item.price * item.quantity}
            </strong>
        </div>
    );
}

export default CartItem;