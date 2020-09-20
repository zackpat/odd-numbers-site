import React from 'react';
import {
  NavLink
} from "react-router-dom";

import objectsData from '../data/objects.json'

import './Home.css'

export default function Home() {
  return (
    <div className="home-container">
      {
        objectsData.map(data => {
          const image = `/images/objects/${data.image}`;
          const path = `/objects/${data.name}`;
          
          return <NavLink key={data.name} className="object-image-link" to={path}>
            <p className="object-price-name">{data.name}</p>
            <img className="object-image" src={image} alt={data.name}></img>
            <p className="object-price-name">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data.price)}</p>
          </NavLink>
        })
      }
    </div>
  );
}
