import React from 'react';
import { useParams } from 'react-router-dom';

//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

//Components
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import Thumb from './Thumb';

//Hook
import { useActorFetch } from '../hooks/useActorFetch';

//Image
import NoImage from "../images/no_image.jpg";

const ActorProfile = () => {
    const { actorId } = useParams();
    const { state: actor, loading, error } = useActorFetch(actorId)

    if (loading) return <Spinner/>;
    if (error) return <div>Something went wrong... </div>;
    
    return (

        <>
            <BreadCrumb movieTitle={actor.name}/>
            <Thumb 
            image={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
            : NoImage}
            clickable={false}
            />
            <p> {actor.biography} </p>
            <p> {actor.birthday}</p>
            <p> {actor.place_of_birth}</p>

        </>
    )

}
export default ActorProfile;