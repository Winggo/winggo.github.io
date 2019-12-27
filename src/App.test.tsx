import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', () => {
  const { getAllByText } = render(<BrowserRouter><App /></ BrowserRouter>);
  const linkElements = getAllByText(/Winggo Tse/i);
  linkElements.forEach((element) => {
    expect(element).toBeInTheDocument();
  })
});
