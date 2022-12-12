import React from 'react'
import './GoogleMapInstance.scss'
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
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

const GoogleMapInstance = ({ center, mapContainerStyle, zoom, setDoctorState }) => {
  return (
    <div>
      <GoogleMap
        zoom = {zoom}
        center = { center } 
        mapContainerStyle= { mapContainerStyle }
        mapContainerClassName = 'map-container'
        >
          <MarkerF position = { center }/>
          {DoctorData.map((doctor, index) => (<MarkerF 
                                    position = {{ lat : doctor.lat , lng : doctor.lng}}
                                    options = {{
                                      icon : '/assets/cliniclogo.png'}}
                                    onClick = {() => setDoctorState(index)}
                                    />))}

      </GoogleMap>
    </div>
  );
}

export default GoogleMapInstance