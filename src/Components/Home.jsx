import React from "react";
import Header from "./Header";
import "./Home.css";
import { Fade } from "react-reveal";
function Home() {
  return (
    <div className="home">
      <Header />

      <div className="overlay" />
      <Fade left>
        <div className="main-content">
          <p className="tagline">
            GOODBYE JUNK FOOD.
            <br />
            HELLO SUPER HEALTHY MEALS.
          </p>
          <div className="buttons-container">
            <button className="action-button-1" id="action-button-1">
              I'm Hungry
            </button>
            <button className="action-button-2 " id="action-button-2">
              Show Me More
            </button>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Home;
