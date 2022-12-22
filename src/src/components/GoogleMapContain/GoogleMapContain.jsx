import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GoogleMapContain.scss";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import GetAddress from "../GetAddress/GetAddress";
import DoctorCard from "../DoctorCard/DoctorCard";
import BackNextButton from "../BackNextButton/BackNextButton";

const libraries = ["places"];

const containerStyle = {
  width: "600px",
  height: "600px",
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const DoctorData = [
  {
    id: "0",
    img: "/assets/avatardoctor.png",
    name: "Nguyễn Văn A",
    address: "123456 Đường Võ Thị Sáu, TP.HCM",
    field: "nội",
    lat: 10.682789,
    lng: 107.751334,
  },
  {
    id: "1",
    img: "/assets/avatardoctor.png",
    name: "Nguyễn Văn B",
    address: "123456 Đường Võ Thị Sáu, TP.HCM",
    field: "nội",
    lat: 10.684951,
    lng: 107.748436,
  },
  {
    id: "2",
    img: "/assets/avatardoctor.png",
    name: "Nguyễn Văn C",
    address: "123456 Đường Võ Thị Sáu, TP.HCM",
    field: "nội",
    lat: 10.682873,
    lng: 107.75085,
  },
];

const GoogleMapContain = () => {
  const [doctorState, setDoctorState] = useState(0);

  const navigate = useNavigate();

  const location = GetAddress();

  const handleDoubleClick = (props) => {
    navigate("/bookap/doctor/" + props.id);
  };

  const onClickBack = () => {
    navigate("/homepage");
  };

  const onClickNext = () => {
    navigate("/bookap/doctor/" + doctorState);
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCXyl8cV0kbV42iLv6qmXmSU5wZie9F2n4",
    libraries,
  });

  const mapRef = React.useRef();

  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(17);
  }, []);

  if (loadError) return <div>Error...</div>;

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="GoogleMapContain">
      <div className="container tw-flex tw-justify-center tw-items-center">
        <div className="GoogleMap">
          <Locate panTo={panTo} />
          <GoogleMap
            id="map"
            mapContainerStyle={containerStyle}
            zoom={17}
            center={location.coordinates}
            options={options}
            onLoad={onMapLoad}
          >
            <MarkerF position={location.coordinates} />
            {DoctorData.map((doctor) => (
              <MarkerF
                position={{ lat: doctor.lat, lng: doctor.lng }}
                options={{
                  icon: "/assets/cliniclogo.png",
                }}
                onClick={() => {
                  setDoctorState(doctor.id);
                  panTo({ lat: doctor.lat, lng: doctor.lng });
                }}
              />
            ))}
          </GoogleMap>
        </div>
        <div className="tw-ml-20">
          <DoctorCard
            {...DoctorData[doctorState]}
            handleDoubleClick={() => handleDoubleClick(DoctorData[doctorState])}
          />
        </div>
      </div>

      <BackNextButton onClickBack={onClickBack} onClickNext={onClickNext} />
    </div>
  );
};

function Locate({ panTo }) {
  const location = GetAddress();
  return (
    <button
      className="locate"
      onClick={() => {
        panTo(location.coordinates);
      }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/assets/currentlocation.png`}
        alt="location"
        width="40px"
        height="40px"
      />
    </button>
  );
}

export default GoogleMapContain;
