"use client"; // This directive marks the file as a Client Component

import { useState } from 'react';
import { Layout, Button, Typography, Space, Alert } from 'antd';
import Ajv from 'ajv';
import JsonInput from './JsonInput';
import JsonOutput from './JsonOutput';
import SpaceSelector from './SpaceSelector';
import SpecificationSelector from './SpecificationSelector';
import JsonFileUpload from './JsonFileUpload';

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

const ajv = new Ajv();

const JsonFormatter = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [jsonOutput, setJsonOutput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [spaces, setSpaces] = useState<string>('4');
  const [specification, setSpecification] = useState<string>('Skip');

  const handleFormat = () => {
    try {
      // Replace single quotes with double quotes, but only for JSON keys and values
      const sanitizedInput = jsonInput.replace(/'/g, '"');
      const parsedJson = JSON.parse(sanitizedInput);

      // Validate against the selected specification if not skipping validation
      if (specification !== 'Skip') {
        // Load the corresponding JSON schema for validation (you would need to define these schemas)
        const schema = getSchemaForSpecification(specification);
        const validate = ajv.compile(schema);
        const valid = validate(parsedJson);
        if (!valid) {
          setErrorMessage(`Invalid JSON: ${validate.errors?.map(err => `${err.message}`).join(', ')}`);
          setJsonOutput('');
          return;
        }
      }

      const space = spaces === 'tab' ? '\t' : parseInt(spaces, 10);
      const beautifiedJson = JSON.stringify(parsedJson, null, space);
      setJsonOutput(beautifiedJson);
      setErrorMessage(''); // Clear error message if JSON is valid
    } catch (error) {
      setJsonOutput('');
      setErrorMessage('Invalid JSON');
    }
  };

  const handleClear = () => {
    setJsonInput('');
    setJsonOutput('');
    setErrorMessage('');
  };

  const handleUpload = (content: string) => {
    setJsonInput(content);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor: '#001529', color: '#fff', textAlign: 'center', padding: '0 50px' }}>
        <Title style={{ color: '#fff', lineHeight: '64px', marginBottom: 0 }} level={2}>JSON Formatter</Title>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: '20px' }}>
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
          <Space direction="vertical" style={{ width: '100%' }}>
            <JsonFileUpload onUpload={handleUpload} />
            <SpaceSelector value={spaces} onChange={setSpaces} />
            <SpecificationSelector value={specification} onChange={setSpecification} />
            <JsonInput value={jsonInput} onChange={setJsonInput} />
            <Space style={{ marginTop: '10px' }}>
              <Button type="primary" onClick={handleFormat}>Format JSON</Button>
              <Button onClick={handleClear}>Clear</Button>
            </Space>
            {errorMessage && <Alert message={errorMessage} type="error" showIcon style={{ marginTop: '10px' }} />}
            <JsonOutput value={jsonOutput} />
          </Space>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>JSON Formatter ©2024 Created by YourName</Footer>
    </Layout>
  );
};

const getSchemaForSpecification = (spec: string) => {
  switch (spec) {
    case 'RFC8259':
      return {/* schema for RFC 8259 */};
    case 'RFC7159':
      return {/* schema for RFC 7159 */};
    case 'RFC4627':
      return {/* schema for RFC 4627 */};
    case 'ECMA404':
      return {/* schema for ECMA-404 */};
    default:
      return {};
  }
};

export default JsonFormatter;
