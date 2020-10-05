import { ACTION, ACTION_TYPE } from '../state'
import { findIndexInArray, filterOutByIndex, filterOutByValue } from '../helpers'

const orderReducer = (state, action) => {
  let arr;
  switch (action.type) {
    case ACTION_TYPE.INCREMENT_CUSTOM:
      return {
        ...state,
        order: {
          ...state.order,
          custom: [
            ...state.order.custom,
            action.payload
          ]
        }
      }

    case ACTION_TYPE.DECREMENT_CUSTOM:
      let index = findIndexInArray(state.order.custom, action.payload)
      arr = filterOutByIndex(state.order.custom, index)
      return {
        ...state,
        order: {
          ...state.order,
          custom: [
            ...arr
          ]
        }
      }

    case ACTION_TYPE.ADD_EXTRA:
      return {
        ...state,
        order: {
          ...state.order,
          extras: [
            ...state.order.extras,
            action.payload
          ]
        }
      }

    case ACTION_TYPE.REMOVE_EXTRA:
      arr = filterOutByValue(state.order.extras, action.payload)
      return {
        ...state,
        order: {
          ...state.order,
          extras: [
            ...arr
          ]
        }
      }

    case ACTION_TYPE.UPDATE_NAME:
      return {
        ...state,
        order: {
          ...state.order,
          name: action.payload
        }
      }

    case ACTION_TYPE.UPDATE_PRICE:
      return {
        ...state,
        order: {
          ...state.order,
          price: action.payload
        }
      }

    case ACTION_TYPE.INCREMENT_AMOUNT:
      return {
        ...state,
        order: {
          ...state.order,
          amount: action.payload + 1
        }
      }

    case ACTION_TYPE.DECREMENT_AMOUNT:
      return {
        ...state,
        order: {
          ...state.order,
          amount: action.payload
        }
      }

    case ACTION_TYPE.SET_BASE_PRICE:
      return {
        ...state,
        order: {
          ...state.order,
          base_price: action.payload
        }
      }

    case ACTION_TYPE.ADD_TO_CART:
      return {
        ...state,
        cart: [
          ...state.cart,
          action.payload
        ]
      }

    case ACTION_TYPE.RESET_ORDER:
      return {
        ...state,
        order: action.payload
      }

    default:
      throw new Error('Something went wrong!')
  }
}

export default orderReducer