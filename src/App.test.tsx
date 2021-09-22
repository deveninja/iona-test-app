import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Root from 'Root';

test('renders learn react link', () => {
  const app = render(<Root><App /></Root>);
  expect(app).toBeTruthy();
});
