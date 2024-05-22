import React from 'react';
import { Typography, Button, Space } from 'antd';
import { CopyOutlined, DownloadOutlined } from '@ant-design/icons';

const { Paragraph } = Typography;

interface JsonOutputProps {
  value: string;
}

const JsonOutput: React.FC<JsonOutputProps> = ({ value }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      alert('Copied to clipboard!');
    });
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([value], { type: 'application/json' });
    element.href = URL.createObjectURL(file);
    element.download = 'data.json';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <>
      <Space>
        <Button icon={<CopyOutlined />} onClick={handleCopy}>
          Copy to Clipboard
        </Button>
        <Button icon={<DownloadOutlined />} onClick={handleDownload}>
          Download JSON
        </Button>
      </Space>
      <Paragraph
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#f0f0f0',
          fontSize: '16px',
          fontFamily: 'monospace',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          border: '1px solid #ccc',
          borderRadius: '4px',
          marginTop: '20px',
        }}
      >
        {value}
      </Paragraph>
    </>
  );
};

export default JsonOutput;
