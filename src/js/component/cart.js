import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Product from "./product";
import { Container } from "react-bootstrap";

const Cart = ({ cart, addCart }) => {
	return (
		<Fragment>
			<Container className="border border-primary mt-1">
				<div className="cart">
					<h2>YOUR SHOPPING CART!</h2>
					{cart.length === 0 ? (
						<p className="text-danger">
							No products in the shopping cart!
						</p>
					) : (
						cart.map(product => (
							<Product
								key={product.id}
								product={product}
								cart={cart}
								addCart={addCart}
							/>
						))
					)}
				</div>
			</Container>
		</Fragment>
	);
};

export default Cart;

Cart.propTypes = {
	cart: PropTypes.array,
	addCart: PropTypes.func
};
