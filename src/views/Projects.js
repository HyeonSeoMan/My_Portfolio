import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ProjectsBox from 'components/ProjectsBox';

const MainsWrap = styled.div`
  display: flex;
`;
const ProjectsWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const Title = styled.div`
  color: #828282;
`;
const ImgWrap = styled.div`
  flex: 1;
`;

function Projects() {
  const projects = useSelector(state => state.projects);
  const [selectedIdx, setIdx] = useState(0);

  return (
    <MainsWrap>
      <ProjectsWrap>
        <Title>Selected Project</Title>
        {projects.map( project => (
          <ProjectsBox
            key={project.idx}
            idx={project.idx}
            title={project.title}
            skill={project.skill}
            setIdx={setIdx}
            selectedIdx = {selectedIdx}
          />
        ))}
      </ProjectsWrap>
      <ImgWrap>
        <img src= { "images/content/" +  projects[selectedIdx]['images'][0]} style={{ height:'200px' }}/>
      </ImgWrap>
    </MainsWrap>
  );
}

export default Projects;