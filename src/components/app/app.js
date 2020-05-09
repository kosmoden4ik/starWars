import React from "react";
import "./app.css";
import ItemList from "../item-list.js";
import Header from "../header.js";
import PlanetDetails from "../planet-details.js";
import RandomPlanet from "../random-planet.js";
import PersonDetails from "../person-details.js";
import StarshipDetails from "../starship-details.js";
import SwapiService from ".../swapi-services.js";
const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};
export default App;
