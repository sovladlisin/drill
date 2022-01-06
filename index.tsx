import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './src/App'

//css
import './src/static/css/fixer.css'
import './src/static/css/header.css'
import './src/static/css/home.css'
import './src/static/css/about.css'
import './src/static/css/service.css'
import './src/static/css/service-window.css'

import '@fortawesome/fontawesome-free/css/all.min.css';



import { persistStore } from 'redux-persist'
import store from './src/store'
import { PersistGate } from 'redux-persist/integration/react'

const persistor = persistStore(store);


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
    , document.querySelector('#root')
)

