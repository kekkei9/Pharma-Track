import React from "react";
import "./LoginForm.scss";
import { Form, Field } from "formik";
import { Form as AntdForm, Button } from "antd";
import { AntInput, AntPassword } from "../CreateAntField/CreateAntField";
import {
  validateEmail,
  validatePassword,
} from "../ValidateFields/ValidateFields";

const FormItem = AntdForm.Item;

const LoginForm = ({ handleSubmit, values, submitCount }) => {
  return (
    <div className="LoginForm">
      <Form
        className="form-container  tw-flex tw-flex-col tw-items-center"
        onSubmit={handleSubmit}
      >
        <Field
          component={AntInput}
          name="email"
          type="email"
          label="Email"
          validate={validateEmail}
          submitCount={submitCount}
          hasFeedback
          style={{
            width: "400px",
          }}
        />
        <Field
          component={AntPassword}
          name="password"
          type="password"
          label="Password"
          validate={validatePassword}
          submitCount={submitCount}
          hasFeedback
        />
        <div className="submit-container">
          <FormItem>
            <Button
              htmlType="submit"
              type="primary"
              style={{
                width: "400px",
                marginTop: "12px",
              }}
            >
              Submit
            </Button>
          </FormItem>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
