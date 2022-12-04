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
          <div className='tw-mt-32 tw-pb-40'>
            <AppRouter />
          </div>
          <Footer/>
        </Suspense>
      </Provider>
    </BrowserRouter>
  )
}

export default App
