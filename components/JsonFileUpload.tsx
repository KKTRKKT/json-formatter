import React from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

interface JsonFileUploadProps {
  onUpload: (content: string) => void;
}

const JsonFileUpload: React.FC<JsonFileUploadProps> = ({ onUpload }) => {
  const handleUpload = (info: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        onUpload(reader.result.toString());
      }
    };
    reader.readAsText(info.file);
  };

  return (
    <Upload beforeUpload={() => false} onChange={handleUpload}>
      <Button icon={<UploadOutlined />}>Upload JSON File</Button>
    </Upload>
  );
};

export default JsonFileUpload;
