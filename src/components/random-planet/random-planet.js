import React, { Component } from "react";
import "./random-planet.css";
import Spinner from "../spinner";
import SwapiService from "../../services/swapi-service";
import ErrorIndicator from "../error-indicator/error-indicator.js";
export default class RandomPlanet extends Component {
  swapiService = new SwapiService();
  state = {
    planet: {},
    loading: true,
    error: false,
  };
  constructor() {
    super();
    this.updetePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };
  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };
  updetePlanet() {
    // const id = Math.floor(Math.random() * 25 + 2);
    const id = 1200;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }
  render() {
    const { planet: planet, loading, error } = this.state;
    const hasData = !(loading || error);
    const errorMassage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {errorMassage}
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <React.Fragment>
      <img
        className="planet-images jambotron rounded"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      />
      <div className="card-body text-white ">
        <h4>{name} </h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population </span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period </span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter </span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
