import { render, screen } from '@testing-library/react'
import DoctorCardDetail from './DoctorCardDetail'
import '@testing-library/jest-dom'

describe('<DoctorCardDetail />', () => {
  it('renders a heading', () => {
    render(<DoctorCardDetail />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})