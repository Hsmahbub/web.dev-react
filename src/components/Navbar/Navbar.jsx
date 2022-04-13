/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { VscThreeBars } from "react-icons/vsc";
import ellipse from './Ellipse 3.png'
import "./navbar.css";

function Links() {
	return (
		<>
			<p>
				<a href="#">Home</a>
			</p>
			<p>
				<a href="#">About</a>
			</p>
			<p>
				<a href="#">Testimonials</a>
			</p>
			<p>
				<a href="#">Contact</a>
			</p>
			<p className=" sign btn ">
				<a href="#">Sign in</a>
			</p>
		</>
	);
}

function Navbar() {
	const [toggle, setToggle] = useState(true);
	return (
		<>
			<div className="navbar section__padding">
				<div className="logo">Web.Dev</div>
				<div className="links">
					<Links />
				</div>
				<div className="menuBtn">
					{toggle ? (
						<VscThreeBars onClick={() => setToggle(false)} />
					) : (
						<GrFormClose onClick={() => setToggle(true)} />
					)}
				</div>
			</div>
				<div className="ellipse"><img src={ellipse} alt="ellipse" /></div>
			{!toggle && (
				<div className="menuLInks slide-top">
					<Links />
				</div>
			)}
		</>
	);
}

export default Navbar;
