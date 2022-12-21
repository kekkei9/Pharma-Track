import React from "react";
import { useNavigate } from "react-router-dom";
import "./QRScanPage.scss";
import QrReader from "react-qr-scanner";
import { notification } from "antd";

const QrScanPage = (props) => {
  const navigate = useNavigate();

  return (
    <div className="QrScanPage tw-flex tw-flex-col tw-items-center">
      <QrReader
        delay={300}
        onScan={(data) => {
          try {
            const info = data && JSON.parse(data?.text);
            if (info) {
              console.log(info);
            }
          } catch (e) {
            notification.error({
              message: "Quét QR",
              description: "Mã QR sai",
            });
          }
        }}
        onError={(e) => console.error(e)}
        className="tw-mt-5"
      />
    </div>
  );
};

export default QrScanPage;
