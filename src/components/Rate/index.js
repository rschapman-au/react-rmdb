import React, {useState, useContext} from "react";
import { Wrapper, Content } from "./Rate.styles";
import Button  from "../Button"
import API from "../../API"

//Context
import { Context } from "../../context";

const Rate = ({ movie }) => {
    const [value, setValue] = useState(5);
    const [user] = useContext(Context);

    const handleRating = async (value) => {
        const rate = await API.rateMovie(user.sessionId, movie.id, value)
        console.log(rate)
    }

    return (
        <Wrapper>
            <Content>
               
                    <div className = 'slider'>
                    <input 
                        type='range'
                        min='1'
                        max='10'
                        value={value}
                        onChange={e => setValue(Number(e.currentTarget.value))}
                        
                    /> 
                    <p>{value}</p>
                    </div>
                <div>
                    <Button text='Rate' callback = {()=>handleRating(value)}/>
                </div>
                
            </Content>
        </Wrapper>
    )
}

export default Rate;