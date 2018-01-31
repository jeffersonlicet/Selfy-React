
import auth from '../services/auth'
import AUTH from '../constants/auth.constants'
import { resetError, displayError, unBlockApp, hideLoading } from './app.actions'
import { history } from '../helpers/history';

export function login(username, password) {
   return dispatch => {       
        auth.login(username, password)
        .then(
            user => {
                dispatch(hideLoading())
                dispatch(unBlockApp())
                dispatch(success(user))
                history.push('/');
            },

            error => {
                dispatch(hideLoading())
                dispatch(unBlockApp())
                dispatch(resetError())
                dispatch(displayError({title: 'Error', message: error}))
            }
        ); 
    }

    function success(_user) { return {type: AUTH.LOGIN_SUCCESS, user: _user}}
}

export function logout()
{
    return {}
}

