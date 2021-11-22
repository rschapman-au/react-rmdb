import React from 'react';
import { useParams } from 'react-router-dom';


//Components
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import ActorInfo from './ActorInfo';

//Hook
import { useActorFetch } from '../hooks/useActorFetch';


const ActorProfile = () => {
    const { actorId } = useParams();
    const { state: actor, loading, error } = useActorFetch(actorId)

    if (loading) return <Spinner/>;
    if (error) return <div>Something went wrong... </div>;
    
    return (
        <>
            <BreadCrumb movieTitle={actor.name}/>
            <ActorInfo actor={actor}/>
        </>
    )

}
export default ActorProfile;