import React from "react";
import "./app.css";
import ItemList from "../item-list/";
import Header from "..//header/";
import PlanetDetails from "../planet-details/";
import RandomPlanet from "../random-planet/";
import PersonDetails from "../person-details/";
import StarshipDetail from "../starship-details/";
import SwapiService from "../../services/swapi-service.js";
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
