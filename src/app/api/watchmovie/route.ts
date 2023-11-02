import { NextResponse } from "next/server";
import axios from 'axios';

export async function POST(req: Request) {
    const reqBody = await req.json();
    const { movieName } = reqBody.data;
    const searchMovieName = String(movieName).toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    console.log(searchMovieName);

    const movieData = await axios.post("http://localhost:4000/scrape/search", {
        data: {
            movieNames: [
                searchMovieName
            ]
        }
    })

    console.log(movieData.data);

    return NextResponse.json({
        hello: "hello world",
        movieName: searchMovieName
    })
}