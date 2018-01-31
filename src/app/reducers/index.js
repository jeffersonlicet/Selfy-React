import appReducer from './app.reducer'
import authReducer from './auth.reducer'
import usersReducer from './users.reducer'
import photosReducer from './photos.reducer'

import { combineReducers } from 'redux'

const appReducers = combineReducers({
    usersReducer,
    photosReducer,
    authReducer,
    appReducer
})

export default appReducers