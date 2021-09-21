import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

const Product = ({ product, cart, addCart, products }) => {
	const { id, name, price, emoji } = product;

	//Add product to cart
	const selectProduct = id => {
		const product = products.filter(product => product.id === id)[0];
		addCart([...cart, product]);
	};

	//Delete Product from cart
	const deleteProduct = id => {
		const products = cart.filter(product => product.id !== id);
		addCart(products);
	};

	return (
		<Container className="mt-2">
			<Card border="primary" style={{ width: "10rem" }}>
				<Card.Body className="text-center">
					<Card.Title>{name}</Card.Title>
					<Card.Title>
						{emoji}
						{emoji}
						{emoji}
					</Card.Title>
					<Card.Subtitle>${price}</Card.Subtitle>
					{products ? (
						<button
							className="button1 btn btn-primary"
							type="button"
							onClick={() => selectProduct(id)}>
							Add To Cart
						</button>
					) : (
						<button
							className="button2 btn btn-danger"
							type="button"
							onClick={() => deleteProduct(id)}>
							Delete
						</button>
					)}
				</Card.Body>
			</Card>
		</Container>
	);
};

export default Product;

Product.propTypes = {
	product: PropTypes.object,
	cart: PropTypes.array,
	addCart: PropTypes.func,
	products: PropTypes.array
};
