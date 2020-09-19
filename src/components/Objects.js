import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useLocation,
  NavLink
} from "react-router-dom";

import objectsData from '../data/objects.json'

import './Objects.css'

export default function Objects() {

  const itemsMap = {}

  objectsData.forEach((item, index) => {
    itemsMap[item.name] = index
  })

  const history = useHistory()
  const location = useLocation();

  if (location.pathname === '/objects') {
    history.push(`/objects/${objectsData[0].name}`)
  }

  function getNext(index) {
    const toIndex = index === objectsData.length - 1 ? 0 : index + 1;
    return `/objects/${objectsData[toIndex].name}`;
  }

  function getPrev(index) {
    const toIndex = index === 0 ? objectsData.length - 1 : index - 1;
    return `/objects/${objectsData[toIndex].name}`;
  }

  return (
    <div className="objects-container">
      <Router>
        <Switch>
          {
            objectsData.map((data, index) => {
              const image = `/images/objects/${data.image}`
              const path = `/objects/${data.name}`
              return <Route key={data.name} path={path}>
                <div className="object-container">
                  <div className="object-data">
                    <p className="object-price">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data.price)}</p>
                    <ul className="dashed">
                      {
                        data.details.map(detail => {
                          return <li key={detail}>{detail}</li>
                        })
                      }
                    </ul>
                  </div>
                  <div className="images-container">
                    <NavLink className="arrow-link" to={getPrev(index)}>&#x25b2;</NavLink>
                    <img src={image} alt="Object image"></img>
                    <NavLink className="arrow-link" to={getNext(index)}>&#x25bc;</NavLink>
                  </div>
                </div>
              </Route>
            })
          }
        </Switch>
      </Router>
    </div>
  )
}
