import axios from "axios";
import * as cheerio from "cheerio";

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
        // Fetch movie page
        const response = await axios.get(movieUrl, options);
        const $ = cheerio.load(response.data);

        // Scrape movie data

    } catch (error: any) {
        throw new Error(error.message);
    }
}
