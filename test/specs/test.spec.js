const assert = require('assert');
const Page = require('../../pages/page');
const page = new Page();

describe('Google Home Page', () => {
    let title;

    // Executed before the entire test suite
    before(() => {
        assert.strictEqual(1, 1);  // Improved strict assertion
    });

    // Executed after the entire test suite
    after(() => {
        assert.strictEqual(1, 1);
    });

    // Test case 1: Validate the Google Home Page title
    it('should have the correct title', async () => {
        await browser.url('https://www.google.com');  // Open the Google page
        title = await browser.getTitle();  // Get the page title
        assert.strictEqual(title, 'Google', 'The title does not match');  // Assert the title

        console.log('Page Title:', title);  // Output the title in console for debugging

        await browser.pause(5000);  // Pause the browser for 5 seconds to inspect manually
    });

    // Test case 2: Ensure the page title is correct and execute additional page actions
    it('should verify custom page functionality', async () => {
        assert.strictEqual(title, 'Google', 'Previous title is incorrect');  // Check the title again

        const name = page.getName2('Krishna Murthy');  // Call a method from the Page object
        console.log('Processed Name:', name);  // Log the processed name for debugging
    });
});