import React from "react";
import "./Features.css";
import { Fade } from "react-reveal";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import TimerIcon from "@mui/icons-material/Timer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
const Features = () => {
  return (
    <section className="features-section">
      <Fade left>
        <p className="features-title">Get food fast — not fast food.</p>
        <div className="underline" />
        <p className="title-2">
          Hello, we’re Omnifood, your new premium food delivery service. We know
          you’re always busy. No time for cooking. So let us take care of that,
          we’re really good at it, we promise!
        </p>
      </Fade>
      <div className="features-container">
        <Fade up>
          <div className="feature-item">
            <AllInclusiveIcon className="icons" />
            <h3 className="feature-heading">Up to 365 days/year</h3>
            <p className="feature-description">
              Never cook again! Our subscription plans include up to 365
              days/year coverage. Order flexibly if that's your style.
            </p>
          </div>
        </Fade>
        <Fade up>
          <div className="feature-item">
            <TimerIcon className="icons" />
            <h3 className="feature-heading">Ready in 20 minutes</h3>
            <p className="feature-description">
              You're only twenty minutes away from your delicious and super
              healthy meals delivered right to your home.
            </p>
          </div>
        </Fade>
        <Fade up>
          <div className="feature-item">
            <LocalDiningIcon className="icons" />
            <h3 className="feature-heading">100% organic</h3>
            <p className="feature-description">
              All our vegetables are fresh, organic, and local. Animals are
              raised without added hormones or antibiotics.
            </p>
          </div>
        </Fade>
        <Fade up>
          <div className="feature-item">
            <ShoppingCartIcon className="icons" />
            <h3 className="feature-heading">Order anything</h3>
            <p className="feature-description">
              We don't limit your creativity! Order whatever you feel like from
              our menu containing over 100 delicious meals.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Features;
