import React, {useState, useEffect} from 'react';
import './App.css';

const url = 'data/products.json'

const Banner = ({title}) => (
  <h1 className="title">{ title || '[loading...]' }</h1>
);


const ProductList = ({products}) => (
  <ul>
    { products.map(product => <Product product= {product} />)}
  </ul>
);

const Product = ({ product }) => (
  <li>{product.title}</li>
);


const App = () => {
  const [productList, setProductList] = useState({ title: '', products: []});
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(url);
      if(!response.ok) throw response;
      const json = await response.json();
      console.log(json)
      setProductList(json);
    }
    fetchProducts();
  
  },[])
  return (
  <div>
    <section>
      <div className = "products wrapper">
        <Banner title={ productList.title} />
        <ProductList products = {productList.products}/>
      </div>
    </section>
  </div>
  );
};



export default App;
