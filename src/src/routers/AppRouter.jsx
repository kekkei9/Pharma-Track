import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import HomePage from '../pages/HomePage/HomePage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import RolePage from '../pages/RolePage/RolePage'
import App from '../App'
import PATH from './routerPath/publicPath'
import Header from '../components/Header/Header'

const AppRouter = () => (
  <Routes>
    <Route path='/:page' element={<Header />}></Route>
    <Route exact path='/' element={<Header />}></Route>
    
    <Route exact path="*" element={<ErrorPage code={404} />} />
    <Route exact path={PATH.HOME_PAGE_PATH} element={<HomePage />} />
    <Route exact path={PATH.SIGN_UP_PATH} element={<SignUpPage />} />
    <Route exact path={PATH.ROLE_PICK_PATH} element={<RolePage />} />
    {/* for production deployment */}
    <Route path="/index.html" element={<Navigate to={PATH.HOME_PAGE_PATH} />} />
  </Routes>
)

export default AppRouter
