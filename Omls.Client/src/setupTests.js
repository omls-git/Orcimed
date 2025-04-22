// // jest-dom adds custom jest matchers for asserting on DOM nodes.
// // allows you to do things like:
// // expect(element).toHaveTextContent(/react/i)
// // learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';
import '@testing-library/jest-dom';  // Your existing imports
import matchMediaMock from 'match-media-mock';

// Mock matchMedia for jest
matchMediaMock.useMediaQuery = jest.fn().mockImplementation((query) => ({
  matches: query.includes('max-width') ? true : false,
  media: query,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}));
