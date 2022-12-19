export const validateEmail = (value) => {
  let errors;

  if (!value) {
    errors = "Email đăng nhập không được bỏ trống";
  } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    errors = "Email không hợp lệ";
  }

  return errors;
};

export const isRequired = (labelName) => (value) =>
  !value ? `${labelName} không được bỏ trống` : "";

export const validatePassword = (values) => {
  let error = "";
  const passwordRegex = /(?=.*[0-9])/;
  if (!values) {
    error = "Mật khẩu không được bỏ trống";
  } else if (values.length < 8) {
    error = "Mặt khẩu phải dài ít nhất 8 kí tự";
  } else if (!passwordRegex.test(values)) {
    error = "Mật khẩu phải bao gồm ít nhất 1 chữ số (1-9)";
  }
  return error;
};

export const validateConfirmPassword = (pass, value) => {
  let error = "";
  if (pass && value) {
    if (pass !== value) {
      error = "Mật khẩu nhập lại không đúng";
    }
  }
  return error;
};

export const validateLat = (value) =>
  value && isFinite(value) && Math.abs(value) <= 90 ? "" : "Vĩ độ không đúng";

export const validateLng = (value) =>
  value && isFinite(value) && Math.abs(value) <= 180
    ? ""
    : "Kinh độ không đúng";
