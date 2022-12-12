import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './GoogleMapContain.scss'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import GoogleMapInstance from '../GoogleMapInstance/GoogleMapInstance';
import GetAddress from '../GetAddress/GetAddress';
import DoctorCard from '../DoctorCard/DoctorCard';

const DoctorData = [
  {
  'id' : '0',
  'img' : '/assets/avatardoctor.png',
  'name' : 'Nguyễn Văn A',
  'address': '123456 Đường Võ Thị Sáu, TP.HCM', 
  'field' : 'nội',
  'lat' : 10.682789,
  'lng' : 107.751334,
  },
  {
  'id' : '1',
  'img' : '/assets/avatardoctor.png', 
  'name' : 'Nguyễn Văn B',
  'address': '123456 Đường Võ Thị Sáu, TP.HCM',
  'field' : 'nội',
  'lat' : 10.684951,
  'lng' : 107.748436,
  },
  {
    'id' : '2',
  'img' : '/assets/avatardoctor.png',
  'name' : 'Nguyễn Văn C',
  'address': '123456 Đường Võ Thị Sáu, TP.HCM',
  'field' : 'nội',
  'lat' : 10.682873,
  'lng' : 107.750850,
  },
]

const containerStyle = {
  width: '600px',
  height: '600px'
};



const GoogleMapContain = () => {

  const [doctorState, setDoctorState] = useState(0)

  const navigate = useNavigate()
  
  const handleDoubleClick = (props) => {
    navigate('/bookap/doctor' + props.id)
  }

  const location = GetAddress()

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCXyl8cV0kbV42iLv6qmXmSU5wZie9F2n4'
  });
  
  if (!isLoaded) return <div>Loading...</div>

  return <div className = 'GoogleMapContain tw-flex tw-justify-center tw-items-center'>
    <GoogleMapInstance
      mapContainerStyle = { containerStyle }
      center = { location.coordinates }
      zoom = {15} 
      setDoctorState = {setDoctorState}/>
    <div className = 'tw-ml-20'>
      <DoctorCard {...DoctorData[doctorState]} 
                    handleDoubleClick = {() => handleDoubleClick(DoctorData[doctorState])}/> 
    </div>

  </div>
}

export default GoogleMapContain