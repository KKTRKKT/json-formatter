
# JSON Formatter

JSON Formatter is a web application that allows users to format, validate, and upload JSON files. This tool supports various JSON formatting options and validates JSON against multiple specifications.

## Features

- **JSON Formatting**: Format JSON with various spacing options (4 spaces, 3 spaces, 2 spaces, compact, 1 tab).
- **JSON Validation**: Validate JSON against specifications like RFC 8259, RFC 7159, RFC 4627, ECMA-404, or skip validation.
- **File Upload**: Upload a JSON file to populate the input area.
- **Real-time Feedback**: Get real-time validation feedback with error messages.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (>= 18.17.0)
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`sh
   git clone https://github.com/yourusername/json-formatter.git
   cd json-formatter
   \`\`\`

2. Install dependencies:
   \`\`\`sh
   npm install
   \`\`\`
   or
   \`\`\`sh
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`sh
   npm run dev
   \`\`\`
   or
   \`\`\`sh
   yarn dev
   \`\`\`

4. Open your browser and navigate to \`http://localhost:3000\`.

## Usage

1. **JSON Input**: Enter your JSON in the input area or upload a JSON file.
2. **Formatting Options**: Select the desired formatting option from the dropdown.
3. **Validation Specification**: Choose a JSON specification to validate against or skip validation.
4. **Format JSON**: Click the "Format JSON" button to format and validate the JSON.
5. **Clear**: Click the "Clear" button to reset the input and output areas.

## Built With

- [Next.js](https://nextjs.org/) - The React framework for production
- [Ant Design](https://ant.design/) - A UI design language and React UI library
- [Ajv](https://ajv.js.org/) - Another JSON Schema Validator

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
