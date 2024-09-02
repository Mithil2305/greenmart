import React from "react";
import search from "../assets/Search.png";
const Home = () => {
	return (
		<>
			<div className="home">
				<div className="head">
					<div className="search">
						<img src={search} alt="" />
						<input type="text" name="" id="" />
					</div>
				</div>
				<div className="scheme"></div>
				<div className="recommend"></div>
				<div className="nearshop"></div>
				<div className="nearfarmer"></div>
			</div>
		</>
	);
};

export default Home;
