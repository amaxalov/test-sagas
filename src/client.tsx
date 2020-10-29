import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/view/App'
import { IAppState } from '@/types/models/app-state'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from '@/core/store'

interface MyWindow extends Window {
  APP_STATE: IAppState
}

declare let window: MyWindow

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
