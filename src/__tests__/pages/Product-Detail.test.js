import React from 'react'
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter, Routes, Route } from 'react-router-dom'

import { renderComponent } from '../test-utils/component-renderer'

import ProductDetail from '../../pages/Product-Detail'

// mocks
import mockedproduct from '../mocks/product'

import axios from 'axios'

jest.mock('axios')

describe('Product detail page', () => {
  let mockedProduct = {}
  beforeAll(() => {})
  beforeEach(() => {
    mockedProduct = mockedproduct()
  })
  afterEach(() => {})
  afterAll(() => {})

  /*const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
   user: userEvent.setup(),
   ...render(ui, { wrapper: BrowserRouter }),
  };
 };

 renderWithRouter(renderComponent(<ProductDetail></ProductDetail>), {
  route: "/product/:productId",
 });*/

  test('Check if Product detail page is rendered', () => {
    renderComponent(
      <MemoryRouter>
        <ProductDetail></ProductDetail>
      </MemoryRouter>
    )
    expect(screen.getByTestId('detail-page')).not.toBeNull()
    const page = screen.queryAllByTestId('detail-page')
    expect(page).toHaveLength(1)
  })

  test('Check if Product detail is fetched from api', async () => {
    const productId = 123
    renderComponent(
      <MemoryRouter initialEntries={[`/product/${productId}`]}>
        <Routes>
          <Route path="/product/:productId" element={<ProductDetail />}></Route>
        </Routes>
      </MemoryRouter>
    )

    await axios.get.mockImplementationOnce(() => Promise.resolve(mockedProduct))

    await expect(axios.get).toHaveBeenCalledWith(`https://fakestoreapi.com/products/${productId}`)
    await expect(axios.get).toHaveBeenCalledTimes(1)
  })
})
