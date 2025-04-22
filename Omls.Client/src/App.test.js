// App.test.js
beforeAll(() => {
  global.matchMedia = global.matchMedia || function (query) {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    };
  };
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Literature Surveillance card', () => {
  render(<App />);
  const textElement = screen.getByText(/Literature Surveillance/i);
  expect(textElement).toBeInTheDocument();
});
