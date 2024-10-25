import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Receipt from './components/Receipt';
import productsData from './data/data.json'; 

function App() {
  const [balance, setBalance] = useState(100000000000); // First balance
  const [products, setProducts] = useState(productsData);

  const handleBuy = (id, price) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id && balance >= price ? { ...product, quantity: product.quantity + 1 } : product)
    );
    if (balance >= price) {
      setBalance(prevBalance => prevBalance - price);
    }
  };

  const handleSell = (id, price) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id && product.quantity > 0 ? { ...product, quantity: product.quantity - 1 } : product)
    );
    setBalance(prevBalance => prevBalance + price);
  };

  return (
    <>
      <Header balance={balance} /> {/* balance -> to header component */}
      <ProductList products={products} onBuy={handleBuy} onSell={handleSell} />
      <Receipt products={products} /> 
     
    </>
  );
};

export default App;
