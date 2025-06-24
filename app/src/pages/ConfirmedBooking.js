import { useLocation } from 'react-router-dom';

function ConfirmedBooking() {
  const location = useLocation();
  const { date, time, guests, occasion } = location.state || {};

  if (!date || !time || !guests || !occasion) {
    return <p>No booking data found. Please make a reservation.</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>✅ Reservation Confirmed!</h2>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Time:</strong> {time}</p>
      <p><strong>Guests:</strong> {guests}</p>
      <p><strong>Occasion:</strong> {occasion}</p>
    </div>
  );
}

export default ConfirmedBooking;
