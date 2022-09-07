import { ActionTypes } from '../constants/action-types'

export const cartAction = product => {
  return {
    type: ActionTypes.CART,
    payload: product
  }
}
