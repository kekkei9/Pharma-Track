import React from 'react'
import { useState } from 'react'
import RoleCard from '../RoleCard/RoleCard'
import './RoleCardList.scss'


const RoleCardList = (props) => {
  const [ tab, setTab ] = useState(-1)
  
  const RoleData = [
      {
        'title': 'Chủ phòng khám',
        'imgsrc': '/assets/host.png'
      },
      {
        'title': 'Nhân viên',
        'imgsrc': '/assets/staff.png'
      },
      {
        'title': 'Người dùng',
        'imgsrc': '/assets/user.png'
      }
    ]

  return <div className="RoleCardList tw-flex tw-flex-row">
    {RoleData.map((role, index) => (<RoleCard 
                            {...role}
                            style = {tab === index ? {
                              borderColor: 'rgba(0, 121, 255, 0.5)'
                            } : {}}
                            tab = {tab}
                            setTab = {setTab}
                            index = {index} />))}
  </div>
}

export default RoleCardList
