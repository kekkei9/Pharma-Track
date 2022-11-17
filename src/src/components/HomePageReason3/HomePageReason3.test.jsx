import { render, screen } from '@testing-library/react'
import HomePageReason3 from './HomePageReason3'
import '@testing-library/jest-dom'

describe('<HomePageReason3 />', () => {
  it('renders a heading', () => {
    render(<HomePageReason3 />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})