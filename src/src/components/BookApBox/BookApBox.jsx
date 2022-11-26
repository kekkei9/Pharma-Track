import React from 'react'
import './BookApBox.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import BookApTab1 from '../BookApTab1/BookApTab1'
import BookApTab2 from '../BookApTab2/BookApTab2';
import BookApTab3 from '../BookApTab3/BookApTab3';

const BookApBox = (props) => {
  const tempComponent = (props) => {
    return <Tab className = 'tw-flex-1 tw-px-12 tw-py-5 tw-rounded-none'>
      <div className = 'tw-text-2xl'>{props.Step}</div>
      <div className = "tw-text-xl tw-font-bold ">{props.Content}</div>      
    </Tab>
  }
  const DataSteps = [
    {
      'Step' : 'Bước 1',
      'Content': 'Chọn phòng khám'
    },
    {
      'Step' : 'Bước 2',
      'Content': 'Phiếu thông tin'
    },
    {
      'Step' : 'Bước 3',
      'Content': 'Xác nhận & Thanh Toán'
    }
  ]
  
  return <div className = "Box">
  <Tabs className = "Tabs">
    <TabList className = "Boxes tw-flex tw-mx-auto tw-max-w-5xl tw-mt-12 ">
      {DataSteps.map((DataStep) => tempComponent(DataStep))}
    </TabList>

      <TabPanel>
        <BookApTab1/>
      </TabPanel>
      <TabPanel>
        <BookApTab2/>
      </TabPanel>
      <TabPanel>
        <BookApTab3/>
      </TabPanel>
    </Tabs>
  </div>
}

export default BookApBox
