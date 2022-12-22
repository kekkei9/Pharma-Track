import React from 'react'
import './BookApTab3.scss'
import { Button } from 'antd';

import { useNavigate } from "react-router-dom";


const BookApTab3 = (props) => {
  const navigate = useNavigate();
  return <div className="BookApTab3">
    <div className = 'tw-flex tw-mt-10 tw-max-w-4xl tw-mx-auto tw-justify-between'>
      <div className = 'tw-border-2 tw-px-20 tw-py-20 tw-mr-5'>
        Chọn hình thức thanh toán 
      </div>
      <div className = 'tw-border-2 tw-px-20 tw-py-40'>
        <div>Thanh toán thành công</div>
        <div>Cảm ơn quý khách đã tin tưởng Pharma Track </div>
       
      </div>
      <Button type="primary" onClick={() => navigate("/create_payment_url")} >Registration</Button>
    </div>
  </div>
}

export default BookApTab3
