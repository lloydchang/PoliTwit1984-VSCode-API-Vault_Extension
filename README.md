# API Vault for VS Code

A secure and convenient VS Code extension for managing your API keys directly from the Activity Bar.

## Features

- 🔒 Securely store API keys using VS Code's built-in SecretStorage
- 🎯 Quick access from the Activity Bar
- 👀 Easy-to-use interface for managing all your API keys
- 🔑 Show/Hide functionality for viewing key values
- 🗑️ One-click deletion of stored keys

## Installation

1. Install the extension from the VS Code Marketplace
2. Look for the API icon in the Activity Bar (left sidebar)
3. Click it to open the API Vault panel

## Usage

### Opening API Vault
- Click the API icon in the Activity Bar (left sidebar)
- The API Vault panel will open, showing all your stored keys

### Storing a New API Key
1. In the API Vault panel, find the "Store New API Key" section at the top
2. Enter the key name (e.g., "GITHUB_TOKEN")
3. Enter the API key value
4. Click "Store Key"

### Viewing Stored Keys
- All your stored keys are automatically listed in the panel
- Click "Show/Hide" next to any key to view its value
- Click again to hide the value

### Deleting Keys
- Click "Delete" next to any key you want to remove
- Confirm the deletion when prompted

## Security

API Vault uses VS Code's SecretStorage API to securely store your keys:
- On macOS: Keys are stored in the system Keychain
- On Windows: Keys are stored in the Windows Credential Manager
- On Linux: Keys are stored in the system's secret service (libsecret)

Your API keys are:
- Encrypted at rest
- Stored securely in your system's credential manager
- Never stored in plain text
- Only accessible within VS Code

## Commands

While the main interface is accessible from the Activity Bar, you can also use these commands from the Command Palette (Cmd+Shift+P / Ctrl+Shift+P):

- `API Vault: Store New API Key` - Store a new API key
- `API Vault: List API Keys` - Open the API Vault panel
- `API Vault: Get API Key` - Retrieve a specific key

## Requirements

- VS Code version 1.85.0 or higher

## Extension Settings

This extension contributes no additional settings.

## Known Issues

None at this time.

## Release Notes

### 1.0.0

Initial release of API Vault:
- Activity Bar integration
- Secure key storage
- Webview interface
- Show/Hide functionality
- One-click deletion
- System keychain integration

## Contributing

Found a bug or have a feature request? Please open an issue on our [GitHub repository](https://github.com/joewilson/vscode-api-vault).

## License

This extension is licensed under the [MIT License](LICENSE).
