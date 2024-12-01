"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const vscode = require("vscode");
suite('Extension Test Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');
    test('Store and retrieve API key', async () => {
        const testKey = 'test-api-key';
        const testValue = 'test-value-123';
        // Store key
        await vscode.commands.executeCommand('api-vault.storeKey', testKey, testValue);
        // Retrieve key
        const retrievedValue = await vscode.commands.executeCommand('api-vault.getKey', testKey);
        assert.strictEqual(retrievedValue, testValue);
    });
});
//# sourceMappingURL=extension.test.js.map