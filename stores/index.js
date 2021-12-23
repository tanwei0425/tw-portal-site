import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
const initializeStore = (initialState = {}) => {
    const middleware = process.env.NEXT_PUBLIC_DOMAIN_ENV === 'development' ? composeWithDevTools(applyMiddleware(thunkMiddleware)) : applyMiddleware(thunkMiddleware)
    return createStore(reducers, initialState, middleware)
}
export default initializeStore