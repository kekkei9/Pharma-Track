import React from "react";
import "./SignUpForm.scss";
import { Form, Field } from "formik";
import { Form as AntdForm, Button } from "antd";
import {
  AntInput,
  AntPassword,
  AntSelect,
} from "../CreateAntField/CreateAntField";
import {
  validateConfirmPassword,
  validateEmail,
  validatePassword,
  isRequired,
} from "../ValidateFields/ValidateFields";

const FormItem = AntdForm.Item;

const SignUpForm = ({ handleSubmit, values, submitCount }) => {
  return (
    <div className="SignUpForm">
      <Form
        className="form-container tw-flex tw-flex-col tw-items-center"
        onSubmit={handleSubmit}
      >
        <Field
          component={AntInput}
          name="username"
          type="textarea"
          label="Tên người dùng"
          validate={isRequired}
          submitCount={submitCount}
          hasFeedback
          style={{
            width: "400px",
          }}
          placeholder="Tên người dùng"
        />
        <Field
          component={AntInput}
          name="email"
          type="email"
          label="Email đăng nhập"
          validate={validateEmail}
          submitCount={submitCount}
          hasFeedback
          style={{
            width: "400px",
          }}
          placeholder="Email đăng nhập"
        />
        <Field
          component={AntPassword}
          name="password"
          type="password"
          label="Mật khẩu"
          validate={validatePassword}
          submitCount={submitCount}
          hasFeedback
          placeholder="Mật khẩu"
        />
        <Field
          component={AntPassword}
          name="confirmPassword"
          type="password"
          label="Nhập lại mật khẩu"
          validate={(value) => validateConfirmPassword(values.password, value)}
          submitCount={submitCount}
          hasFeedback
          placeholder="Nhập lại mật khẩu"
        />
        <Field
          component={AntSelect}
          name="province"
          label="Chọn tỉnh/thành phố"
          defaultValue={values.province}
          selectOptions={values.provinceOptions}
          validate={isRequired}
          submitCount={submitCount}
          tokenSeparators={[","]}
          style={{ width: "400px" }}
          hasFeedback
          showSearch
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={values.provinceOptions.map((province) => {
            return { value: province, label: province };
          })}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
        />
        <div className="submit-container">
          <FormItem>
            <Button
              type="primary"
              style={{
                width: "400px",
              }}
              htmlType="submit"
            >
              Tiếp tục
            </Button>
          </FormItem>
        </div>
      </Form>
    </div>
  );
};

export default SignUpForm;
