import React from "react";

//Helpers
import { calcTime, convertMoney } from "../../helpers";

//Styles - <p>Revenue: {revenue!=0 ? ({convertMoney(revenue)}) : null}</p>
import { Wrapper, Content } from "./MovieInfoBar.styles";

const MovieInfoBar = ({ time, budget, revenue }) => {
return (
    <>
    <Wrapper>
        <Content>
            <div className="column">
                <p>Running Time: {calcTime(time)}</p>
            </div>
            <div className="column">
                {budget > 0 ? (
                <p>Budget: {convertMoney(budget)}</p>
                    ): 
                <p>Budget: Not available</p>
                }
            </div>
            <div className="column">
                {revenue > 0 ? (
                <p>Revenue: {convertMoney(revenue)}</p>
                    ): 
                <p>Revenue: Not available</p>
                }
            </div>
           
        </Content>
    </Wrapper>
    </>
);
}
export default MovieInfoBar;

