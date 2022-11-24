/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: Component: src/pages/BookApPage/BookApPage.test.tsx

Created with;
$ npx generate-react-cli component BookApPage --type=page

*/

import React from 'react'
import BookApPage from './BookApPage'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/BookApPage'
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {},
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {},
}

describe('<BookApPage />', () => {
  it('renders a heading', () => {
    render(<BookApPage {...routeComponentPropsMock}/>)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})