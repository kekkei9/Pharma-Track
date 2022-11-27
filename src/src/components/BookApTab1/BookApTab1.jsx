import React, { useState, useEffect } from 'react'
import './BookApTab1.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PickerForm from '../PickerForm/PickerForm'
import DoctorCard from '../DoctorCard/DoctorCard'
import { Button } from 'antd';


const BookApTab1 = (props) => {
  const [provinces, setProvinces] = useState([])

  const formDatas = [
    {
      'title': '',
      'placeholder': 'Tỉnh/ thành phố đang sinh sống',
      'items' : provinces
  
    },
    {
      'title': '',
      'placeholder': 'Tên loại bệnh (vd: cảm sốt)',
      'items' : provinces
    }
  ]

  useEffect(() => {
    fetch('data/vn.json')
    .then((response) => response.json())
    .then((data) => {
      var provArray = data.map((d) => d.admin_name)

      provArray = provArray.filter((value, index, self) => self.indexOf(value) === index)

      setProvinces(provArray.map((prov) => { return {'label': prov, 'value': prov}}))
  })
  }, [])

  const tempComponent = (props) => {
    return <div className = ''>
      <DoctorCard {...props}/>
    </div>
  }

  const DoctorLists = [
    {
    'img' : 'assets/avatardoctor.png',
    'name' : 'Nguyễn Văn A',
    'address': '123456 Đường Võ Thị Sáu, TP.HCM',
    'field' : 'nội',
    'experience' : '4'
    },
    {
    'img' : 'assets/avatardoctor.png',
    'name' : 'Nguyễn Văn A',
    'address': '123456 Đường Võ Thị Sáu, TP.HCM',
    'field' : 'nội',
    'experience' : '4'
    },
    {
    'img' : 'assets/avatardoctor.png',
    'name' : 'Nguyễn Văn A',
    'address': '123456 Đường Võ Thị Sáu, TP.HCM',
    'field' : 'nội',
    'experience' : '4'
    },
    {
    'img' : 'assets/avatardoctor.png',
    'name' : 'Nguyễn Văn A',
    'address': '123456 Đường Võ Thị Sáu, TP.HCM',
    'field' : 'nội',
    'experience' : '4'
    },
    {
    'img' : 'assets/avatardoctor.png',
    'name' : 'Nguyễn Văn A',
    'address': '123456 Đường Võ Thị Sáu, TP.HCM',
    'field' : 'nội',
    'experience' : '4'
    },
    {
    'img' : 'assets/avatardoctor.png',
    'name' : 'Nguyễn Văn A',
    'address': '123456 Đường Võ Thị Sáu, TP.HCM',
    'field' : 'nội',
    'experience' : '4'
    },
  ]

  const FourDoctorLists = [
    {
    'img' : 'assets/avatardoctor.png',
    'name' : 'Nguyễn Văn B',
    'address': '123456 Đường Võ Thị Sáu, TP.HCM',
    'field' : 'nội',
    'experience' : '4'
    },
    {
    'img' : 'assets/avatardoctor.png',
    'name' : 'Nguyễn Văn B',
    'address': '123456 Đường Võ Thị Sáu, TP.HCM',
    'field' : 'nội',
    'experience' : '4'
    },
    {
    'img' : 'assets/avatardoctor.png',
    'name' : 'Nguyễn Văn B',
    'address': '123456 Đường Võ Thị Sáu, TP.HCM',
    'field' : 'nội',
    'experience' : '4'
    },
    {
    'img' : 'assets/avatardoctor.png',
    'name' : 'Nguyễn Văn B',
    'address': '123456 Đường Võ Thị Sáu, TP.HCM',
    'field' : 'nội',
    'experience' : '4'
    },
  ]

  return <div className="Container">
    <Tabs className = "Tabs">
      <TabList className = "Option tw-flex tw-max-w-3xl tw-mx-auto tw-mt-11 tw-text-lg">
        <Tab className = "Option_1 tw-flex-1 tw-text-center tw-py-5 tw-rounded-none	">
          Chọn phòng khám theo bác sĩ
        </Tab>
        <Tab className = "Option_2 tw-flex-1 tw-text-center tw-py-5 tw-rounded-none	">
          Chọn phòng khám theo vị trí
        </Tab>
      </TabList>
      <TabPanel> 
        <div className = 'tw-max-w-4xl tw-mx-auto tw-pl-44 tw-pr-8 tw-py-12'>
          <div className = 'tw-flex tw-items-center tw-justify-between tw-mb-4 '>
            <div className = 'tw-text-lg'> Chọn tỉnh thành phố </div>
            <div className = ''>
              <PickerForm {...formDatas[0]}/>
            </div>
          </div>
          <div className = 'tw-flex tw-items-center tw-justify-between'>
            <div className = 'tw-text-lg'> Chọn bệnh cần khám </div>
            <PickerForm {...formDatas[1]}
            />
          </div>
        </div>

        <div className='wrapper tw-mx-auto tw-flex tw-flex-wrap tw-justify-between tw-max-w-6xl'>
          {DoctorLists.map((DoctorList) => tempComponent(DoctorList))}  
        </div>

      </TabPanel>
      <TabPanel>
        <div className = 'tw-max-w-4xl tw-mx-auto tw-pl-44 tw-pr-8 tw-py-12'>
          <div className = 'tw-flex tw-items-center tw-justify-between tw-mb-4 '>
            <div className = 'tw-text-lg'> Chọn tỉnh thành phố </div>
            <div className = ''>
              <PickerForm {...formDatas[0]}/>
            </div>
          </div>
          <div className = 'tw-flex tw-items-center tw-justify-between'>
            <div className = 'tw-text-lg'> Chọn bệnh cần khám </div>
            <PickerForm {...formDatas[1]}
            />
          </div>
        </div>
        <div className = 'container tw-mx-auto tw-max-w-6xl tw-flex'>
          <div className = 'tw-mr-14 tw-mt-32'>
            <img src = 'assets/googlemap.png' alt = 'googlemap'></img>
          </div>
          <div className = 'tw-flex tw-flex-wrap tw-justify-between'> 
            {FourDoctorLists.map((FourDoctorList) => tempComponent(FourDoctorList))}  
          </div>
        </div>
      </TabPanel>
    </Tabs>
  </div>
}

export default BookApTab1
