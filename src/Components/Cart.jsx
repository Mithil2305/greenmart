import React from "react";
import "../style/Cart.css";

const Cart = () => {
	return (
		<>
			<div className="product-page">
				<header className="header">
					<button className="back-button">m</button>
					<button className="tutorial-button">Watch Tutorial</button>
				</header>

				<div className="product-image">
					<div className="image-placeholder"></div>
				</div>

				<div className="product-info">
					<h1>Tomato Seeds</h1>
					<p className="price">
						Rs 20.0 <span>/ Pack</span>
					</p>

					<div className="quantity-selector">
						<button className="quantity-button">-</button>
						<input type="text" value="50" readOnly />
						<button className="quantity-button">+</button>
					</div>
				</div>

				<div className="actions">
					<button className="add-to-cart">Add to Cart</button>
					<button className="buy-now">Buy Now ⚡</button>
				</div>
			</div>
		</>
	);
};

export default Cart;
