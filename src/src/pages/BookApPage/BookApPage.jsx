import React from 'react'
import { useNavigate } from 'react-router-dom'
import './BookApPage.scss'
import BookApBox from '../../components/BookApBox/BookApBox'
import BookApNav from '../../components/BookApNav/BookApNav'


const BookApPage = (props) => {
  const navigate = useNavigate()

  return <div className="BookApPage">
    <BookApNav/>
    <BookApBox/>
  </div>
}

export default BookApPage
