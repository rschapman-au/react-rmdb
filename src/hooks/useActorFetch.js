import { useState, useEffect } from "react";

// API
import API from "../API";

//Helpers
import { isPersistedState } from "../helpers";


export const useActorFetch = (actorId) => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchActor = async () => {
            try {
                setLoading(true);
                setError(false);

                const actor = await API.fetchActor(actorId);

                setState({
                    ...actor
                })

            setLoading(false);   
            } catch(error) {
                setError(true);
            }
            setLoading(false);

        };
        
        //Return actor from session if it exists
        const sessionState = isPersistedState('p'+actorId);
        if (sessionState) {
            setState(sessionState);
            setLoading(false); 
            console.log('Getting individual actor from sessionState');
            return;
        };

        fetchActor();
        console.log('Getting individual actor from API');

    },[actorId])

    //Write to session storage for individual actor
    useEffect(() => {
        sessionStorage.setItem('p'+actorId, JSON.stringify(state));
    }, [actorId, state]);
    
return { state, loading, error };
}
