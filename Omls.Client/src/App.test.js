import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Literature Surveillance card', () => {
  render(<App />);
  const textElement = screen.getByText(/Literature Surveillance/i);
  expect(textElement).toBeInTheDocument();
});
