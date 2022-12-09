import React, { useState, useEffect } from 'react'
import './BookApTab1.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PickerForm from '../PickerForm/PickerForm'
import DoctorCard from '../DoctorCard/DoctorCard'
import DoctorCardList from '../DoctorCardList/DoctorCardList';

const BookApTab1 = (props) => {
  const [provinces, setProvinces] = useState([])
  const formDatas = [
    {
      'title': '',
      'placeholder': 'Tên Tỉnh',
      'items' : provinces
  
    },
    {
      'title': '',
      'placeholder': 'Tên Quận/Huyện',
      'items' : provinces
    },
    {
      'title': '',
      'placeholder': 'Tên Loại Bệnh',
      'items' : provinces
    }
  ]

  useEffect(() => {
    fetch('data/vn.json')
    .then((response) => response.json())
    .then((data) => {
      var provArray = data.map((d) => d.admin_name)
        provArray = provArray.filter((value, index, self) => self.indexOf(value) === index)
        setProvinces(provArray.map((prov) => { return {'label': prov, 'value': prov}})
      )
  })
  }, [])

  return <div className="BookApTab1">
    <Tabs className = "Tabs">
      <TabList className = "Option tw-flex tw-max-w-3xl tw-mx-auto tw-mt-11 tw-text-lg tw-cursor-pointer tw-select-none">
        <Tab className = "Option_1 tw-flex-1 tw-text-center tw-py-5 tw-rounded-none	">
          Chọn phòng khám theo bác sĩ
        </Tab>
        <Tab className = "Option_2 tw-flex-1 tw-text-center tw-py-5 tw-rounded-none	">
          Chọn phòng khám theo vị trí
        </Tab>
      </TabList>
      <TabPanel> 
        <div className = 'tw-max-w-4xl tw-mx-auto tw-px-40 tw-mt-12'>
          <div className = 'tw-flex tw-items-center tw-justify-between tw-mb-4 '>
            <div className = 'tw-text-lg'> Chọn tỉnh </div>
            <div className = ''>
              <PickerForm {...formDatas[0]}
              style = {{ width: '300px'}}/>
            </div>
          </div>
          <div className = 'tw-flex tw-items-center tw-justify-between tw-mb-4'>
            <div className = 'tw-text-lg'> Chọn Quận/Huyện </div>
            <PickerForm {...formDatas[1]}
            style = {{ width: '300px'}}/>
          </div>
          <div className = 'tw-flex tw-items-center tw-justify-between'>
            <div className = 'tw-text-lg'> Chọn Loại Bệnh </div>
            <PickerForm {...formDatas[2]}
            style = {{ width: '300px'}}/>
          </div>
        </div>

        <DoctorCardList/>
        

      </TabPanel>
      <TabPanel>
        <div className = 'tw-max-w-4xl tw-mx-auto tw-px-40 tw-mt-12'>
          <div className = 'tw-flex tw-items-center tw-justify-between tw-mb-4 '>
            <div className = 'tw-text-lg'> Chọn Loại Bệnh </div>
            <PickerForm {...formDatas[2]}
            style = {{ width: '300px'}}/>
          </div>
        </div>
      </TabPanel>
    </Tabs>
  </div>
}

export default BookApTab1
