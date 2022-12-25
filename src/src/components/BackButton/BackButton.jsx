import React from "react";
import "./BackButton.scss";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackButton = ({ className }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`BackButton tw-flex tw-flex-row tw-items-center tw-self-start tw-mt-5 ${className}`}
      onClick={() => navigate(-1)}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
      <div className="tw-ml-2 tw-text-base">Trở lại</div>
    </div>
  );
};

export default BackButton;
