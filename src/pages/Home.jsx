import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
    return (
        <main>
            <section className="hero">
                <div className="hero-content">
                    <p className="eyebrow">
                        SIMPLE SKINCARE
                    </p>

                    <h1>
                        Pure essentials
                        <br />
                        for everyday skin.
                    </h1>

                    <p>
                        Thoughtfully created skincare for
                        simple, beautiful routines.
                    </p>

                    <Link
                        to="/shop"
                        className="primary-button"
                    >
                        Shop Collection
                    </Link>
                </div>
            </section>

            <section className="section">
                <p className="eyebrow">BEST SELLERS</p>

                <h2>Our Favorites</h2>

                <div className="product-grid">
                    {products.slice(0, 4).map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </section>

            <section
                className="story-section"
                id="About-us"
            >
                <div>
                    <p className="eyebrow">ABOUT VELORA</p>

                    <h2>
                        Skincare made simple.
                    </h2>

                    <p>
                        VELORA is built around simple routines,
thoughtful formulas and everyday skincare
essentials.
                    </p>
                </div>
            </section>
        </main>
    );
}

export default Home;