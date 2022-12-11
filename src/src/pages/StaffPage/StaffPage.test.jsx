/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: Component: src/pages/StaffPage/StaffPage.test.tsx

Created with;
$ npx generate-react-cli component StaffPage --type=page

*/

import React from 'react'
import StaffPage from './StaffPage'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/StaffPage'
    }
  },
  location: {},
  match: {},
}

describe('<StaffPage />', () => {
  it('renders a heading', () => {
    render(<StaffPage {...routeComponentPropsMock}/>)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})