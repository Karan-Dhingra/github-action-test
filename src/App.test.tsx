import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  test('renders headings and logos', () => {
    render(<App />)
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument()
    expect(screen.getByAltText(/Vite logo/i)).toBeInTheDocument()
    expect(screen.getByAltText(/React logo/i)).toBeInTheDocument()
  })

  test('increments count when button clicked', async () => {
    render(<App />)
    const btn = screen.getByRole('button', { name: /count is 1/i })
    await userEvent.click(btn)
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()
  })
})
    