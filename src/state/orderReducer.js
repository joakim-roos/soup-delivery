import { ACTION_TYPE } from '../state'
import { filterOutByValue } from '../helpers'

const orderReducer = (state, action) => {
    let arr;

    switch (action.type) {
        case ACTION_TYPE.INCREMENT_CUSTOM:
            arr = state.order.custom.map((item) => item.id === action.payload
                ?
                { ...item, amount: action.count + 1 }
                :
                item
            )
            return {
                ...state,
                order: {
                    ...state.order,
                    custom: [
                        ...arr,
                    ],
                }
            }

        case ACTION_TYPE.DECREMENT_CUSTOM:
            arr = state.order.custom.map((item) => item.id === action.payload
                ?
                { ...item, amount: action.count - 1 }
                :
                item
            )
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

        case ACTION_TYPE.SET_BASE_CUSTOM:
            arr = action.payload.map((item) => {
                return { ...item, amount: 0 }
            })

            return {
                ...state,
                order: {
                    ...state.order,
                    custom: [
                        ...arr
                    ]
                }
            }

        case ACTION_TYPE.ADD_TO_CART:
            console.log(action.payload)
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

        case ACTION_TYPE.TOTAL_PRICE:
            return {
                ...state,
                total_price: action.payload
            }

        case ACTION_TYPE.SET_DELIVERY_OPTION:
            return {
                ...state,
                delivery: {
                    ...state.delivery,
                    option: action.payload,
                    price: action.price
                }
            }

        case ACTION_TYPE.SET_DELIVERY_ADDRESS:
            return {
                ...state,
                delivery: {
                    ...state.delivery,
                    address: {
                        ...state.delivery.address,
                        [action.name]: action.value
                    }
                }
            }

        case ACTION_TYPE.SET_IMAGE:
            console.log(action.payload)
            return {
                ...state,
                order: {
                    ...state.order,
                    image_url: action.payload
                }
            }

        default:
            throw new Error('Something went wrong!')
    }
}

export default orderReducer