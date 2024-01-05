import {useState} from 'react';
import fetchApi from './service/fetchApi';
import shoppingCart from "./assets/shopping-cart.png";
import searchIcon from "./assets/search.svg"
import './App.css';
import ProductListing from './components/Product-Listing';




function App() {

  let title = "Product Search";

  const [searchInput, setSearchInput] = useState('');
  // const [updatedInput, setUpdatedInput] = useState('');
  const [productDetails, setProductDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProduct = () => {
    setIsLoading(true);
    fetchApi(searchInput, setProductDetails)
    setIsLoading(false);
  }

  function handleKeyPress(event){
     var searchValue = document.querySelector(".searchBar").value
      if(searchValue !== ""){
        fetchProduct()
      }else{
        alert("enter a product name to search")
      }
      
  }

  return (
    <div className="App">
        <div className='header'>
          <h1>{title}</h1>
        </div>
        {/* Search bar */}
        <div className="search-container">
          <input type="text" name="searchBar" id="searchBar" value={searchInput} onChange={e => setSearchInput(e.target.value)}  className='searchBar' placeholder='Search Product'  />
          <button type="submit" className='searchBtn' onClick={handleKeyPress}><img src={searchIcon} alt="search" /> Search</button>
        </div>

      {/* product listing */}
      {
        productDetails.length === 0 ? 
        <div className='HomePage'>
         {
           isLoading === false ? <div className="loader"> <img src="https://img.icons8.com/bubbles/100/000000/loading-sign.png" alt="loading-sign"/> <p>Loading</p></div>
          :
          <div className='container-animation'>
            <img src={shoppingCart} alt="add-shopping-cart"/>
            <p className='paragraph'> Enter a product name to search</p>
          </div>  

         }
        </div>
        :
        <div className='container'> 
        <h2 className='heading2'>Search results for "{searchInput}"</h2>
        <ProductListing productDetails={productDetails} /> </div>
      } 
    </div>
  );
}

export default App;
