import { render, screen } from '@testing-library/react'
import GoogleMapInstance from './GoogleMapInstance'
import '@testing-library/jest-dom'

describe('<GoogleMapInstance />', () => {
  it('renders a heading', () => {
    render(<GoogleMapInstance />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})