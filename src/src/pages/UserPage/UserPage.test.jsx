/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: Component: src/pages/UserPage/UserPage.test.tsx

Created with;
$ npx generate-react-cli component UserPage --type=page

*/

import React from 'react'
import UserPage from './UserPage'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/UserPage'
    }
  },
  location: {},
  match: {},
}

describe('<UserPage />', () => {
  it('renders a heading', () => {
    render(<UserPage {...routeComponentPropsMock}/>)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})