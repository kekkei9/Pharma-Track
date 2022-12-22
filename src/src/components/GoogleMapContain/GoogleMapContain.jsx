import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./GoogleMapContain.scss";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import GetAddress from "../GetAddress/GetAddress";
import DoctorCard from "../DoctorCard/DoctorCard";
import BackNextButton from "../BackNextButton/BackNextButton";
import OpenDoctorCard from "../OpenDoctorCard/OpenDoctorCard";
import { Modal } from "antd";

const libraries = ["places"];

const containerStyle = {
  width: "600px",
  height: "600px",
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const GoogleMapContain = ({ DoctorData }) => {
  const navigate = useNavigate();

  const location = GetAddress();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDoubleClick = (props) => {
    navigate("/bookap/doctor/" + props.id_clinic);
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
            {DoctorData.map((doctor, index) => (
              <MarkerF
                position={{ lat: doctor.lat, lng: doctor.lng }}
                options={{
                  icon: "/assets/cliniclogo.png",
                }}
                onClick={() => {
                  setDoctorState(index);
                  panTo({ lat: doctor.lat, lng: doctor.lng });
                }}
              />
            ))}
          </GoogleMap>
        </div>
        <div className="tw-ml-20">
          <DoctorCard
            {...DoctorData[doctorState]}
            handleDoubleClick={showModal}
          />
          <Modal
            title="CHI TIẾT BÁC SĨ"
            open={isModalOpen}
            okType={"primary"}
            onOk={handleOk}
            onCancel={handleCancel}
            width={1000}
            footer={null}
          >
            <OpenDoctorCard currentDoctor={DoctorData[doctorState]} />
          </Modal>
        </div>
      </div>
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
