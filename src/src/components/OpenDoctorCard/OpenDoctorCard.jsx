import React, {useState, useEffect} from 'react'
import './OpenDoctorCard.scss'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Fetch from "../../fetch";
import DoctorCardDetail from '../DoctorCardDetail/DoctorCardDetail';
import BackNextButton from '../BackNextButton/BackNextButton';


const OpenDoctorCard = (props) => {
  const [DoctorData, setDoctorData] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchDoctor = async () => {
      try {
        const response = await Fetch(
          "GET",
          "https://pharma-track.onrender.com/api/v1/clinic/",
        );
        setDoctorData(response);
      } catch (e) {
        console.error(e);
      }
    };
    fetchDoctor();

    return () => abortController.abort();
  });

  const [DoctorTime, setDoctorTime] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchDoctorTime = async () => {
      try {
        const response = await Fetch(
          "POST",
          "https://pharma-track.onrender.com/api/v1/doctortime/getDoctorShifts",
          {
            id_doctortime : "7b8f78f4-b9b8-4c99-8a8d-108035733333",
          }
        );
        setDoctorTime(response);
      } catch (e) {
        console.error(e);
      }
    };
    fetchDoctorTime();

    return () => abortController.abort();
  });

  console.log(DoctorTime)

  const navigate = useNavigate()

  const onClickBack = () => {
    navigate('/bookap')
  }

  const onClickNext = () => {
    navigate('/bookap2')
  }

  const { doctorId } = useParams()
  
  const currentDoctor = DoctorData.filter(obj => {
    return obj.id_clinic === doctorId;
  })
  
  return <div className="OpenDoctorCard">
    {currentDoctor.map(item => <DoctorCardDetail name_clinic={item.name_clinic}
                                                  name_doctor = {item.name_doctor}
                                                  address = {item.address}/>)}

    <BackNextButton onClickBack={ onClickBack } onClickNext = { onClickNext } />

  </div>
}

export default OpenDoctorCard
