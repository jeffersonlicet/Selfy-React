import APP from '../constants/app.constants'

export function showLoading() {
    return { type: APP.SHOW_LOADING }
}

export function hideLoading() {
    return { type: APP.HIDE_LOADING }
}

export function resetError() {
    return { type: APP.RESET_ERROR }
}

export function displayError(error) {
    return { type: APP.DISPLAY_ERROR , message: error.message, title: error.title}
}

export function blockApp() {
    return { type: APP.BLOCK_APP }
}

export function unBlockApp() {
    return { type: APP.UNBLOCK_APP }
}