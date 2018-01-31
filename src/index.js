import React from 'react'
import reducer from './app/reducers'
import registerServiceWorker from './registerServiceWorker'

import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import App from './app/components/App/app.page'
import APP from './app/constants/app.constants'
const generateMiddleware = applyMiddleware(thunk)(createStore)
const store = generateMiddleware(reducer)

render(<Provider store={store}><App /></Provider>, document.getElementById(APP.CONTAINER_ID))
registerServiceWorker()