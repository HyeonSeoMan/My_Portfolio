import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Left = styled.div`
  font-size: 30px;
  font-weight: 600;
`;
const Right = styled.div`
  margin-left: auto;
`;

const StyledLink = styled(Link)`
  display: flex;
  margin: 25px 10px;
  color: ${props => props.selected == props.idx ? "white" : "#828282"};
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

const ProjectsBox = (props) => {
  return (
    <>
      <StyledLink 
      to={"/projectDetail/" + props.title}
      selected = {props.selectedIdx}
      idx = {props.idx}
      onMouseOver={ () => props.setIdx(props.idx) }
      >
        <Left>{props.title}</Left>
        <Right>{props.skill}</Right>
      </StyledLink>
    </>
  );
};

export default ProjectsBox;