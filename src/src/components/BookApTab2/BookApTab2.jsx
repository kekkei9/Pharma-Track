import React from 'react'
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker'
import InputForm from '../InputForm/InputForm'
import PickerForm from '../PickerForm/PickerForm'
import './BookApTab2.scss'
import { useNavigate } from 'react-router-dom'
import BackNextButton from '../BackNextButton/BackNextButton'


const BookApTab2 = (props) => {
  const navigate = useNavigate()

  const onClickBack = () => {
    navigate('/bookap')
  }

  const onClickNext = () => {
    navigate('/bookap3')
  }

  return <div className="Container tw-mx-auto tw-pt-14 tw-max-w-7xl">
    <div className = 'tw-text-xl tw-font-bold tw-pb-5'>1.Thông tin người đăng ký</div>
    <div className = 'tw-flex tw-justify-between tw-pb-5'>
      <InputForm title = 'Họ và tên (*)' placeholder = 'Họ và tên' 
      style ={{width : '270px'}}>      
      </InputForm> 
      <CustomDatePicker title = 'Ngày sinh (*)'placeholder = 'Ngày sinh' 
      style ={{width : '240px'}}>
      </CustomDatePicker>
      <PickerForm title = 'Giới tính (*)' placeholder = 'Giới tính' items = {[
        {label : 'Nam', value : 'Nam'},
        {label : 'Nữ', value: 'Nữ'}
      ]}
      style ={{width : '220px'}}>
      </PickerForm>
      <InputForm title = 'Số điện thoại' placeholder = 'Số điện thoại' 
      style ={{width : '380px'}}>
      </InputForm> 
    </div>
    <div className = 'tw-flex tw-justify-between tw-pb-5'>
      <InputForm title = 'Email' placeholder = 'Email' 
      style ={{width : '270px'}}>      
      </InputForm> 
      <InputForm title = 'CCCD/Mã định danh công dân (*)' placeholder = 'CCCD/Mã định danh công dân' 
      style ={{width : '515px'}}>      
      </InputForm> 
      <InputForm title = 'Số thẻ BHYT' placeholder = 'Số thẻ BHYT' 
      style ={{width : '380px'}}>
      </InputForm> 
    </div>
    <div className = 'tw-flex tw-justify-between tw-pb-5'>
      <PickerForm title = 'Dân tộc' placeholder = 'Dân tộc'
      style ={{width : '270px'}}>
      </PickerForm>
      <PickerForm title = 'Quốc tịch' placeholder = 'Quốc tịch'
      style ={{width : '240px'}}>
      </PickerForm>
      <InputForm title = 'Địa chỉ hiện tại' placeholder = 'Địa chỉ hiện tại' 
      style ={{width : '660px'}}>
      </InputForm> 
    </div>
    <div className = 'tw-flex tw-justify-between tw-pb-5'>
      <PickerForm title = 'Tỉnh/Thành phố' placeholder = 'Tỉnh/Thành phố'
      style ={{width : '270px'}}>
      </PickerForm>
      <PickerForm title = 'Quận/Huyện' placeholder = 'Quận/Huyện'
      style ={{width : '240px'}}>
      </PickerForm>
      <PickerForm title = 'Xã/Phường' placeholder = 'Xã/Phường'
      style ={{width : '660px'}}>
      </PickerForm>
    </div>
    <div className = 'tw-text-xl tw-font-bold tw-py-5'>2.Thông tin bệnh</div>
      <div className = 'tw-flex tw-justify-between tw-pb-5'>
      <InputForm title = 'Mô tả về triệu chứng' placeholder = 'Mô tả về triệu chứng' 
        style ={{width : '100vh'}}>
      </InputForm> 
      </div>
    <div className = ' tw-text-red-600 tw-pl-4 tw-list-disc'>
      <div>Lưu ý:</div>
      <ul className = 'tw-list-disc tw-pl-5'>
        <li>Việc đăng ký thông tin hoàn toàn bảo mật và phục vụ cho dịch vụ khám bệnh</li>
        <li>Xin vui lòng kiểm tra kỹ các thông tin bắt buộc (VD: Họ và tên, Ngày tháng năm sinh, Số điện thoại,
        CCCD/Mã định danh công dân/HC ...)</li>
        <li>Bằng việc nhấn nút "Xác nhận", bạn hoàn toàn hiểu và đồng ý chịu trách nhiệm với các thông tin đã cung cấp.</li>
      </ul>
    </div>

    <BackNextButton onClickBack={ onClickBack } onClickNext = { onClickNext }/>
    
  </div>
}

export default BookApTab2
