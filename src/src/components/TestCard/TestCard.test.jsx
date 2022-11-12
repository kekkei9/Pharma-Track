import { render, screen } from '@testing-library/react'
import TestCard from './TestCard'
import '@testing-library/jest-dom'

describe('<TestCard />', () => {
  it('renders a heading', () => {
    render(<TestCard />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})