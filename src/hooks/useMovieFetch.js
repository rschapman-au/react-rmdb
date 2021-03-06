import { useState, useEffect } from "react";
//import { useRoutes } from "react-router";
import API from "../API";

//Helpers
import { isPersistedState } from "../helpers";

export const useMovieFetch = movieId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true);
                setError(false);

                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);
                // Get directors only
                const directors = credits.crew.filter(
                    member => member.job === 'Director'
                );
                console.log(credits);

                setState({
                    ...movie, 
                    actors: credits.cast,
                    directors: directors
                })

                setLoading(false);
            } catch (error) {
                setError(true);
            }

        };

        const sessionState = isPersistedState(movieId);
        if (sessionState) {
            setState(sessionState);
            setLoading(false); 
            console.log('Getting individual movie from sessionState');
            return;
        };

        fetchMovie();
        console.log('Getting individual movie from API');

    }, [movieId])


    //Write to session storage for individual movie
    useEffect(() => {
        sessionStorage.setItem(movieId, JSON.stringify(state));
    }, [movieId, state]);

    return { state, loading, error };
}
