import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

interface JsonInputProps {
  value: string;
  onChange: (value: string) => void;
}

const JsonInput: React.FC<JsonInputProps> = ({ value, onChange }) => {
  return (
    <TextArea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={10}
      placeholder="Enter JSON here"
      style={{ width: '100%' }}
    />
  );
};

export default JsonInput;
