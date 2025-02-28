import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from '../src/components/Card'


test('Renders the Card component successfully', () => {
  // Arrange
  const component = render(
    <Card />
  )

  // Act
  // N/A

  // Assert
  expect(component).toBeTruthy();
  expect(screen.getByRole('base-card')).toBeInTheDocument();
})