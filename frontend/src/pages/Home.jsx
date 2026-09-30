import React from 'react';
import products from '../data/products.js';
import ProductCard from '../components/ProductCard.jsx';

function Home(){
    return(
        <div>
            <h2 className="text-2xl font-semibold text-gray-800" >Our Products</h2>
            <ul className="product-list">
                {products.map(product => (
                    <ProductCard key={product.id} productName={product.productName} image={product.image} price={product.price} />
                ))}
            </ul>
        </div>
    )
}

export default Home;