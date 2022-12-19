import React from 'react'
import './DoctorCardDetail.scss'
import { Button } from 'antd'


const DoctorCardDetail = ({ name_doctor, name_clinic, address }) => {
  return <div className="DoctorCardDetail tw-pt-8">
  <div className = 'card tw-mx-auto'>
    <div className = 'tw-flex tw-items-center'>
      <div className = 'wrap-img tw-ml-12'>
        <div className = 'img '>
          <img src = '/assets/avatardoctor.png' alt = 'dogtor' width = '500px' height = '500px'></img>
        </div>
      </div>
    <div className = 'introduction tw-flex-row tw-px-10 tw-pt-10 tw-pb-6'>
        <div className = 'Name tw-text-3xl tw-font-bold tw-pb-1'>{name_doctor}</div>
        <div className = 'line tw-h-2 tw-bg-gray-400 tw-rounded'></div>
        <div className = 'information tw-px-4 tw-py-2 tw-text-base '>
          Phòng khám thân thiện, dịch vụ toàn diện, chi phí tiết kiệm. Có đầy đủ các trang thiết bị cần thiết 
          phục vụ cho nhu cầu khám chữa bệnh. Bác sĩ tay nghề cao, hoạt động trong lĩnh vực y tế lâu năm cùng đội ngũ 
          nhân viên thân thiện nhiệt tình. 
        </div>
        <div className = 'information2 tw-flex tw-text-xl tw-justify-center'>
          Hãy đặt lịch khám ngay để nhận được ưu đãi mới nhất.
        </div>
    </div>
    </div>
    <div className = 'content tw-px-16 tw-text-base'>
    <div className = 'clinic_name tw-pb-1'><strong>Tên phòng khám: </strong>{name_clinic}</div>
      <div className = 'address tw-pb-1 '><strong>Địa chỉ phòng khám: </strong>{address}</div>
      <div className = 'field tw-pb-1'><strong>Khoa: </strong></div>
      <div className = 'experiences tw-pb-1'><strong>Kinh nghiệm: </strong></div>
      <div className = 'degree tw-pb-1'><strong>Bằng cấp: </strong></div>
    </div>
    <div className = 'line tw-flex tw-max-w-5xl tw-h-2 tw-bg-gray-400 tw-rounded tw-mx-10 tw-mt-2'></div>
    <div className = ''>
      <div className = 'pickTime tw-px-16 tw-mt-2 tw-font-bold tw-text-3xl'> Chọn giờ Khám </div>
      <div className = 'Time tw-flex tw-justify-between tw-px-16 tw-pt-4 tw-pb-8'>
        <Button>8:00 - 9:00</Button>
        <Button>9:00 - 10:00</Button>
        <Button>10:00 - 11:00</Button>
        <Button>11:00 - 12:00</Button>
        <Button>13:00 - 14:00</Button>
        <Button>15:00 - 16:00</Button>
        <Button>16:00 - 17:00</Button>
      </div>
    </div>
</div> 

</div>
}

export default DoctorCardDetail
