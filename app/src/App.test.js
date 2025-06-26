import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';



test('renders about menu link', () => {
  render(<App />);
  const linkElement = screen.getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders reserve button link', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /Reserve a Table/i }));
});

