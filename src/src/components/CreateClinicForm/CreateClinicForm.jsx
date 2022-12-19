import React from "react";
import "./CreateClinicForm.scss";
import { Form, Field } from "formik";
import { AntInput, AntSelect } from "../CreateAntField/CreateAntField";
import {
  validateLat,
  validateLng,
  isRequired,
} from "../ValidateFields/ValidateFields";
import { useState } from "react";
import { useEffect } from "react";
import Fetch from "../../fetch";
import { async } from "@firebase/util";

const CreateClinicForm = ({
  values,
  handleSubmit,
  submitCount,
  initialValues,
}) => {
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [wards, setWards] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchProvinces = async () => {
      try {
        const response = await Fetch(
          "GET",
          "https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1"
        );
        setProvinces(response.data.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchProvinces();

    return () => abortController.abort();
  }, []);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchCities = async () => {
      try {
        const response = await Fetch(
          "GET",
          "https://vn-public-apis.fpo.vn/districts/getByProvince",
          {
            provinceCode: provinces.find((x) => x.name === values.province)
              .code,
            limit: -1,
          }
        );
        setCities(response.data.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchCities();

    return () => abortController.abort();
  }, [provinces, values.province]);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchWards = async () => {
      try {
        const response = await Fetch(
          "GET",
          "https://vn-public-apis.fpo.vn/wards/getByDistrict",
          {
            districtCode: cities.find((x) => x.name === values.city).code,
            limit: -1,
          }
        );
        setWards(response.data.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchWards();

    return () => abortController.abort();
  }, [cities, values.city, provinces, values.province]);

  return (
    <div className="CreateClinicForm">
      <Form
        className="form-container tw-flex tw-flex-col tw-items-center"
        onSubmit={handleSubmit}
      >
        <Field
          component={AntInput}
          name="id_clinic"
          type="textarea"
          label="Nhập ID phòng khám đã được cấp"
          validate={isRequired("ID phòng khám")}
          submitCount={submitCount}
          hasFeedback
          style={{
            width: "400px",
          }}
          placeholder="ID phòng khám"
        />
        <Field
          component={AntInput}
          name="name_clinic"
          type="textarea"
          label="Nhập tên phòng khám"
          validate={isRequired("Tên phòng khám")}
          submitCount={submitCount}
          hasFeedback
          style={{
            width: "400px",
          }}
          placeholder="Tên phòng khám"
        />
        <Field
          component={AntInput}
          name="name_doctor"
          type="textarea"
          label="Tên chủ phòng khám"
          validate={isRequired("Tên chủ phòng khám")}
          submitCount={submitCount}
          hasFeedback
          style={{
            width: "400px",
          }}
          disabled
          placeholder="Tên chủ phòng khám"
        />
        <Field
          component={AntSelect}
          name="province"
          label="Chọn tỉnh/thành phố"
          defaultValue={values.province}
          validate={isRequired("Tỉnh/thành phố")}
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
          options={provinces.map((province) => ({
            value: province.name,
            label: province.name,
          }))}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          disabled={!initialValues.provinces}
        />
        <Field
          component={AntSelect}
          name="city"
          label="Chọn thành phố/quận/huyện"
          defaultValue={values.city}
          validate={isRequired("Thành phố/quận/huyện")}
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
          options={cities.map((province) => ({
            value: province.name,
            label: province.name,
          }))}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
        />
        <Field
          component={AntSelect}
          name="ward"
          label="Chọn phường/xã"
          defaultValue={values.ward}
          validate={isRequired("Phường/xã")}
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
          options={wards.map((province) => ({
            value: province.name,
            label: province.name,
          }))}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
        />
        <Field
          component={AntInput}
          name="address"
          type="textarea"
          label="Nhập địa chỉ phòng khám"
          validate={isRequired("Địa chỉ phòng khám")}
          submitCount={submitCount}
          hasFeedback
          style={{
            width: "400px",
          }}
          placeholder="Địa chỉ phòng khám"
        />
        <div className="tw-flex tw-flex-row tw-justify-between tw-w-full">
          <Field
            component={AntInput}
            name="lng"
            type="textarea"
            label="Kinh độ"
            validate={validateLng}
            submitCount={submitCount}
            hasFeedback
            style={{
              width: "190px",
            }}
            placeholder="Kinh độ"
          />
          <Field
            component={AntInput}
            name="lat"
            type="textarea"
            label="Vĩ độ"
            validate={validateLat}
            submitCount={submitCount}
            hasFeedback
            style={{
              width: "190px",
            }}
            placeholder="Vĩ độ"
          />
        </div>
      </Form>
    </div>
  );
};

export default CreateClinicForm;
