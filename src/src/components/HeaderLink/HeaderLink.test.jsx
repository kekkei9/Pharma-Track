import { render, screen } from '@testing-library/react'
import HeaderLink from './HeaderLink'
import '@testing-library/jest-dom'

describe('<HeaderLink />', () => {
  it('renders a heading', () => {
    render(<HeaderLink />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})