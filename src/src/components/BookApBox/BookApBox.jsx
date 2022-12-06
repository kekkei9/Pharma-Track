import React, { useState } from 'react'
import './BookApBox.scss'
import BookApTab1 from '../BookApTab1/BookApTab1'
import BookApTab2 from '../BookApTab2/BookApTab2';
import BookApTab3 from '../BookApTab3/BookApTab3';
import StepComponent from '../StepComponent/StepComponent';
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd';


const BookApBox = (props) => {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0);
  const StepData = [
    {
      'step': 'Bước 1',
      'content': 'Chọn phòng khám',
    },
    {
      'step': 'Bước 2',
      'content': 'Phiếu thông tin',
    },
    {
      'step': 'Bước 3',
      'content': 'Xác nhận & Thanh toán',
    }
  ]

  return <div className = "BookApBox"> 

    <div className = "Boxes tw-flex tw-mx-auto tw-max-w-5xl tw-mt-12 ">
    {StepData.map((step, index) => <StepComponent {...step} 
                                          style = {current === index ? {
                                            background: '#20A0D8', 
                                            color: 'white',
                                          } : {}}/>)}
    </div>

    {current === -1 ? navigate(-1) : current === 0 ? <BookApTab1 /> : current === 1 ? <BookApTab2 /> : <BookApTab3/>}
    <div className = 'tw-flex tw-justify-center tw-my-12'>
      {current >=0 && (
        <div className = 'tw-px-9'>
          <Button danger size = 'large' 
            style = {{
              width: '120px',
              height: '50px'
            }}
            onClick={() => {
              let temp = current;
              setCurrent(temp - 1);
          }}
          >
          Quay lại
          </Button>
        </div>
      )}
      {current < 2 && (
        <div className = 'tw-px-9'>
          <Button size = 'large'
            style ={{
              backgroundColor: 'rgba(0, 103, 169, 0.7)',
              color: 'white',
              width: '120px',
              height: '50px'
            }}
            onClick={() => {
              let temp = current;
              setCurrent(temp + 1);
            }}
          >
          Tiếp tục
          </Button>
        </div>
      )}
    </div>
    </div>
}

export default BookApBox