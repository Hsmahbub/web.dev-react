/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./service.css";
import data from "./data";
import vector2 from './Ellipse 1.png'
 const ServiceBox = () => {
	const serviceData = data;
	return (
		<>
			{serviceData.map((item) => (
				<div className="service__box" key={item.id}>
					<div className="service__wrapper" >
						<div className="titles">
							<img src={item.logo} alt="logo" />{" "}
							<span>{item.title}</span>
						</div>
						<p>{item.desc}</p>
						<div className="read_more">
							<a href={item.link}>Read More</a>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

function Service() {
	return (
		<div className="vec-parent">
			<div className="section__padding">
				<div className="service">
					<div className="title">
						<h6>What we Do?</h6>
						<h1>Our Specialiazation</h1>
					</div>
					<div className="render">
						<ServiceBox />
					</div>
					<div className="service-button">
						<button className="btn sBtn">Learn More</button>
					</div>
				</div>
			</div>
			<div className="vector2">
				<img src={vector2} alt="vector2" />
			</div>
		</div>
	);
}

export default Service;
