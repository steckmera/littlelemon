import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-container" role="navigation" aria-label="About section information">
      <div className="about-content">
        <div className="about-text">
          <h1>About Little Lemon</h1>
          <p>
            Little Lemon is a family-owned Mediterranean restaurant located in the heart of Chicago.
            Founded by brothers Mario and Adrian, the restaurant combines traditional recipes with a modern twist.
          </p>
          <p>
            Our mission is to provide our guests with a warm and welcoming experience, offering delicious food made from the freshest ingredients.
            Whether you're stopping by for lunch or planning a special dinner, Little Lemon is the perfect place to enjoy authentic Mediterranean cuisine.
          </p>
          <p>
            We take pride in our hospitality, homemade dishes, and cozy atmosphere that makes every meal feel like you're dining with family.
          </p>
        </div>
        <div className="about-image">
          <img src="about-team.jpg" alt="Little Lemon team in the kitchen" aria-label="Little Lemon team in the kitchen" />
        </div>
      </div>
    </section>
  );
}

export default About;
