/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: Component: src/pages/HostPage/HostPage.test.tsx

Created with;
$ npx generate-react-cli component HostPage --type=page

*/

import React from 'react'
import HostPage from './HostPage'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/HostPage'
    }
  },
  location: {},
  match: {},
}

describe('<HostPage />', () => {
  it('renders a heading', () => {
    render(<HostPage {...routeComponentPropsMock}/>)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})