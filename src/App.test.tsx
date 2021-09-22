import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Root from 'Root';

test('renders learn react link', () => {
  render(<Root><App /></Root>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
