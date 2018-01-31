import AUTH from '../constants/auth.constants'
import cookie from 'react-cookies'

let user = cookie.load('user')
const initialState = user ? {loggedIn: true, user} : {loggedIn: false}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case AUTH.LOGIN_SUCCESS:
            return { ...state, loggedIn: true, user : action.user}

        default:
            return state
    }
}

export default authReducer