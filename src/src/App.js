import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.scss'
import store from './redux/store'
import AppRouter from './routers/AppRouter'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback="loading">
          <AppRouter />
        </Suspense>
      </Provider>
    </BrowserRouter>
  )
}

export default App
