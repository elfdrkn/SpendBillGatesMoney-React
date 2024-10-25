import React from 'react';
import '../css/Receipt.css';

const Receipt = ({ products }) => {  
    // To filter the purchased products (products which quantity > 0 )
    const purchasedProducts = products.filter(product => product.quantity > 0);

    // Total amount
    const totalAmount = purchasedProducts.reduce((total, product) => {
        return total + product.quantity * product.price;
    }, 0);

    if (purchasedProducts.length === 0) {
        return null; // Eğer ürün alınmadıysa bileşen render edilmez
    }

    return (
        <div className="receipt">
            <h2>Your Receipt</h2>
            <ul>
                {purchasedProducts.map((product) => (
                    <li key={product.id} className='receipt-container'>
                        <div className='receipt-items'>
                            <span>{product.name}</span>  {/* Product name */}
                            <span>x{product.quantity}</span>  {/* Product quantity */}
                            <span style={{color: "#25C585" }} > ${product.price.toLocaleString()}</span> {/* Product price */}
                        </div> 
                    </li>
                ))}
            </ul>
            <hr />
            <h3 style={{color: "#25C585" }}>TOTAL ${totalAmount.toLocaleString()}</h3> {/* Total money */}
        </div>
    );
};

export default Receipt;
