import React from "react";

const Market = () => {
	return (
		<>
			<div className="head">
				<div className="search">
					<input type="text" placeholder="Search Services" />
				</div>

				<div className="weather">
					<div>
						<img src={weather} alt="" />
					</div>
					<div>
						<h3>43°C</h3>
					</div>
				</div>
			</div>

			<div className="nav">
				<footer>
					<img src={home} alt="" />
					<img src={farmer} alt="" />
					<img src={market} alt="" />
					<img src={cart} alt="" />
					<img src={settings} alt="" />
				</footer>
			</div>
		</>
	);
};

export default Market;
