import { render, screen } from '@testing-library/react'
import HomePageReason2 from './HomePageReason2'
import '@testing-library/jest-dom'

describe('<HomePageReason2 />', () => {
  it('renders a heading', () => {
    render(<HomePageReason2 />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})