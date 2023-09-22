import { createStore } from 'redux'

import reducer from './reducer'

const store = createStore(reducer) //{getState, dispatch, .....}
export default store