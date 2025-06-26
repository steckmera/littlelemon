import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Asegúrate de crear el archivo CSS si no usas Tailwind/Chakra

function HomePage() {
  const navigate = useNavigate();

  const handleReserve = () => {
    navigate('/booking');
  };

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, located on Maldove Street in Chicago, Illinois.
            We focus on traditional recipes served with a modern twist.
          </p>
          <button className="reserve-btn" onClick={handleReserve}>
            Reserve a Table
          </button>
        </div>
        <div className="hero-image">
          <img src="salad.jpg" alt="Mediterranean dish" />
        </div>
      </section>

      <section className="cards-section">
        <h3>This Week’s Specials</h3>
        <div className="card-grid">
          <div className="card" role="article" aria-labelledby="bruschetta-title">
            <img src="bruschetta.jpg" alt="Bruschetta" />
            <div className="card-content">
              <h4>Bruschetta</h4>
              <p>Grilled bread with garlic, tomatoes, and basil.</p>
            </div>
          </div>
          <div className="card" role="article" aria-labelledby="lemon-dessert-title">
            <img src="lemon-dessert.jpg" alt="Lemon dessert" />
            <div className="card-content">
              <h4>Lemon Dessert</h4>
              <p>Light and creamy lemon cake served chilled.</p>
            </div>
          </div>
          <div className="card" role="article" aria-labelledby="greek-salad-title">
            <img src="greek-salad.jpg" alt="Greek Salad" />
            <div className="card-content">
              <h4>Greek Salad</h4>
              <p>Fresh lettuce, olives, feta, cucumber and tomatoes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
