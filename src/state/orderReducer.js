import { ACTION, ACTION_TYPE } from '../state'
import { findIndexInArray, filterOutByIndex, filterOutByValue } from '../helpers'

const orderReducer = (state, action) => {
  let arr;
  switch (action.type) {
    case ACTION_TYPE.INCREMENT_CUSTOM:
      return {
        ...state,
        custom: [...state.custom, action.payload]
      }

    case ACTION_TYPE.DECREMENT_CUSTOM:
      let index = findIndexInArray(state.custom, action.payload)
      arr = filterOutByIndex(state.custom, index)
      return {
        ...state,
        custom: [...arr]
      }

    case ACTION_TYPE.ADD_EXTRA:
      return {
        ...state,
        extras: [...state.extras, action.payload]
      }

    case ACTION_TYPE.REMOVE_EXTRA:
      arr = filterOutByValue(state.extras, action.payload)
      return {
        ...state,
        extras: [...arr]
      }

    case ACTION_TYPE.UPDATE_NAME:
      return {
        ...state,
        name: action.payload
      }

    case ACTION_TYPE.UPDATE_PRICE:
      return {
        ...state,
        price: action.payload
      }

    case ACTION_TYPE.INCREMENT_AMOUNT:
      return {
        ...state,
        amount: action.payload + 1
      }

    case ACTION_TYPE.DECREMENT_AMOUNT:
      return {
        ...state,
        amount: action.payload
      }

    case ACTION_TYPE.SET_BASE_PRICE:
      return {
        ...state,
        base_price: action.payload
      }

    /*  case ACTION_TYPE.TOTAL_PRICE:
       return {
         ...state,
         price: action.payload
       } */

    default:
      throw new Error('Something went wrong, order reducer')
  }
}

export default orderReducer