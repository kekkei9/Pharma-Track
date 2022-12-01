import { render, screen } from '@testing-library/react'
import BookApBox from './BookApBox'
import '@testing-library/jest-dom'

describe('<BookApBox />', () => {
  it('renders a heading', () => {
    render(<BookApBox />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})