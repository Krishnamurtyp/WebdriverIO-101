const assert = require('assert');

describe('Google Search Functionality', () => {

    // Test 1: Open Google and check if the homepage loads correctly
    it('should open Google homepage', async () => {
        // Navigate to Google homepage
        await browser.url('https://www.google.com');
        
        // Get the title of the page
        const title = await browser.getTitle();

        // Assert that the title is "Google"
        assert.strictEqual(title, 'Google', 'Expected title to be "Google"');

        console.log('Opened Google, title is:', title);
        
        // Use browser.debug() to pause the test and manually inspect the page
        browser.debug();  // This will allow you to interact with the page via REPL
    });

    // Test 2: Perform a search on Google and verify results
    it('should search for WebdriverIO and check results', async () => {
        // Locate the search input, type a query, and submit
        const searchBox = await $('input[name="q"]');
        await searchBox.setValue('WebdriverIO');
        await browser.keys('Enter');  // Simulate pressing Enter

        // Wait until the search results appear
        await browser.waitUntil(
            async () => (await browser.getTitle()).includes('WebdriverIO'),
            {
                timeout: 5000,
                timeoutMsg: 'Expected the search results to load with title containing "WebdriverIO"',
            }
        );

        const searchTitle = await browser.getTitle();
        console.log('Search page title:', searchTitle);
        assert.strictEqual(searchTitle.includes('WebdriverIO'), true, 'Expected the title to contain "WebdriverIO"');

        // Pause for debugging and inspection
        browser.debug();  // Pause here to manually inspect the search results
    });

    // Test 3: Validate that the first search result contains "WebdriverIO"
    it('should verify that the first search result contains "WebdriverIO"', async () => {
        // Locate the first search result link
        const firstResult = await $('h3');  // The first heading that appears in the results
        
        const resultText = await firstResult.getText();
        console.log('First search result text:', resultText);

        // Assert that the first result contains "WebdriverIO"
        assert.strictEqual(resultText.includes('WebdriverIO'), true, 'First search result should contain "WebdriverIO"');

        // Click on the first result
        await firstResult.click();

        // Pause to inspect the new page that is opened after clicking the result
        browser.debug();  // Pause here to inspect the new page after the click
    });

    // Test 4: Verify that the clicked page is the official WebdriverIO page
    it('should navigate to the official WebdriverIO page', async () => {
        // Wait for the new page to load and check the title
        await browser.waitUntil(
            async () => (await browser.getTitle()).includes('WebdriverIO · Next-gen browser and mobile automation test framework'),
            {
                timeout: 5000,
                timeoutMsg: 'Expected to navigate to the official WebdriverIO page',
            }
        );

        const pageTitle = await browser.getTitle();
        console.log('Navigated to page title:', pageTitle);

        // Assert that the page title is correct
        assert.strictEqual(pageTitle.includes('WebdriverIO'), true, 'Expected the official WebdriverIO page');
        
        // Pause to inspect the final page
        browser.debug();  // Final pause to check everything is correct
    });
});
