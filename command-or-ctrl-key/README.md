# @marvin-utils/command-or-ctrl-key

[![npm Version](https://img.shields.io/npm/v/@marvin-utils/command-or-ctrl-key)](https://www.npmjs.com/package/@marvin-utils/command-or-ctrl-key)
[![License](https://img.shields.io/npm/l/@marvin-utils/command-or-ctrl-key)](https://github.com/your-username/your-package-name/blob/main/LICENSE)

> Determine whether the Command or Ctrl key is used based on the user's platform.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install this package via npm:

```bash
npm install @marvin-utils/command-or-ctrl-key
```

## Usage

To use this package in your project, follow these steps:

1. Install the package via npm:

   ```bash
   npm install @marvin-utils/command-or-ctrl-key
   ```

2. Import the necessary functions or modules into your code:

   ```javascript
   import { getCommandOrCtrlKey } from "@marvin-utils/command-or-ctrl-key";
   ```

3. Use the `getCommandOrCtrlKey()` function to determine whether the Command or Ctrl key should be used based on the user's platform. For example:

   ```javascript
   const key = getCommandOrCtrlKey();
   console.log(`Command or Ctrl key: ${key}`);
   ```

This package simplifies the process of detecting the appropriate key symbol to use on different platforms, making it easier to create cross-platform applications with consistent keybindings.

## API Documentation

### `getCommandOrCtrlKey()`

This function determines whether the Command or Ctrl key should be used based on the user's platform.

#### Returns

- `string`: The Command or Ctrl key symbol based on the user's platform.

#### Example

```javascript
import { getCommandOrCtrlKey } from "@marvin-utils/command-or-ctrl-key";

const key = getCommandOrCtrlKey();
console.log(`Command or Ctrl key: ${key}`);
```

This function provides a straightforward way to retrieve the appropriate key symbol to use in your applications, ensuring a consistent user experience across different platforms.

## Contributing

Contributions are welcome! We appreciate your help in improving this package. To contribute, please follow these guidelines:

1. Fork the repository and clone it to your local machine.

2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.

3. Make your changes and ensure that your code follows the project's coding standards.

4. Write tests for your changes to maintain code quality.

5. Commit your changes with a descriptive commit message: `git commit -m "Your message here"`.

6. Push your changes to your forked repository: `git push origin feature-name`.

7. Open a pull request to the main repository.

8. Our team will review your changes, provide feedback, and merge your contribution.

Thank you for helping us make this package better for everyone!

Please read our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the [MIT License](LICENSE).

By contributing to this project, you agree that your contributions will be licensed under its MIT License.
