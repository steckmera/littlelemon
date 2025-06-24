import {Routes, Route, Link } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BookingPage from '../pages/BookingPage';
import ConfirmedBooking from '../pages/ConfirmedBooking';

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
            <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>

    </>
  );
};


export default Nav;