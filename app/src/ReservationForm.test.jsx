import { render, screen, fireEvent } from '@testing-library/react';
import ReservationForm from './ReservationForm';
import { BrowserRouter } from 'react-router-dom';

const Wrapper = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;

describe('ReservationForm', () => {
  test('renders all form fields', () => {
    render(<ReservationForm />, { wrapper: Wrapper });

    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /make your reservation/i })).toBeInTheDocument();
  });

  test('shows error messages when submitting empty form', async () => {
    render(<ReservationForm />, { wrapper: Wrapper });

    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
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

    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

    expect(await screen.findByText(/confirmed/i)).toBeInTheDocument();
  });
});
