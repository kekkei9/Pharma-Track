import React from 'react'
import './HeaderLink.scss'
import { Link } from 'react-router-dom'


const HeaderLink = ({ page, title }) => {
  return (<div className="HeaderLink">
    <Link to={`/${page}`}>{title}</Link>
  </div>)
}

export default HeaderLink
