import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    margin: 0 auto;
`;

export const Content = styled.div`
    width: 100%auto;
    padding: 20px 40px;
    overflow: hidden;
    max-width: var(--maxWidth);

        
    .slider {
        display: flex;
        align-items: center;
        justify-content: center;

        input[type="range"] {
        outline: 0;
        border: 0;
        border-radius: 250px;
        width: 350px;
        
        margin: 24px 0 16px;
        transition: box-shadow 0.2s ease-in-out;
        background-color: var(--darkGrey);
        height: 30px;
        -webkit-appearance: none;
        

        ::-webkit-slider-runnable-track {
                height: 30px;
                -webkit-appearance: none;
                color: var(--medGrey);
                transition: box-shadow 0.2s ease-in-out;     
            }
        ::-webkit-slider-thumb {
                width: 30px;
                -webkit-appearance: none;
                height: 30px;
                cursor: pointer;
                background: var(--lightGrey);
                border-radius: 50%;
                transition: box-shadow 0.2s ease-in-out;
                position: relative;
                // top: 1px;
            }
        :active::-webkit-slider-thumb {
            background: var(--lightGrey);
            box-shadow: 0px 0 0 2px lightskyblue;
            //box-shadow: -340px 0 0 320px #1597ff, inset 0 0 0 3px #1597ff;
        }
        @media screen and (max-width: 768px) {
            width: 350px;
        }


    }
    }

    .rating-score {
        margin: 0 0 0 0px;
        align-items: center;
        justify-content: center;

        p {
            margin: 0;
        }
    }
`;