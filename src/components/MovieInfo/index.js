import React, { useContext } from "react";
import PropTypes from "prop-types";

//Components
import Thumb from "../Thumb";
import Rate from "../Rate";

//Styles
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config"; 
import { Wrapper, Content, Text } from "./MovieInfo.styles";

//Image
import NoImage from "../../images/no_image.jpg";

//Context
import { Context } from "../../context";



//TODO: Make the height of the wrapper and the thumb consistent
const MovieInfo = ({ movie }) => {
    const [user] = useContext(Context);

return (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb 
                image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` 
                : NoImage}
                clickable={false}
            />

            <Text>
                <h1>{movie.title}</h1>
                <h3>PLOT</h3>
                <p>{movie.overview}</p>   

                <div className="rating-directors">
                    <div>
                        <h3>RATING</h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>
                    <div className="director">
                        <h3>DIRECTOR{movie.directors.legnth > 1 ? 'S' : ''}</h3>
                        {movie.directors.map(director => (
                            <p key={director.credit_id}>{director.name}</p>
                        ))}

                    </div>
                
                </div>
                {user &&  (
                    <div className="rate">
                        <br/>
                        <h3>RATE MOVIE</h3>
                        <Rate movie={movie} />
                    </div>   
                    )}    
            </Text>
        </Content>
    </Wrapper>

)};

MovieInfo.propTypes = {
    movie: PropTypes.object
}

export default MovieInfo;