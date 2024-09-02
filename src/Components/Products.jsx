import React from "react";
import star from "../assets/star.png";

const Products = () => {
	return (
		<>
			<div className="m">
				<div>
					<img src={back}></img>
				</div>
				<div className="b1">
					<button>
						<img src={tutorial} alt="" />
					</button>
				</div>
			</div>

			<h2 className="title">Popular in Coimbatore</h2>
			<div className="shop-cont">
				<div className="shops">
					<div className="shop-img"></div>
					<h5>Shop name</h5>
					<img src={star} alt="" width={"35px"} />
					<span>(187)</span>
				</div>
				<div className="shops">
					<div className="shop-img"></div>
					<h5>Shop name</h5>
					<img src={star} alt="" width={"35px"} />
					<span>(187)</span>
				</div>
				<div className="shops">
					<div className="shop-img"></div>
					<h5>Shop name</h5>
					<img src={star} alt="" width={"35px"} />
					<span>(187)</span>
				</div>
			</div>

			<h2 className="title">Buy Again</h2>
			<div className="shop-cont">
				<div className="shops">
					<div className="shop-img"></div>
					<h5>Shop name</h5>
					<img src={star} alt="" width={"35px"} />
					<span>(187)</span>
				</div>
				<div className="shops">
					<div className="shop-img"></div>
					<h5>Shop name</h5>
					<img src={star} alt="" width={"35px"} />
					<span>(187)</span>
				</div>
				<div className="shops">
					<div className="shop-img"></div>
					<h5>Shop name</h5>
					<img src={star} alt="" width={"35px"} />
					<span>(187)</span>
				</div>
			</div>

			<h2 className="title">Bestsellers</h2>
			<div className="shop-cont">
				<div className="shops">
					<div className="shop-img"></div>
					<h5>Shop name</h5>
					<img src={star} alt="" width={"35px"} />
					<span>(187)</span>
				</div>
				<div className="shops">
					<div className="shop-img"></div>
					<h5>Shop name</h5>
					<img src={star} alt="" width={"35px"} />
					<span>(187)</span>
				</div>
				<div className="shops">
					<div className="shop-img"></div>
					<h5>Shop name</h5>
					<img src={star} alt="" width={"35px"} />
					<span>(187)</span>
				</div>
			</div>

			<h2 className="title">Popular for Seeds</h2>
			<div className="shop-cont">
				<div className="shops">
					<div className="shop-img"></div>
					<h5>Shop name</h5>
					<img src={star} alt="" width={"35px"} />
					<span>(187)</span>
				</div>
				<div className="shops">
					<div className="shop-img"></div>
					<h5>Shop name</h5>
					<img src={star} alt="" width={"35px"} />
					<span>(187)</span>
				</div>
				<div className="shops">
					<div className="shop-img"></div>
					<h5>Shop name</h5>
					<img src={star} alt="" width={"35px"} />
					<span>(187)</span>
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
		</>
	);
};

export default Products;
