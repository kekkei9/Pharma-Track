import { render, screen } from '@testing-library/react'
import RoleHeader from './RoleHeader'
import '@testing-library/jest-dom'

describe('<RoleHeader />', () => {
  it('renders a heading', () => {
    render(<RoleHeader />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})