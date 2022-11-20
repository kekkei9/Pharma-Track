import { Select } from 'antd';
import React from 'react'
import './PickerForm.scss'


const PickerForm = ({ title, placeholder, items }) => {

  const handleChange = (value) => {
  console.log(`selected ${value}`);
};
  return <div className="PickerForm">
    <div className='tw-text-base tw-ml-3'>{title}</div>
     <Select
    showSearch
    style={{
      width: '400px',
      marginTop: '12px'
    }}
    placeholder="Tên tỉnh/ thành phố"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={items}
  />
  </div>
}

export default PickerForm
