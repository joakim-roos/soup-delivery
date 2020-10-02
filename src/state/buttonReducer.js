import { ACTION_TYPE } from '../state'

export function initState(initialCount) {
  return { count: initialCount }
}

const buttonReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.INCREMENT_BUTTON:
      return { count: state.count + 1 };
    case ACTION_TYPE.DECREMENT_BUTTON:
      return { count: state.count - 1 };
    case ACTION_TYPE.RESET:
      return initState(action.payload)
    default:
      throw new Error('Something went wrong')
  }
}

export default buttonReducer