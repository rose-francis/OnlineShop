import React from 'react';

function ProductCard(product){
    return(
        <div>
            <h3>{product.productName}</h3>
            <img src={product.image} alt={product.productName} />
            <p>Price: ₹{product.price.toFixed(2)}</p>
        </div>
    )
}

export default ProductCard;