import React from "react";
//Styles
import { Wrapper, Content } from "./Grid.styles";

const Grid = ({ header, children, gridWidth }) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content gridWidth={gridWidth}>{children}</Content>
    </Wrapper>
)

export default Grid;