import APP from '../constants/app.constants'

const initialState = { 
    isAppBlocked: false,
    isLoading: true, 
    anyError: false,
    error: { title: '', message: ''}
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case APP.BLOCK_APP:
            return { ...state, isAppBlocked: true }

        case APP.UNBLOCK_APP:
            return { ...state, isAppBlocked: false }

        case APP.SHOW_LOADING:
            return { ...state, isLoading: true }

        case APP.HIDE_LOADING:
            return { ...state, isLoading: false }

        case APP.RESET_ERROR:
            return { ...state, anyError: false }

        case APP.DISPLAY_ERROR:
            return { ...state, anyError: true, error: { title: action.title, message: action.message }}
            
        default:
            return state;
    }
}

export default appReducer