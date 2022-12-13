import React from 'react'
import './OpenDoctorCard.scss'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import BackNextButton from '../BackNextButton/BackNextButton';


const OpenDoctorCard = (props) => {
  const DoctorData = [
    {
    'id' : '0',
    'img' : '/assets/avatardoctor.png',
    'name' : 'Nguyễn Văn A',
    'address': '123456 Đường Võ Thị Sáu, TP.HCM', 
    'field' : 'nội',
    'phone' : '0812746060'
    },
    {
    'id' : '1',
    'img' : '/assets/avatardoctor.png', 
    'name' : 'Nguyễn Văn B',
    'address': '123456 Đường Võ Thị Sáu, TP.HCM',
    'field' : 'nội',
    },
    {
      'id' : '2',
    'img' : '/assets/avatardoctor.png',
    'name' : 'Nguyễn Văn C',
    'address': '123456 Đường Võ Thị Sáu, TP.HCM',
    'field' : 'nội',
    },
    {
      'id' : '3',
    'img' : '/assets/avatardoctor.png',
    'name' : 'Nguyễn Văn D',
    'address': '123456 Đường Võ Thị Sáu, TP.HCM',
    'field' : 'nội',
    },
    {
      'id' : '4',
    'img' : '/assets/avatardoctor.png',
    'name' : 'Nguyễn Văn E',
    'address': '123456 Đường Võ Thị Sáu, TP.HCM',
    'field' : 'nội',
    },
    {
      'id' : '5',
    'img' : '/assets/avatardoctor.png',
    'name' : 'Nguyễn Văn F',
    'address': '123456 Đường Võ Thị Sáu, TP.HCM',
    'field' : 'nội',
    },
    {
      'id' : '6',
      'img' : '/assets/avatardoctor.png',
      'name' : 'Nguyễn Văn 1',
      'address': '123456 Đường Võ Thị Sáu, TP.HCM', 
      'field' : 'nội',
      },
      {
        'id' : '7',
      'img' : '/assets/avatardoctor.png', 
      'name' : 'Nguyễn Văn 2',
      'address': '123456 Đường Võ Thị Sáu, TP.HCM',
      'field' : 'nội',
      },
      {
        'id' : '8',
      'img' : '/assets/avatardoctor.png',
      'name' : 'Nguyễn Văn 3',
      'address': '123456 Đường Võ Thị Sáu, TP.HCM',
      'field' : 'nội',
      },
      {
        'id' : '9',
      'img' : '/assets/avatardoctor.png',
      'name' : 'Nguyễn Văn 4',
      'address': '123456 Đường Võ Thị Sáu, TP.HCM',
      'field' : 'nội',
      },
      {
        'id' : '10',
      'img' : '/assets/avatardoctor.png',
      'name' : 'Nguyễn Văn 5',
      'address': '123456 Đường Võ Thị Sáu, TP.HCM',
      'field' : 'nội',
      },
      {
      'id' : '11',
      'img' : '/assets/avatardoctor.png',
      'name' : 'Nguyễn Văn 6',
      'address': '123456 Đường Võ Thị Sáu, TP.HCM',
      'field' : 'nội',
      },
  ]


  const navigate = useNavigate()

  const onClickBack = () => {
    navigate('/bookap')
  }

  const onClickNext = () => {
    navigate('/bookap2')
  }


  const { doctorID } = useParams()   

  var currentDoctor = DoctorData[doctorID]

  return <div className="OpenDoctorCard">
      <div className = 'card tw-flex tw-mx-auto'>
        <div className = 'wrap-img tw-flex tw-px-10 tw-py-10'>
          <div className = 'img tw-flex tw-justify-center '>
            <img src = {currentDoctor.img} alt = 'dogtor' width = '300px' height = '300px'></img>
          </div>
        </div>
        <div className = 'content tw-flex-1 tw-px-10 tw-py-10 '>
          <div className = 'Name tw-text-3xl tw-font-bold tw-pb-1'>{currentDoctor.name}</div>
          <div className = 'line tw-h-2 tw-bg-gray-400 tw-rounded'></div>
          <div className = 'information tw-px-4 tw-py-2 '>
            Phòng khám thân thiện, dịch vụ toàn diện, chi phí tiết kiệm. Có đầy đủ các trang thiết bị cần thiết 
            phục vụ cho nhu cầu khám chữa bệnh. Bác sĩ tay nghề cao, hoạt động trong lĩnh vực y tế lâu năm cùng đội ngũ 
            nhân viên thân thiện nhiệt tình. 
          </div>
          <div className = 'information2 tw-flex tw-justify-center tw-pb-2'>
            Hãy đặt lịch khám ngay để nhận được ưu đãi mới nhất.
          </div>
          <div className = 'line tw-flex tw-max-w-5xl tw-h-2 tw-bg-gray-400 tw-rounded'></div>
          <div className = 'textcontainer tw-text-base '>
            <div className = 'Địa chỉ tw-pb-1 tw-pt-2 '><strong>Địa chỉ phòng khám: </strong>{currentDoctor.address}</div>
            <div className = 'field tw-pb-1'><strong>Lĩnh vực: </strong>{currentDoctor.field}</div>
            <div className = 'workat tw-pb-1'><strong>Đang làm việc tại: </strong></div>
            <div className = 'position tw-pb-1'><strong>Chức vụ: </strong></div>
            <div className = 'experiences tw-pb-1'><strong>Kinh nghiệm: </strong></div>
            <div className = 'degree tw-pb-1'><strong>Bằng cấp: </strong></div>
          </div>
          <div className = 'tw-mt-3 tw-text-center'>
            <div className = 'contact tw-text-3xl tw-font-bold'>Liên hệ tôi tại </div>
            <div className = 'phone tw-text-5xl tw-mt-3 tw-font-bold'>{currentDoctor.phone}</div>
          </div>
        </div>
    </div> 
    
    <BackNextButton onClickBack={ onClickBack } onClickNext = { onClickNext } />
  </div>
}

export default OpenDoctorCard
