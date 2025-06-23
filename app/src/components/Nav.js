import {Routes, Route, Link } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BookingPage from '../pages/BookingPage';

function Nav() {
  return (
    <>
        <nav>
            <Link to="/" className="nav-item">Homepage</Link>
            <Link to="/booking" className="nav-item">Booking</Link>
        </nav>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>

    </>
  );
};


export default Nav;