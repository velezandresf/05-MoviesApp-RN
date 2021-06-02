import { useEffect, useState } from "react"
import movieDb from "../api/movieDB";
import { MovieFull } from '../interfaces/movieInterface';
import { CreditsResponse, Cast } from '../interfaces/creditsInterface';

interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];
}

export const useMovieDetails = ( movieId: number) => {
 
    const [state, setstate] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });
    
    const getMovieDetails = async() => {
        const movieDetailsPromise = movieDb.get<MovieFull>(`/${movieId}`)
        const castDetailPromise = movieDb.get<CreditsResponse>(`/${movieId}/credits`)
        
        const [ movieDetailsRest, castDetailsRest ] = await Promise.all([movieDetailsPromise, castDetailPromise]);
        
        setstate({
            isLoading: false,
            movieFull: movieDetailsRest.data,
            cast: castDetailsRest.data.cast
        })
    }

    useEffect(() => {
        getMovieDetails()
    }, []);

    return ({
        ...state
    })
}
