import React from "react";
import PropTypes from "prop-types";
//Styles
import { Wrapper, Content } from "./Grid.styles";

const Grid = ({ header, children, gridWidth }) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content gridWidth={gridWidth}>{children}</Content>
    </Wrapper>
)

Grid.propTypes = {
    header: PropTypes.string,
    children: PropTypes.array,
    gridWidth: PropTypes.string
}
export default Grid;