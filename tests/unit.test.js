
const fs = require('fs');
const path = require('path');

const projectDir = path.join(__dirname, '..');

const pages = [
    'index.html',
    'contact.html',
    'login.html',
    'register.html'
];

describe('Student Management System Unit Tests', () => {

    // Test 1: Check that all four HTML pages exist
    test.each(pages)('%s should exist', (page) => {
        const filePath = path.join(projectDir, page);

        expect(fs.existsSync(filePath)).toBe(true);
    });

    // Test 2: Check that all pages contain valid basic HTML structure
    test.each(pages)('%s should contain basic HTML elements', (page) => {
        const filePath = path.join(projectDir, page);
        const content = fs.readFileSync(filePath, 'utf8');

        expect(content.toLowerCase()).toContain('<!doctype html>');
        expect(content.toLowerCase()).toContain('<html');
        expect(content.toLowerCase()).toContain('<body');
    });

});
