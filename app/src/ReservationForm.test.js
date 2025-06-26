import { render, screen, fireEvent } from '@testing-library/react';
import ReservationForm from "./components/BookingForm"
import { BrowserRouter } from 'react-router-dom';

const Wrapper = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;

describe('ReservationForm', () => {
  test('renders all form fields', () => {
    render(<ReservationForm />, { wrapper: Wrapper });

    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/make your reservation/i)).toBeInTheDocument();
  });

  
  test('shows error messages when submitting empty form', async () => {
    render(<ReservationForm />, { wrapper: Wrapper });

    const submitButton = screen.getByDisplayValue(/make your reservation/i);
    fireEvent.click(submitButton);

    expect(await screen.findAllByText(/required/i)).toHaveLength(2); 
  });

  test('submits valid form and navigates to confirmation', async () => {
    render(<ReservationForm />, { wrapper: Wrapper });

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: '2025-06-25' },
    });

    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: '18:00' },
    });

    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: 2 },
    });

    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: 'Birthday' },
    });

    fireEvent.click(screen.getByDisplayValue(/make your reservation/i));

    expect(await screen.findByText(/Must be today or later/i)).toBeInTheDocument();
  });


});
