import React, { useState } from "react";

const Products = () => {
	const [quantity, setQuantity] = useState(50);

	const handleIncrement = () => {
		setQuantity(quantity + 1);
	};

	const handleDecrement = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	return (
		<div className="product">
			<div className="product-image">
				{/* Replace with your product image */}
				<img src="your-product-image.jpg" alt="Tomato Seeds" />
			</div>
			<div className="product-details">
				<h3>Tomato Seeds</h3>
				<p>Rs 20.0 / Pack</p>
				<div className="quantity-control">
					<button onClick={handleDecrement}>-</button>
					<input
						type="number"
						value={quantity}
						onChange={(e) => setQuantity(parseInt(e.target.value))}
					/>
					<button onClick={handleIncrement}>+</button>
				</div>
				<button className="add-to-cart">Add to Cart</button>
				<button className="buy-now">Buy Now</button>
			</div>
		</div>
	);
};

export default Products;
