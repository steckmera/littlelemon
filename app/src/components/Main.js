import {Routes, Route} from 'react-router-dom';

import BookingPage from "../pages/BookingPage";
import ConfirmedBooking from "../pages/ConfirmedBooking";
import HomePage from "../pages/HomePage";
import About from '../pages/About';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
}

export default Main;