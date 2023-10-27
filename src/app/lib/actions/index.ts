"use server";

import { scrapeMovie } from "../scraper";

export async function scrapeAndSave(movieUrl: string) {
    if(!movieUrl) return;

    try{
        const scrapedMovie = await scrapeMovie(movieUrl);
    }catch(error: any){
        throw new Error(error.message);
    }
}