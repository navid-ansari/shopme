import React from 'react'
import { screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'

import { renderComponent } from '../test-utils/component-renderer'

import FavoritesList from '../../pages/Favorites-List'
import Favorite from '../../components/Favorite'

// mocks
import MockedFavorites from '../mocks/favorites'

describe('Product List page', () => {
  let mockedFavorites = []
  beforeAll(() => {})
  beforeEach(() => {
    mockedFavorites = MockedFavorites()
  })
  afterEach(() => {})
  afterAll(() => {})
  test('Check if page is rendered', () => {
    renderComponent(
      <Router>
        <FavoritesList />
      </Router>
    )
    expect(screen.getByTestId('favorites-page')).not.toBeNull()
  })

  test('Check if favorites list is rendered', () => {
    const favoritesElem = mockedFavorites.map(favorite => (
      <Favorite key={favorite.id} favorite={favorite} />
    ))
    renderComponent(<Router>{favoritesElem}</Router>)

    const favoriteItems = screen.getAllByTestId('product')
    expect(favoriteItems).toHaveLength(2)
  })
})
