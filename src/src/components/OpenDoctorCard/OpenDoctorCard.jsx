import React, {useState, useEffect} from 'react'
import './OpenDoctorCard.scss'
import Fetch from "../../fetch";
import { Button, notification } from 'antd'
import { useNavigate } from "react-router-dom";


const OpenDoctorCard = ({ currentDoctor }) => {

  const [DoctorTime, setDoctorTime] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchDoctorTime = async () => {
      try {
        const response = await Fetch(
          "POST",
          "https://pharma-track.onrender.com/api/v1/doctortime/getDoctorShifts",
          {
            id_doctortime : '7b8f78f4-b9b8-4c99-8a8d-108035733333',
          }
        );
        setDoctorTime(response);
      } catch (e) {
        console.error(e);
      }
    };
    fetchDoctorTime();

    return () => abortController.abort();
  },[]);

  const navigate = useNavigate()
  
  const [changeStyle, setStyle] = useState(-1)

  return <div className="OpenDoctorCard">
    <div className = 'carddetail '>
      <div className = 'wrap-card '>
        <div className = 'wrap-img '>
          <div className = 'img '>
            <img src = '/assets/avatardoctor.png' alt = 'dogtor' width = '500px' height = '500px'></img>
          </div>
        </div>
        <div className = 'introduction '>
          <div className = 'Name '>{currentDoctor.name_doctor}</div>
          <div className = 'line'></div>
          <div className = 'information '>
            Phòng khám thân thiện, dịch vụ toàn diện, chi phí tiết kiệm. Có đầy đủ các trang thiết bị cần thiết 
            phục vụ cho nhu cầu khám chữa bệnh. Bác sĩ tay nghề cao, hoạt động trong lĩnh vực y tế lâu năm cùng đội ngũ 
            nhân viên thân thiện nhiệt tình. 
          </div>
          <div className = 'information2'>
            Hãy đặt lịch khám ngay để nhận được ưu đãi mới nhất.
          </div>
        </div>
      </div>
      <div className = 'content '>
        <div className = 'clinic_name '><strong>Tên phòng khám: </strong>{currentDoctor.name_clinic}</div>
        <div className = 'address  '><strong>Địa chỉ phòng khám: </strong>{currentDoctor.address}</div>
        <div className = 'field '><strong>Khoa: </strong></div>
        <div className = 'experiences '><strong>Kinh nghiệm: </strong></div>
        <div className = 'degree '><strong>Bằng cấp: </strong></div>
      </div>

      <div className = 'line2 tw-flex tw-max-w-5xl tw-h-2 tw-bg-gray-400 tw-rounded tw-mx-10 tw-mt-2'></div>

      <div className = 'Time'>
        <div className = 'pickTime tw-px-12 tw-mt-2 tw-font-bold tw-text-3xl'> Chọn giờ Khám </div>
        <div className = 'TimeButton tw-flex tw-justify-between tw-px-16 tw-pt-4 tw-pb-8'>
          {DoctorTime.map((item,index) => (
            <Button
            style = {
              changeStyle === index ? {backgroundColor: '#46C2CB'} : {}
            }
            onClick = { () => setStyle(index)}
            >{item.shift}</Button>
          ))}
        </div>
      </div>
    </div>
           
  </div>
}

export default OpenDoctorCard
