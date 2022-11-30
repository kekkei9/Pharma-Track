import React from 'react'
import { useNavigate } from 'react-router-dom'
import Role from '../../components/Role/Role'
import RoleHeader from '../../components/RoleHeader/RoleHeader'
import RoleButton from '../../components/RoleButton/RoleButton'
import './RolePage.scss'

const RolePage = (props) => {
  const navigate = useNavigate()

  return (<div className="RolePage">
    <div><RoleHeader/></div>
    <div> <Role/></div>
    <div><RoleButton/></div>
  </div>)  
}

export default RolePage
