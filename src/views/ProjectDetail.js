import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const MainsWrap = styled.div`
  color: black;
`;
const Header = styled.div`
  display: flex;
`;
const LeftHeader = styled.div`
  flex: 1;
`;
const RightHeader = styled.div`
  flex: 1;
`;

function ProjectDetail({ match }) {
  const project = useSelector(state => state.projects).find(ele => ele.title === match.params.title);

  useEffect(() => {
    console.log(project);
  });

  return (
    <MainsWrap>
      <Header>
      <LeftHeader>
        <div>project NO.{project.idx + 1}</div>
        <div>{project.title}</div>
        <div>{project.summary}</div>
      </LeftHeader>
      <RightHeader>
        <img src= { "/images/content/" +  project.images[0]} style={{ height:'200px' }}/>
        </RightHeader>
      </Header>
      {project.images.map( (img, idx) => (
        <div key={idx}>
          <img src= { "/images/content/" +  img} style={{ height:'200px' }}/>
        </div>
      ))}
      <div>{project.detail}</div>
    </MainsWrap>
  );
}

export default ProjectDetail;