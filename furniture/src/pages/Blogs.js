import React from 'react';
import '../index.css';

// Importing images

import img1 from './images/img1.jpeg';
import img2 from './images/img2.jpeg';
import img3 from './images/img3.jpeg';
import img4 from './images/img4.jpeg';
import img5 from './images/img5.jpeg';
import img6 from './images/img6.jpeg';
import img7 from './images/img7.jpeg';
import img8 from './images/img8.jpeg';
import img9 from './images/img9.jpeg';
import img10 from './images/img10.jpeg';

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      {/* Using dangerouslySetInnerHTML to inject the icon */}
      <p className="product-description" dangerouslySetInnerHTML={{ __html: product.description }}></p>
      <p className="product-price">${product.price.toLocaleString()}</p> {/* Formatted price */}
    </div>
  );
};

const products = [
  {
    id: 1,
    name: "Wooden Center Table",
    description: '<i class="fas fa-box"></i> Free Delivery', 
    price: 23540.00,
    image: img1,
  },
  {
    id: 2,
    name: "Wooden Chair",
    description: '<i class="fas fa-box"></i> Free Delivery', 
    price: 799.00,
    image: img2,
  },
  {
    id: 3,
    name: "Cushion Chair",
    description: '<i class="fas fa-box"></i> Free Delivery', 
    price: 546.00,
    image: img3,
  },
  {
    id: 4,
    name: "Dining Table",
    description: '<i class="fas fa-box"></i> Free Delivery', 
    price: 1999.00,
    image: img4,
  },
  {
    id: 5,
    name: "Wooden Chair",
    description: '<i class="fas fa-box"></i> Free Delivery', 
    price: 12499.99,
    image: img5,
  },
  {
    id: 6,
    name: "White Bed Cot",
    description: '<i class="fas fa-box"></i> Free Delivery', 
    price: 5000.00,
    image: img6,
  },
  {
    id: 7,
    name: "Teak Wood Kitchen",
    description: '<i class="fas fa-box"></i> Free Delivery', 
    price: 1319.00,
    image: img7,
  },
  {
    id: 8,
    name: "Wooden Shelves",
    description: '<i class="fas fa-box"></i> Free Delivery', 
    price: 3999.00,
    image: img8,
  },
  {
    id: 9,
    name: "Kitchen Store",
    description: '<i class="fas fa-box"></i> Free Delivery', 
    price: 17999.00,
    image: img9,
  },
  {
    id: 10,
    name: "Book Racks",
    description: '<i class="fas fa-box"></i> Free Delivery', 
    price: 1999.00,
    image: img10,
  },
];

const ProductsList = () => {
  return (
    <div className="products-list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
