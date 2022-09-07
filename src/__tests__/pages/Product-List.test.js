import React from 'react'
import { screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'

import { renderComponent } from '../test-utils/component-renderer'

import ProductList from '../../pages/Product-List'
import Product from '../../components/Product'

// mocks
import MockedProducts from '../mocks/products'

describe('Product List page', () => {
  let mockedProducts = []
  beforeAll(() => {})
  beforeEach(() => {
    mockedProducts = MockedProducts()
  })
  afterEach(() => {})
  afterAll(() => {})
  test('Check if Product List page is rendered', () => {
    renderComponent(
      <Router>
        <ProductList />
      </Router>
    )
    expect(screen.getByTestId('gallery')).not.toBeNull()
  })

  test('Check if product list is rendered', () => {
    const mockOnClick = jest.fn()
    const productsElem = mockedProducts.map(product => (
      <Product
        key={product.id}
        product={product}
        toggleFavorite={mockOnClick}
        toggleCart={mockOnClick}
      />
    ))
    renderComponent(<Router>{productsElem}</Router>)
    //const content = screen.queryAllByTestId("content");
    //expect(content).toHaveLength(3);

    const productItems = screen.getAllByTestId('content')
    expect(productItems).toHaveLength(3)
  })
})
