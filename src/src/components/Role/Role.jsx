import React from 'react'
import './Role.scss'
import { Card } from 'antd';

const { Meta } = Card;

const Role = (props) => {
  return <div className="Role tw-flex tw-flex-row focus:ring focus:ring-violet-300">
    <div>
  <Card
    hoverable
    cover={<img alt="role" src='assets/host.png' />}
  >
    <Meta title="Chủ Phòng Khám" />
  </Card>
  </div>

  <div>
  <Card
    hoverable
    cover={<img alt="role" src='assets/staff.png' />}
  >
    <Meta title="Nhân Viên" />
  </Card>
  </div>

  <div className='user'>
  <Card
    hoverable
    cover={<img alt="role" src='assets/user.png' />}
  >
    <Meta title="Người Dùng" />
  </Card>
  </div>
  </div>
}

export default Role
