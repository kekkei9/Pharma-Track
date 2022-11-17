import { render, screen } from '@testing-library/react'
import HomePageReason1 from './HomePageReason1'
import '@testing-library/jest-dom'

describe('<HomePageReason1 />', () => {
  it('renders a heading', () => {
    render(<HomePageReason1 />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})