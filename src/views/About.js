import React from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.div`
  display: flex;
  font-size: 17px;
  color: #000000;
  margin: 15px 15px 60px 15px;
`;
const HeaderLeft = styled.div`
  font-size: 42px;
  font-weight: 600;
`;
const HeaderRight = styled.div`
  margin-left: auto;
  font-size: 20px;
  font-weight: 400;
`;
const EmailWrap = styled.div`
  margin: 15px;
  font-size: 22px;
  color: #000000;
`;
const EmailWrapText = styled.div`
  margin: 10px 0 20px 0;
  width: 450px;
`;
const EmailButton = styled.div`
  background-color: rgba(0,0,0,0.05);
  padding: 7px 15px 8px 15px;
  border-radius: 4px;
  font-weight: 400;
  display: inline-block;
  cursor: pointer;
  &:hover {
    background-color: rgba(0,0,0,0.03);
    color: #828282;
  }
`;
const IntroWrap = styled.div`
  margin: 50px 15px 15px 15px;
  font-size: 30px;
  color: #000000;
`;
const StackWrap = styled.div`
  margin: 20px 15px 15px 15px;
  font-size: 22px;
  color: #000000;
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

const About = () => {
  return (
    <div>
      <HeaderWrap>
        <HeaderLeft>HyeonSeo Man</HeaderLeft>
        <HeaderRight>
          <div>Birth : 1996.03.25</div>
          <div>Adress : 경기도 광주시</div>
          <div>Phone : 010 - 7125 - 5736</div>
        </HeaderRight>
      </HeaderWrap>
      <EmailWrap>
        <EmailWrapText>
          저의 포트폴리오가 마음에 드시나요? 함께 더 좋은 것들을 만들 기회가 있으면 좋겠어요. <br/>아래 이메일로 연락주세요!
        </EmailWrapText>
        <EmailButton onClick= { copyToClipboard }>
          rmsry123@gmail.com
        </EmailButton>
      </EmailWrap>
      <IntroWrap>
        자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글 자기소개 글  
      </IntroWrap>
      <StackWrap>
        기술 스택 들갈거임
      </StackWrap>
    </div>
  );
};

export default About;