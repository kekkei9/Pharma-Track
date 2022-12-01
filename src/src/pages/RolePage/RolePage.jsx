import React from 'react'
import { useNavigate } from 'react-router-dom'
import RoleHeader from '../../components/RoleHeader/RoleHeader'
import RoleButton from '../../components/RoleButton/RoleButton'
import RoleCardList from '../../components/RoleCardList/RoleCardList'
import './RolePage.scss'

const RolePage = (props) => {
  const navigate = useNavigate()

  return (<div className="RolePage">
    <div><RoleHeader/></div>
    <RoleCardList />
    <div><RoleButton/></div>
  </div>)  
}

export default RolePage
