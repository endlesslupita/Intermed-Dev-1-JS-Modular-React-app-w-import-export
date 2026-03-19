import { render, screen } from '@testing-library/react';
import App from './App';
import { Button } from './components/SharedComponents';

test('renders header link', () => {
  render(<App />);
  const linkElement = screen.getByText(/the lean startup approach/i);
  expect(linkElement).toBeInTheDocument();
});

test('Business Model Generation button links to Bookshop.org', () => {
  render(<App />);
  const link = screen.getByRole('link', { name: /business model generation/i });
  expect(link).toHaveAttribute('href', 'https://bookshop.org/p/books/business-model-generation-a-handbook-for-visionaries-game-changers-and-challengers-alexander-osterwalder/e13eb2af0f86428d');
});

test('Value Proposition Design button links to Bookshop.org', () => {
  render(<App />);
  const link = screen.getByRole('link', { name: /value proposition design/i });
  expect(link).toHaveAttribute('href', 'https://bookshop.org/p/books/value-proposition-design-how-to-create-products-and-services-customers-want-alan-smith/e618d90be7e971f5');
});

test('Testing Business Ideas button links to Bookshop.org', () => {
  render(<App />);
  const link = screen.getByRole('link', { name: /testing business ideas/i });
  expect(link).toHaveAttribute('href', 'https://bookshop.org/p/books/testing-business-ideas-a-field-guide-for-rapid-experimentation-alexander-osterwalder/bca7f76d7c635ed5');
});

test('Button with no href renders without a destination', () => {
  render(<Button label="Click me" />);
  const element = screen.getByText(/click me/i);
  expect(element).not.toHaveAttribute('href');
});

test('Button with empty string for href', () => {
  render(<Button label="Click me" href="" />);
  const element = screen.getByText(/click me/i);
  expect(element).toHaveAttribute('href', '');
});

test('Button with no label renders empty', () => {
  render(<Button />);
  const link = screen.queryByRole('link');
  expect(link).not.toBeInTheDocument();
});
