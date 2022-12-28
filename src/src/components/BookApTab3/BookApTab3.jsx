import React from "react";
import "./BookApTab3.scss";
import { Button, notification } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import BackNextButton from "../BackNextButton/BackNextButton";
import { useSelector } from "react-redux";
import Fetch from "../../fetch";
import { updateUserInfo } from "../../firebase";

const BookApTab3 = (props) => {
  const navigate = useNavigate();
  let { state } = useLocation();
  const { isAuthUser, user } = useSelector((state) => state.authentication);

  if (!state) {
    state = JSON.parse(localStorage.getItem("bookingState"));
  }

  const onClickBack = () => {
    navigate("/bookap2", { state });
  };

  const onClickNext = async () => {
    localStorage.setItem("bookingState", JSON.stringify(state));
    if ((isAuthUser, user?.role === "user")) {
      try {
        const { time, currentDoctor, userFormValues } = state;
        let postData = {};
        postData.time = time.shift;
        postData.doctor = currentDoctor.name;
        postData.test = "Test1";
        postData.number = currentDoctor.number;
        postData.address = `${currentDoctor.address}, ${currentDoctor.ward}, ${currentDoctor.city}, ${currentDoctor.province}`;
        postData.status = "queued";
        postData.id_clinic = currentDoctor.id_clinic;
        postData.id_user = user.uid;
        postData.id_staff = currentDoctor.id_staff;

        const response = await Fetch(
          "POST",
          "https://pharma-track.onrender.com/api/v1/appointment",
          postData
        );
        console.log(response);

        if (response.results === "thanh cong") {
          notification.success({
            message: "Đăng kí lịch hẹn",
            description: "Đăng kí lịch hẹn thành công",
          });

          const userData = (({ address, cccd, gender, phonenumber }) => ({
            address,
            cccd,
            gender,
            phonenumber,
          }))(userFormValues);

          userData.birthday = userFormValues.birthday.$d.substring(0, 10);

          await updateUserInfo(user.uid, userData);
          notification.success({
            message: "Cập nhật thông tin",
            description: "Cập nhật thông tin người dùng thành công",
          });
          localStorage.removeItem("bookingState");

          navigate("/home");
        }
      } catch (e) {
        console.error(e);
      }
      notification.error({
        message: "Đặt lịch hẹn",
        description: "Lỗi hệ thống, đang chờ xử lí",
      });
    } else {
      notification.error({
        message: "Đặt lịch hẹn",
        description: "Vui lòng đăng nhập tài khoản bệnh nhân",
      });
    }
  };

  return (
    <div className="BookApTab3">
      <div className="tw-flex tw-mt-10 tw-max-w-4xl tw-mx-auto tw-justify-between">
        <div className="tw-border-2 tw-px-20 tw-py-20 tw-mr-5">
          Chọn hình thức thanh toán
        </div>
        <div className="tw-border-2 tw-px-20 tw-py-40">
          <div>Thanh toán thành công</div>
          <div>Cảm ơn quý khách đã tin tưởng Pharma Track </div>
          <div>Để nhận mã QR, nhấn tiếp tục</div>
        </div>
      </div>

      <BackNextButton onClickBack={onClickBack} onClickNext={onClickNext} />
    </div>
  );
};

export default BookApTab3;
