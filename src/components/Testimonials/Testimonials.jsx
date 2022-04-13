import React from "react";
import "./testimonials.css";
import { AiFillStar } from "react-icons/ai";
import { CgArrowLongLeft } from "react-icons/cg";
import { CgArrowLongRight } from "react-icons/cg";
import data from "./data";
import { useState } from "react";

const Reviwes = (props) => {
	const { data, style } = props;

	let iconStyle = { color: "#FBB040" };
	return (
		<div className="reviews" style={style}>
			<div className="reviews__wrapper">
				<h6>{data.title}</h6>
				<p>{data.desc}</p>
				<div className="stars">
					<AiFillStar style={iconStyle} />
					<AiFillStar style={iconStyle} />
					<AiFillStar style={iconStyle} />
					<AiFillStar style={iconStyle} />
					<AiFillStar style={iconStyle} />
				</div>
				<div className="rvs_name">{data.name}</div>
			</div>
		</div>
	);
};

function Testimonials() {
	const reviewData = data;
	const dataIndex = (reviewData.length * 330) / 2;
	console.log(dataIndex);
	const [slideIndex, setSlideIndex] = useState(0);
	const style = {
		transform: `translateX(${slideIndex}px)`,
		transition: "all 1s ease-out",
	};
	const handleClick = (direction) => {
		if (direction === "right") {
			setSlideIndex((prev) => prev + 330);
			slideIndex === dataIndex && setSlideIndex(-1 * slideIndex);
		} else {
			setSlideIndex((prev) => prev - 330);
			slideIndex === -1 * dataIndex && setSlideIndex(1 * dataIndex);
		}
	};
	return (
		<div className="section__padding container">
			<div className="testimonials">
				<div className="title">
					<h6>Testimonials</h6>
					<h1>What Customers Say</h1>
				</div>

				<div className="bg">
					<div className="content__wrapper">
						<div className="inner_content_wrapper">
							{reviewData.map((data) => (
								<Reviwes
									handleClick={handleClick}
									style={style}
									data={data}
									key={data.id}
								/>
							))}
						</div>
					</div>
					<div className="arrow">
						<span
							className="leftIcon"
							onClick={() => handleClick("left")}
						>
							<CgArrowLongLeft />
						</span>

						<span
							className="RightIcon"
							onClick={() => handleClick("right")}
						>
							<CgArrowLongRight />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Testimonials;
