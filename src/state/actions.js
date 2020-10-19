import * as ACTION_TYPE from './action_types'

export const increment_custom = (payload, count) => {

  return {
    type: ACTION_TYPE.INCREMENT_CUSTOM,
    payload: payload,
    count: count
  }
}

export const decrement_custom = (payload, count) => {
  return {
    type: ACTION_TYPE.DECREMENT_CUSTOM,
    payload: payload.id,
    count: count
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

export const set_base_price = (payload) => {
  return {
    type: ACTION_TYPE.SET_BASE_PRICE,
    payload: payload
  }
}

export const set_base_custom = (payload) => {
  return {
    type: ACTION_TYPE.SET_BASE_CUSTOM,
    payload: payload
  }
}

export const update_price = (payload) => {
  return {
    type: ACTION_TYPE.UPDATE_PRICE,
    payload: payload
  }
}

export const add_to_cart = (payload) => {
  console.log(payload)
  return {
    type: ACTION_TYPE.ADD_TO_CART,
    payload: payload
  }
}

export const reset_order = (payload) => {
  return {
    type: ACTION_TYPE.RESET_ORDER,
    payload: payload
  }
}

export const total_price = (payload) => {
  return {
    type: ACTION_TYPE.TOTAL_PRICE,
    payload: payload
  }
}

export const set_delivery_option = (payload, price) => {
  return {
    type: ACTION_TYPE.SET_DELIVERY_OPTION,
    payload: payload,
    price: price
  }
}

export const set_delivery_address = (name, value) => {
  return {
    type: ACTION_TYPE.SET_DELIVERY_ADDRESS,
    name: name,
    value: value,
  }
}

export const set_image = (payload) => {
  return {
    type: ACTION_TYPE.SET_IMAGE,
    payload: payload
  }
}


/////////////
///BUTTONS///
/////////////

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

export const reset = (payload) => {
  return {
    type: ACTION_TYPE.RESET,
    payload: payload
  }
}








