# API Vault

A VS Code extension for securely storing and managing API keys.

## Features

- Securely store API keys using VS Code's built-in SecretStorage
- Easy-to-use interface for managing your API keys
- Quick access to stored keys through VS Code commands
- Web-based UI for better user experience

## Commands

The extension provides the following commands:

- `API Vault: Store New API Key` - Store a new API key
- `API Vault: List API Keys` - View all stored API keys
- `API Vault: Get API Key` - Retrieve a specific API key

## Usage

1. Open the Command Palette (Ctrl+Shift+P / Cmd+Shift+P)
2. Type "API Vault" to see available commands
3. Choose the command you want to execute

### Storing a New Key
- Run the "API Vault: Store New API Key" command
- Enter the name for your API key
- Enter the API key value
- The key will be securely stored

### Viewing Keys
- Run the "API Vault: List API Keys" command
- A webview will open showing all your stored keys

### Retrieving a Key
- Run the "API Vault: Get API Key" command
- Enter the name of the key you want to retrieve
- The key value will be displayed

## Security

API keys are stored securely using VS Code's SecretStorage API, which uses the system's keychain to encrypt and store sensitive data.

## Requirements

- VS Code version 1.85.0 or higher

## Extension Settings

This extension contributes no additional settings.

## Known Issues

None at this time.

## Release Notes

### 0.0.1

Initial release of API Vault:
- Basic key storage and retrieval
- Webview interface
- Secure storage implementation
