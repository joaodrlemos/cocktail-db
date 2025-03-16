import React from "react";

const About = () => {
  return (
    <section className="section">
      <div className="about-section">
        <h2 className="section-title">About</h2>
        <p>
          CocktailDB is a simple and interactive web app that lets users explore
          and discover cocktails. You can search for drinks, view ingredients,
          and learn how to make them with easy-to-follow instructions.
        </p>
        <h3 className="features-title">Features</h3>
        <ul>
          <li>🔍 Search for cocktails by name</li>
          <li>
            📸 View drink details, including ingredients and preparation steps
          </li>
          <li>🌐 Smooth navigation between different cocktail pages</li>
          <li>📡 Live data from TheCocktailDB API</li>
        </ul>
        <p className="about-last-paragraph">
          This project is designed for cocktail lovers, home bartenders, and
          anyone curious about mixology! 🍹✨
        </p>
      </div>
    </section>
  );
};

export default About;
