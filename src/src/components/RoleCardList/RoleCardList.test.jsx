import { render, screen } from '@testing-library/react'
import RoleCardList from './RoleCardList'
import '@testing-library/jest-dom'

describe('<RoleCardList />', () => {
  it('renders a heading', () => {
    render(<RoleCardList />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})