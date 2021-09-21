import React, { Fragment } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Header = () => {
	return (
		<Fragment>
			<Navbar bg="info" variant="info">
				<Container>
					<Navbar.Brand href="#home">
						<img
							alt=""
							src="https://cdn-icons-png.flaticon.com/512/262/262611.png"
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>{" "}
						ShoppingCart
					</Navbar.Brand>
				</Container>
			</Navbar>
		</Fragment>
	);
};

export default Header;
