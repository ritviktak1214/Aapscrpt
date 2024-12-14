

import React from 'react';
import styles from '../components/home.module.css'

const ProductList = async () => {
  // Call to the fake API (using fakestoreapi as an example)
  const res = await fetch('https://fakestoreapi.com/products');
  
  // Check if the response is OK
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  
  // Parse the JSON data from the fake API
  const data = await res.json();

  return (
    <div  className= "container">
      <h1>Fetched Data from Fake API</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong> - ${item.price}
            <p>{item.description}</p>
            <img src={item.image} alt={item.title} width={100} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;