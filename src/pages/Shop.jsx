import { useState } from "react";

import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Shop() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = [
        "All",
        ...new Set(
            products.map((product) => product.category)
        )
    ];

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        const matchesCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <main className="page">
            <section className="page-header">
                <p className="eyebrow">
                    VELORA COLLECTION
                </p>

                <h1>Shop Skincare</h1>

                <p>
                    Discover simple essentials for your
                    everyday skincare routine.
                </p>
            </section>

            <section className="shop-controls">
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(event) =>
                            setSearchTerm(event.target.value)
                        }
                    />
                </div>

                <div className="category-filters">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={
                                selectedCategory === category
                                    ? "category-button active"
                                    : "category-button"
                            }
                            onClick={() =>
                                setSelectedCategory(category)
                            }
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            <section className="section shop-products">
                {filteredProducts.length > 0 ? (
                    <div className="product-grid">
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="no-products">
                        <h2>No products found</h2>

                        <p>
                            Try another search or category.
                        </p>
                    </div>
                )}
            </section>
        </main>
    );
}

export default Shop;