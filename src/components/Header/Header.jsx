/* eslint-disable jsx-a11y/anchor-is-valid */
import "./header.css";
import { Navbar } from "../index";
import leftImg from "./Images.png";
import rightImg from "./Images (1).png";
import { AiFillCaretRight } from "react-icons/ai";

function Header() {
	return (
		<>
			<div className="header header-top">
				<Navbar />
				<div className="header-main">
					<div className="left_img">
						<img src={leftImg} alt="leftImg" />
					</div>
					<div className="desc">
						<h1>
							We Develop <br />
							<span className="color">Shopify</span> sites
						</h1>
						<p>
							Slingback fabric heels. Thin wraparound ankle strap.
							Squared heel and toe. Pointed toes. Padded insole
							with geometrical design.{" "}
						</p>
						<div className="btnGrup">
							<button className="btn btn-1">Contact Us</button>
							<a href="#">
								Watch Video <AiFillCaretRight />
							</a>
						</div>
					</div>
					<div className="right_img">
						<img src={rightImg} alt="rightImg" />
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
