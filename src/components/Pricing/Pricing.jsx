import React from "react";
import "./pricing.css";
import { AiFillCheckCircle } from "react-icons/ai";
import data from "./data";

const Feature = ({ text }) => {
	return (
		<div className="feature__style">
			<span style={{ marginRight: ".5rem" }}>
				<AiFillCheckCircle />
			</span>

			<span>{text}</span>
		</div>
	);
};

function Pricing() {
	const { list1, list2, list3, list4, list5 } = data;
	return (
		<div className="section__padding container">
			<div className="title">
				<h6>Pricing</h6>
				<h1>Pricing Policy</h1>
			</div>

			<div className="pricing">
				<div className="pricing__box">
					<div className="inner_pricing_box">
						<p>For Starter</p>
						<h1>$1499</h1>
						<div className="feature">
							<Feature text={list1} />
							<Feature text={list2} />
							<Feature text={list3} />
							<Feature text={list4} />
							<Feature text={list5} />
						</div>
						<button className="btn btn_style">Request Demo</button>
					</div>
				</div>
				<div className="pricing__box">
					<div className="inner_pricing_box">
						<p>For Team</p>
						<h1>$2999</h1>
						<div className="feature">
							<Feature text={list1} />
							<Feature text={list2} />
							<Feature text={list3} />
							<Feature text={list4} />
							<Feature text={list5} />
						</div>
						<button className="btn btn_style">Request Demo</button>
					</div>
				</div>
				<div className="pricing__box">
					<div className="inner_pricing_box">
						<p>For Company</p>
						<h1>Customs</h1>
						<div className="feature">
							<Feature text={list1} />
							<Feature text={list2} />
							<Feature text={list3} />
							<Feature text={list4} />
							<Feature text={list5} />
						</div>
						<button className="btn btn_style">Contact Us</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Pricing;
