import React from "react";
import "./portfolio.css";
import data from "./data";
import vector3 from "./Ellipse 2.png";

const FolioData = () => {
	const portfolioData = data;
	return (
		<>
			{portfolioData.map((item) => (
				<div className="portfolio__box" key={item.id}>
					<div className="portfolio__wrapper" >
						<img src={item.img} alt="" />
						<div className="read_more">
							<p>{item.title}</p>
							<div>
								<a href={item.link}>View Details</a>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

function Portfolio() {
	return (
		<div className="vec-parent">
			<div className="section__padding">
				<div className="portfolio">
					<div className="title">
						<h6>Our Work</h6>
						<h1>Our Portfolio</h1>
					</div>
					<div className="render">
						<FolioData />
					</div>
					<div className="portfolio-button">
						<button className="btn sBtn">All Project</button>
					</div>
				</div>
			</div>
			<div className="vector3">
				<img src={vector3} alt="vector2" />
			</div>
		</div>
	);
}

export default Portfolio;
