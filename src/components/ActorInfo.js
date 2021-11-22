import React from 'react';
import { useParams } from 'react-router-dom';

//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

//Components
import Spinner from './Spinner';
import Actor from './Actor';

//Hook
import { useActorFetch } from '../hooks/useActorFetch';

//Image
import NoImage from "../images/no_image.jpg";

const ActorInfo = () => {
    const { actorId } = useParams();
    const { state: actor, loading, error } = useActorFetch(actorId)

    if (loading) return <Spinner/>;
    if (error) return <div>Something went wrong... </div>;
    
    return (

        <>
            <Actor 
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
                actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
            actorId={actor.id}
            />
            <p> {actor.biography} </p>
            <p> {actor.birthday}</p>
            <p> {actor.place_of_birth}</p>

        </>
    )

}
export default ActorInfo;