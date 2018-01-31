import cookie from 'react-cookies'
import appConstants from '../constants/app.constants'

const auth = {
    
    login(username, password) {
        let formData = new FormData()

        formData.append('username', username)
        formData.append('password', password)

        const requestOptions = {
            method: 'POST',
            body: formData
        }

        return fetch(appConstants.SERVICE_URL + '/user/login', requestOptions)
        .then(response => {
            if(!response.ok)
                return Promise.reject(response.statusText)

            return response.json()
        })
        .then(response => {
            
            if(response.status) {
                cookie.save('user', response.user)
                cookie.save('loggedIn', true)
                return response.user
            }
            
            return Promise.reject(response.report);
        })
    },

    loggedIn() {
        return cookie.load('loggedIn')
    }
}

export default auth