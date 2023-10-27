import axios from "axios";
import puppeteer from "puppeteer";

export async function scrapeMovie(movieUrl: string) {
    if (!movieUrl) return;

    // Brightdata proxy configuration
    const username = String(process.env.BRIGHTDATA_USERNAME);
    const password = String(process.env.BRIGHTDATA_PASSWORD);
    const port = 22225;
    const session_id = (1000000 * Math.random()) | 0;
    const options = {
        auth: {
            username: `${username}-session-${session_id}`,
            password: password,
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false, // Corrected typo here
    };

    try {
        const browser = await puppeteer.launch({ headless: true }); // Use 'true' for headless mode
        const page = await browser.newPage();

        await page.goto(movieUrl);

        console.log(page.content());

        await page.waitForSelector('div.gmr-embed-responsive.clearfix iframe'); // Corrected the selector

        // Extract the src attribute of the iframe
        const src = await page.evaluate(() => {
            const iframeContainer = document.querySelector('div.gmr-embed-responsive.clearfix iframe');
            const iframe = iframeContainer?.getAttribute('src');
            return iframe;
        });

        console.log('The src attribute of the iframe is:', src);

        await browser.close();
    } catch (error: any) {
        throw new Error(error.message);
    }
}
