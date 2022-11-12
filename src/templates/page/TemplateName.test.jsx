/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: Component: src/pages/TemplateName/TemplateName.test.tsx

Created with;
$ npx generate-react-cli component TemplateName --type=page

*/

import React from 'react'
import TemplateName from './TemplateName'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/TemplateName'
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {},
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {},
}

describe('<TemplateName />', () => {
  it('renders a heading', () => {
    render(<TemplateName {...routeComponentPropsMock}/>)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})