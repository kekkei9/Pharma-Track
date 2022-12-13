import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import HomePage from '../pages/HomePage/HomePage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import RolePage from '../pages/RolePage/RolePage'
import LoginPage from '../pages/LoginPage/LoginPage'
import BookApPage from '../pages/BookApPage/BookApPage'
import BookApPage2 from '../pages/BookApPage2/BookApPage2'
import BookApPage3 from '../pages/BookApPage3/BookApPage3'

import App from '../App'
import PATH from './routerPath/publicPath'
import Header from '../components/Header/Header'
import OpenDoctorCard from '../components/OpenDoctorCard/OpenDoctorCard'

const AppRouter = () => (
  <Routes>
    <Route path='/:page' element={<HomePage />}></Route>
    <Route exact path='/' element={<HomePage />}></Route>
    
    <Route exact path="*" element={<ErrorPage code={404} />} />
    <Route exact path={PATH.HOME_PAGE_PATH} element={<HomePage />} />
    <Route exact path={PATH.SIGN_UP_PATH} element={<SignUpPage />} />
    <Route exact path={PATH.ROLE_PICK_PATH} element={<RolePage />} />
    <Route exact path={PATH.LOGIN_PATH} element={<LoginPage />} />
    
    <Route exact path={PATH.BOOK_AP_PATH_STEP1} element={<BookApPage />} />
    <Route exact path={PATH.BOOK_AP_PATH_STEP2} element={<BookApPage2 />} />
    <Route exact path={PATH.BOOK_AP_PATH_STEP3} element={<BookApPage3 />} />

    <Route exact path={PATH.OPEN_DOCTOR_PATH} element={<OpenDoctorCard />} />

    {/* for production deployment */}
    <Route path="/index.html" element={<Navigate to={PATH.HOME_PAGE_PATH} />} />
  </Routes>
)

export default AppRouter
