import { ACTION_TYPE } from '../state'

const buttonReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.INCREMENT_BUTTON:
      return { count: state.count + 1 };
    case ACTION_TYPE.DECREMENT_BUTTON:
      return { count: state.count - 1 };
    default:
      throw new Error('Something went wrong')
  }
}

export default buttonReducer