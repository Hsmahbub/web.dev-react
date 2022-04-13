import React from "react";
import "./brand.css";
import logo1 from "./LOGO.png";
import logo2 from "./LOGO (1).png";
import logo3 from "./LOGO (2).png";
import logo4 from "./LOGO (3).png";
import logo5 from "./LOGO (4).png";
import vector from "./Vector 1.png";

function Brand() {
	return (
		<div className="wrapper">
			<div className="brand">
				<div>
					<img src={logo1} alt="logo1" />
				</div>
				<div>
					<img src={logo2} alt="logo2" />
				</div>
				<div>
					<img src={logo3} alt="logo3" />
				</div>
				<div>
					<img src={logo4} alt="logo4" />
				</div>
				<div>
					<img src={logo5} alt="logo5" />
				</div>
			</div>
			<div className="vector">
				<img src={vector} alt="vector" />
			</div>
		</div>
	);
}

export default Brand;
