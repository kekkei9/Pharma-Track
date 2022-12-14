import './styles/button.style.scss'
import './styles/table.style.scss'
import './styles/img.style.scss'

import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.scss'
import store from './redux/store'
import AppRouter from './routers/AppRouter'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback="loading">
          <Header />
            <AppRouter />
          <Footer/>
        </Suspense>
      </Provider>
    </BrowserRouter>
  )
}

export default App
