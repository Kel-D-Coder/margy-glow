import React from "react";
import "../styles/about.css";
import landingPic from "../images/about-pic.jpg";
import logo from "../images/logo.png";

function About() {
  return (
    <React.Fragment>
      <div className="about">
        <div className="about__overlay"></div>
        <h1>About Us</h1>
        <img src={landingPic} alt="" />
      </div>

      <div className="about__text">
        <h2>Our Story</h2>
        <div className="about__textAndPic">
          <p>
            The brand Margy glow was founded by Chinyere Margareth Okeke. I
            battled with several skin concerns like hyperpigmentation; sunburn,
            dark under arm, uneven skin tone, pimple/acne break out. This made
            me very insecure and I lacked confidence in my self, always wanting
            to wear makeup before stepping out just so I could feel like my face
            was smooth and my skin looked good, and truth?? I wasn’t really a
            make up person. I used different products and I’d either end up with
            skin irritation or my skin would become more uneven as some parts
            would become way lighter than other part. I was so sad, but what
            this made me focus on, was trying to fix my skin by my self and
            using more natural and organically sourced ingredients. I began
            researching, went for trainings (first, second and third), I was
            hellbent on fixing my skin and then extended to help other who
            suffered like me, in boosting their confidence, what I like to call
            skinfidence. Now I had to deal with different people as I expanded,
            which meant dealing with different skin types and as I worked on
            peoples skin and saw how excited they were to be proud and confident
            in their own skin, I couldn’t stop but dig in more, into the
            skincare world and it has been positive. Over the years, we have
            been able to help hundreds of persons; young and old; women, men,
            teens, regain their confidence, smiles while looking at their skins
            in the mirror. Till date, we continue to bring effective, safe and
            affordable natural skincare products to you.
          </p>
          <img src={logo} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;