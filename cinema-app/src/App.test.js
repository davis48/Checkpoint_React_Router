// Import necessary modules and components
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

// Define a test case
test('renders learn react link', () => {
  // Render the App component within a MemoryRouter
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  
  // Find the element with the text "Movie App"
  const linkElement = screen.getByText(/Movie App/i);
  
  // Assert that the element is in the document
  expect(linkElement).toBeInTheDocument();
});
