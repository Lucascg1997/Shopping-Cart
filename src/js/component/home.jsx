import React, { Fragment, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Product from "./product";
import Cart from "./cart";
import { Container } from "react-bootstrap";

//create your first component
const Home = () => {
	const [products, saveProducts] = useState([
		{ id: 1, name: "APPLE", price: "1.20 USD", emoji: "🍎" },
		{ id: 2, name: "BANANA", price: "1.30 USD", emoji: "🍌" },
		{ id: 3, name: "PEAR", price: "1.40 USD", emoji: "🍐" },
		{ id: 4, name: "MANGO", price: "1.50 USD", emoji: "🥭" }
	]);

	const [cart, addCart] = useState([]);

	return (
		<Fragment>
			<Header />
			<Container>
				<h1>List of products</h1>
				{products.map(product => (
					<Product
						key={products.id}
						product={product}
						products={products}
						cart={cart}
						addCart={addCart}
					/>
				))}
				<Cart cart={cart} addCart={addCart} />
			</Container>
		</Fragment>
	);
};

export default Home;
