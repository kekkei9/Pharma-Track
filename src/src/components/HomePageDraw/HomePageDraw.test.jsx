import { render, screen } from '@testing-library/react'
import HomePageDraw from './HomePageDraw'
import '@testing-library/jest-dom'

describe('<HomePageDraw />', () => {
  it('renders a heading', () => {
    render(<HomePageDraw />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})