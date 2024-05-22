import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

interface SpecificationSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const SpecificationSelector: React.FC<SpecificationSelectorProps> = ({ value, onChange }) => {
  return (
    <Select placeholder="Select JSON specification" style={{ width: '100%' }} onChange={onChange} value={value}>
      <Option value="RFC8259">RFC 8259</Option>
      <Option value="RFC7159">RFC 7159</Option>
      <Option value="RFC4627">RFC 4627</Option>
      <Option value="ECMA404">ECMA-404</Option>
      <Option value="Skip">Skip Validation</Option>
    </Select>
  );
};

export default SpecificationSelector;
