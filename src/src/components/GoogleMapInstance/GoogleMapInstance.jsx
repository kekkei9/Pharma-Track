import React from 'react'
import './GoogleMapInstance.scss'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';



const GoogleMapInstance = ({ center, mapContainerStyle, zoom}) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCXyl8cV0kbV42iLv6qmXmSU5wZie9F2n4'
  });
  
  return (
    <div>
      {!isLoaded ? <div>Loading...</div> :
      <GoogleMap
        zoom = {zoom}
        center = { center } 
        mapContainerStyle= { mapContainerStyle }
        mapContainerClassName = 'map-container'
        >
        <Marker position={center}/>
      </GoogleMap>
    }
    </div>
  );
}

export default GoogleMapInstance