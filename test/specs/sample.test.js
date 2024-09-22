describe('Google Home Page', () => {
    it('should have the correct title', async () => {
        await browser.url('https://www.google.com');
        const title = await browser.getTitle();
        expect(title).toBe('Google'); // Adjust if necessary
    });

    it('should verify custom page functionality', async () => {
        // Your test logic here
    });
});