import React from "react";
import search from "../assets/Search.png";
import weather from "../assets/weather.png";
import profile from "../assets/profile.png";
import star from "../assets/star.png";
import Chat from "../assets/Chat.png";
const Home = () => {
	return (
		<>
			<div className="home">
				<div className="head">
					<div className="search">
						<img src={search} alt="" className="search-img" />
						<input type="text" name="" id="" placeholder="Search Services" />
					</div>
					<div className="weather">
						<img src={weather} alt="" />
						<h3>43°C</h3>
					</div>
				</div>
				<div className="scheme">
					<p>agri scheme here</p>
				</div>
				<h2>Recommended</h2>
				<div className="recommend">
					<div className="items"></div>
				</div>
				<h2>Nearby Shops</h2>
				<div className="shop-cont">
					<div className="shops">
						<div className="shop-img"></div>
						<p>Shop name</p>
						<img src={star} alt="" />
						(187)
					</div>
					<div className="shops">
						<div className="shop-img"></div>
						<p>Shop name</p>
						<img src={star} alt="" />
						(187)
					</div>
					<div className="shops">
						<div className="shop-img"></div>
						<p>Shop name</p>
						<img src={star} alt="" />
						(187)
					</div>
				</div>

				<div className="farm-list">
					<div className="famer-cont">
						<div className="farm">
							<div>
								<img src={profile} alt="" />
							</div>
							<div>
								<h4>Farmer Name</h4>
								<p>Coimbatore</p>
								<button>
									{" "}
									<img src={Chat} alt="" />
									Message
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
