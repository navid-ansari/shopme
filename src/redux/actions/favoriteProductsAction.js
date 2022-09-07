import { ActionTypes } from '../constants/action-types'

export const toggleFavoriteProduct = products => {
  return {
    type: ActionTypes.FAVOURITE_PRODUCTS,
    payload: products
  }
}
