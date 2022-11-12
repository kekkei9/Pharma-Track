import { render, screen } from '@testing-library/react'
import TestCardList from './TestCardList'
import '@testing-library/jest-dom'

describe('<TestCardList />', () => {
  it('renders a heading', () => {
    render(<TestCardList />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})