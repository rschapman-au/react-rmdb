import React from "react";
import PropTypes from "prop-types";

//Components

//Styles
import { Wrapper, Content, Text } from "./ActorInfo.styles";




//TODO: Make the height of the wrapper and the thumb consistent
const ActorInfo = ({ actor }) => {


return (
    <Wrapper backdrop={actor.profile_path}>
        <Content>
            <Text>
                <h1>{actor.name}</h1>
                <div className="rating-directors">
                    <div>
                        <h3>AGE</h3>
                        <div className="score">{actor.gender}</div>
                    </div>
                    <div className="director">
                        <h3>DATE OF BIRTH</h3>
                        <p>{actor.birthday}</p>
                    </div>
                </div>  

                <h3>BIOGRAPHY</h3>
                <p>{actor.biography}</p>   

                
            </Text>
        </Content>
    </Wrapper>

)};

ActorInfo.propTypes = {
    actor: PropTypes.object
}

export default ActorInfo;