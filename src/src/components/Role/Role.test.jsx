import { render, screen } from '@testing-library/react'
import Role from './Role'
import '@testing-library/jest-dom'

describe('<Role />', () => {
  it('renders a heading', () => {
    render(<Role />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})