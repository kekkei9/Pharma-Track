import React, { useMemo, useState, useEffect } from 'react'
import './GoogleMapContain.scss'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import GoogleMapInstance from '../GoogleMapInstance/GoogleMapInstance';
import GetAddress from '../GetAddress/GetAddress';


const containerStyle = {
  width: '600px',
  height: '600px'
};

const center = {
  lat: 10.884626751452029, 
  lng: 106.78270399521462
};


const GoogleMapContain = () => {
  const location = GetAddress()

  return <div className = 'GoogleMapContain tw-flex tw-justify-center'>
    <GoogleMapInstance 
      mapContainerStyle = { containerStyle }
      center = {location.coordinates}
      zoom = {10} />
  </div>
}

export default GoogleMapContain