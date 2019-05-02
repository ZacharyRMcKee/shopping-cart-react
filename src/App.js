import React from 'react';
import './App.css';

const products = {
  title: "List of Products",
  products: [
    {
     "sku": 12064273040195392,
     "title": "Cat Tee Black T-Shirt",
     "description": "4 MSL",
     "style": "Black with custom print",
     "price": 10.9,
     "currencyId": "USD",
     "currencyFormat": "$",
     "isFreeShipping": true
   },
   {
     "sku": 51498472915966370,
     "title": "Dark Thug Blue-Navy T-Shirt",
     "description": "",
     "style": "Front print and paisley print",
     "price": 29.45,
     "currencyId": "USD",
     "currencyFormat": "$",
     "isFreeShipping": true
   },
   {
     "sku": 10686354557628304,
     "title": "Sphynx Tie Dye Wine T-Shirt",
     "description": "GPX Poly 1",
     "style": "Front tie dye print",
     "price": 9,
     "currencyId": "USD",
     "currencyFormat": "$",
     "isFreeShipping": true
   },
   {
     "sku": 11033926921508488,
     "title": "Skuul",
     "description": "Training 2014",
     "style": "Black T-Shirt with front print",
     "price": 14,
     "currencyId": "USD",
     "currencyFormat": "$",
     "isFreeShipping": true
   },
   {
     "sku": 39876704341265610,
     "title": "Wine Skul T-Shirt",
     "description": "",
     "style": "Wine",
     "price": 13.25,
     "currencyId": "USD",
     "currencyFormat": "$",
     "isFreeShipping": true
   },
   {
     "sku": 10412368723880252,
     "title": "Short Sleeve T-Shirt",
     "description": "",
     "style": "Grey",
     "price": 75,
     "currencyId": "USD",
     "currencyFormat": "$",
     "isFreeShipping": true
   },
   {
     "sku": 8552515751438644,
     "title": "Cat Tee Black T-Shirt",
     "description": "14/15 unnumbered",
     "style": "White with black stripes",
     "price": 10.9,
     "currencyId": "USD",
     "currencyFormat": "$",
     "isFreeShipping": true
   },
   {
     "sku": 18644119330491310,
     "title": "Sphynx Tie Dye Grey T-Shirt",
     "description": "14/15 unnumbered",
     "style": "Black with white stripes",
     "price": 10.9,
     "currencyId": "USD",
     "currencyFormat": "$",
     "isFreeShipping": true
   },
   {
     "sku": 11854078013954528,
     "title": "Danger Knife Grey",
     "description": "14/15 unnumbered",
     "style": "White with black stripes",
     "price": 14.9,
     "currencyId": "USD",
     "currencyFormat": "$",
     "isFreeShipping": true
   },
   {
     "sku": 876661122392077,
     "title": "White DGK Script Tee",
     "description": "2014 unnumbered",
     "style": "Black with white stripes",
     "price": 14.9,
     "currencyId": "USD",
     "currencyFormat": "$",
     "isFreeShipping": true
   },
   {
     "sku": 9197907543445676,
     "title": "Born On The Streets",
     "description": "14/15 unnumbered - Player",
     "style": "White with black stripes",
     "price": 25.9,
     "currencyId": "USD",
     "currencyFormat": "$",
     "isFreeShipping": false
   },
   {
     "sku": 10547961582846888,
     "title": "Tso 3D Short Sleeve T-Shirt A",
     "description": "14/15 + 1st World T-Shirt",
     "style": "Black",
     "price": 10.9,
     "currencyId": "USD",
     "currencyFormat": "$",
     "isFreeShipping": false
   },
   {
     "sku": 6090484789343891,
     "title": "Man Tie Dye Cinza Grey T-Shirt",
     "description": "Goalkeeper 13/14",
     "style": "White",
     "price": 49.9,
     "currencyId": "USD",
     "currencyFormat": "$",
     "isFreeShipping": true
   },
   {
     "sku": 18532669286405344,
     "title": "Crazy Monkey Black T-Shirt",
     "description": "1977 Child",
     "style": "Black with white stripes",
     "price": 22.5,
     "currencyId": "USD",
     "currencyFormat": "$",
     "isFreeShipping": true
   },
   {
     "sku": 5619496040738316,
     "title": "Release 3D Black T-Shirt",
     "description": "",
     "style": "Dark blue",
     "price": 18.7,
     "currencyId": "USD",
     "currencyFormat": "$",
     "isFreeShipping": false
   },
   {
     "sku": 11600983276356164,
     "title": "Crazy Monkey Grey",
     "description": "",
     "style": "",
     "price": 134.9,
     "currencyId": "USD",
     "currencyFormat": "$",
     "isFreeShipping": true
   },
   {
     "sku": 27250082398145996,
     "title": "On The Streets Black T-Shirt",
     "description": "",
     "style": "",
     "price": 49,
     "currencyId": "USD",
     "currencyFormat": "$",
     "isFreeShipping": true
   }]
};

const Banner = ({title}) => (
  <h1>{ title }</h1>
);



const ProductList = ({products}) => (
  <ul>
    { products.map(product => <Product product= {product} />)}
  </ul>
);

const Product = ({ product }) => (
  <li>{product.title}</li>
);


const App = () => (
  <div>
    <Banner title={ products.title} />
    <ProductList products = {products.products}/>
  </div>
);



export default App;
