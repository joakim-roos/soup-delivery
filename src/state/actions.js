import * as ACTION_TYPE from './action_types'

export const increment_custom = (payload) => {
  return {
    type: ACTION_TYPE.INCREMENT_CUSTOM,
    payload: payload,
  }
}

export const decrement_custom = (payload) => {
  return {
    type: ACTION_TYPE.DECREMENT_CUSTOM,
    payload: payload.id
  }
}

export const add_extra = (payload) => {
  return {
    type: ACTION_TYPE.ADD_EXTRA,
    payload: payload
  }
}

export const remove_extra = (payload) => {
  return {
    type: ACTION_TYPE.REMOVE_EXTRA,
    payload: payload.id
  }
}

export const update_name = (payload) => {
  return {
    type: ACTION_TYPE.UPDATE_NAME,
    payload: payload
  }
}

export const increment_amount = (payload) => {

  return {
    type: ACTION_TYPE.INCREMENT_AMOUNT,
    payload: payload,
  }
}

export const decrement_amount = (payload) => {
  return {
    type: ACTION_TYPE.DECREMENT_AMOUNT,
    payload: payload - 1,
  }
}

export const increment_button = () => {
  return {
    type: ACTION_TYPE.INCREMENT_BUTTON
  }
}

export const decrement_button = () => {
  return {
    type: ACTION_TYPE.DECREMENT_BUTTON
  }
}

export const set_base_price = (payload) => {
  return {
    type: ACTION_TYPE.SET_BASE_PRICE,
    payload: payload
  }
}

export const update_price = (payload) => {
  return {
    type: ACTION_TYPE.UPDATE_PRICE,
    payload: payload
  }
}





