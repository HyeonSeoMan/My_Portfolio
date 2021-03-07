import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrap = styled.div`
  display: flex;
  font-size: 17px;
  color: #828282;
  padding: 12px;
  margin-bottom: 50px;
`;
const LeftWrap = styled.div`
`;
const MyName = styled(Link)`
  cursor: pointer;
  font-size: 20px;
  color: ${props => props.loca === '/' ? "white" : "black"};
  font-weight: 600;
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;
const MyWork = styled.div`
  font-size: 14px;
  font-weight: 400;
`;
const RightWrap = styled.div`
  margin-left: auto;
  display: flex;
`;
const MyInfo = styled.div`
  cursor: pointer;
  margin: 0 6px;
`;
const ToProjects = styled(Link)`
  cursor: pointer;
  margin: 0 6px;
  color: ${props => props.loca !== '/about' ? props.loca === '/' ? "white" : "black" : "#828282"};
  font-weight: ${props => props.loca !== '/about' ? "600" : "400"};
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;
const StyledLink = styled(Link)`
  cursor: pointer;
  margin: 0 6px;
  color: ${props => props.loca === '/about' ? "black" : "#828282"};
  font-weight: ${props => props.loca === '/about' ? "600" : "400"};
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

function copyToClipboard() {
  var t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = 'rmsry123@gmail.com';
  t.select();
  document.execCommand('copy');
  document.body.removeChild(t);
  alert('클립보드에 복사되었습니다.')
}

const Header = (props) => {
  return (
    <>
      <HeaderWrap>
        <LeftWrap >
          <MyName 
            to="/" 
            loca = {props.location}
          >
            HyeonSeo Jeong
          </MyName>
          <MyWork>Frontend Developer</MyWork>
        </LeftWrap>
        <RightWrap>
          <ToProjects 
            to="/"
            loca = {props.location}
          >
            Projects
          </ToProjects>
          <StyledLink 
            to="/about"
            loca = {props.location}
          >
            About/Contact
          </StyledLink>
          <MyInfo>
            <a href="https://github.com/HyeonSeoMan">
              <img src="/images/icon/ico_github.png" style={{ height:'24px' }} />
            </a>
          </MyInfo>
          <MyInfo onClick= { copyToClipboard }>
            <img src="/images/icon/ico_mail.png" style={{ height:'24px' }} />
          </MyInfo>
        </RightWrap>
      </HeaderWrap>
    </>
  );
};

export default Header;