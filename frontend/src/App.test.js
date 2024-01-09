import { render, screen } from '@testing-library/react';
import App from './App';

test('void test', () => {
  render(<App />);
  const linkElement = screen.queryByText(/randomword/i);
  expect(linkElement).not.toBeInTheDocument();
});
