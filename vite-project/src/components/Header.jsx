import '../css/Header.css';
import ProductList from './ProductList';

const Header = ({balance}) => {
    return (
        <>
            <div className="container">
                <header className="header">            
                    <img className="header-img" src="/img/billgates.jpg" alt="Bill Gates" />
                    <h1 className="title">Spend Bill Gates Money</h1>
                </header>
            </div> 
            <div className="money-bar">
                ${balance.toLocaleString()} {/* Show balance here. toLocaleString = "100,000,000,000" (American form)*/}  
            </div> 
           
        </>                          
    );
};

export default Header;