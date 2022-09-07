import React from 'react'
import { screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'

import { renderComponent } from '../test-utils/component-renderer'

import Stars from '../../components/Stars'
import Star from '../../components/Star'

// mocks
import MockedProduct from '../mocks/product'

describe('Stars component', () => {
  let mockedProduct = {}
  beforeAll(() => {})
  beforeEach(() => {
    mockedProduct = MockedProduct()
  })
  afterEach(() => {})
  afterAll(() => {})
  test('Should render component', async () => {
    renderComponent(
      <Router>
        <Stars />
      </Router>
    )
    expect(screen.getByTestId('stars')).not.toBeNull()
  })

  test('should render stars', async () => {
    const starsArray = [0, 1, 2, 3]
    const starsElem = starsArray.map(star => <Star key={star} />)
    renderComponent(<Router>{starsElem}</Router>)
    const stars = screen.queryAllByTestId('star')
    expect(stars).toHaveLength(4)
  })
})
