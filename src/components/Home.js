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
          
          return <NavLink className="object-image-link" to={path}>
            <img src={image} alt="Object image"></img>
          </NavLink>
        })
      }
    </div>
  );
}
