/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: Component: src/pages/HomePage/HomePage.test.tsx

Created with;
$ npx generate-react-cli component HomePage --type=page

*/

import React from 'react'
import HomePage from './HomePage'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/HomePage'
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {},
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {},
}

describe('<HomePage />', () => {
  it('renders a heading', () => {
    render(<HomePage {...routeComponentPropsMock}/>)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})