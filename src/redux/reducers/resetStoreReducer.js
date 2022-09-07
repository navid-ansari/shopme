import { ActionTypes } from '../constants/action-types'

const INITIAL_STATE = {
  allProducts: { products: [] },
  product: {},
  favorites: [],
  cart: []
}
export const cartReducer = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case ActionTypes.RESET_STORE:
      return INITIAL_STATE
    default:
      return state
  }
}
