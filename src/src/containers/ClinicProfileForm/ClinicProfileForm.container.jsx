import React, { useImperativeHandle } from "react";
import ClinicProfileForm from "../../components/ClinicProfileForm/ClinicProfileForm";
import { Formik } from "formik";

const ClinicProfileFormContainer = ({ initialValues, formRef }) => {
  return (
    <div className="ClinicProfileFormContainer">
      <Formik
        initialValues={initialValues}
        innerRef={formRef}
        enableReinitialize
      >
        {ClinicProfileForm}
      </Formik>
    </div>
  );
};

export default ClinicProfileFormContainer;
