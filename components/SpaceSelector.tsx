import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

interface SpaceSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const SpaceSelector: React.FC<SpaceSelectorProps> = ({ value, onChange }) => {
  return (
    <Select placeholder="Select JSON format spacing" style={{ width: '100%' }} onChange={onChange} value={value}>
      <Option value="4">4 Space Tab</Option>
      <Option value="3">3 Space Tab</Option>
      <Option value="2">2 Space Tab</Option>
      <Option value="0">Compact</Option>
      <Option value="tab">1 Tab Tab</Option>
    </Select>
  );
};

export default SpaceSelector;
