import React from 'react';
import products from '../data/products.js';

function Home(){
    return(
        <div>
            <h2>Our Products</h2>
            <ul className="product-list">
                {products.map(product => (
                    <li key={product.id}>
                        <h3>{product.productName}</h3>
                        <img src={product.image} alt={product.productName} />
                        <p>Price: ₹{product.price.toFixed(2)}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home;