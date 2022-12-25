import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton";
import "./AppointmentProfilePage.scss";
import QRCode from "qrcode.react";
import { Button } from "antd";
import { useState } from "react";

const AppointmentProfilePage = (props) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.authentication);
  const params = useParams();
  const [QRData, setQRData] = useState("");

  useEffect(() => {
    setQRData(JSON.stringify({ id_appointment: params.appointmentId }));
  }, [params.appointmentId]);

  const downloadQRCode = async () => {
    const canvas = document.getElementById("qr-gen");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${params.appointmentId}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="AppointmentProfilePage">
      <BackButton />
      {user.role === "user" ? (
        <div>
          <QRCode
            id="qr-gen"
            value={QRData}
            size={290}
            level={"H"}
            includeMargin={true}
          />
          <Button type="default" onClick={downloadQRCode}>
            Tải về
          </Button>
        </div>
      ) : (
        <div>Data</div>
      )}
    </div>
  );
};

export default AppointmentProfilePage;
