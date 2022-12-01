import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import HomePage from '../pages/HomePage/HomePage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import RolePage from '../pages/RolePage/RolePage'
import BookApPage from '../pages/BookApPage/BookApPage'
import App from '../App'
import PATH from './routerPath/publicPath'

const AppRouter = () => (
  <Routes>
    <Route path="*" element={<ErrorPage code={404} />} />
    <Route path={PATH.HOME_PAGE_PATH} element={<HomePage />} />
    <Route path={PATH.SIGN_UP_PATH} element={<SignUpPage />} />
    <Route path={PATH.ROLE_PICK_PATH} element={<RolePage />} />
    <Route path={PATH.BOOK_APPOINTMENT_PATH} element={<BookApPage/>} />
    {/* for production deployment */}
    <Route path="/index.html" element={<Navigate to={PATH.HOME_PAGE_PATH} />} />
  </Routes>
)

export default AppRouter
