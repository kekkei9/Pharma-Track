import React, { useState } from 'react'
import './BookApBox.scss'
import BookApTab1 from '../BookApTab1/BookApTab1'
import BookApTab2 from '../BookApTab2/BookApTab2';
import BookApTab3 from '../BookApTab3/BookApTab3';
import { Button } from 'antd';
import StepComponent from '../StepComponent/StepComponent';


const BookApBox = (props) => {

  const [current, setCurrent] = useState(1);

  return <div className = "Box">
    <div className = "Boxes tw-flex tw-mx-auto tw-max-w-5xl tw-mt-12 ">
      <StepComponent step = 'Bước 1' content = 'Chọn phòng khám' ></StepComponent>
      <StepComponent step = 'Bước 2' content = 'Phiếu thông tin' ></StepComponent>
      <StepComponent step = 'Bước 3' content = 'Xác nhận & Thanh Toán' ></StepComponent>
    </div>
    
    {current == 1 ? <BookApTab1 /> : current == 2 ? <BookApTab2 /> : <BookApTab3/>}
    <div className = 'tw-flex tw-justify-center tw-my-12'>
      {current >1 && (
        <div className = 'tw-px-9'>
          <Button danger size = 'large'
            onClick={() => {
              let temp = current;
              setCurrent(temp - 1);
          }}
          >
          Quay lại
          </Button>
        </div>
      )}
      {current < 3 && (
        <div className = 'tw-px-9'>
          <Button size = 'large'
            style ={{
              backgroundColor: 'rgba(0, 103, 169, 0.7)',
              color: 'white',
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