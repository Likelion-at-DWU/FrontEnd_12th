import React from "react";
import { useNavigate } from "react-router-dom";
import * as H from "../styles/styledHome";

const Home = ({ dataList }) => {
  const navigate = useNavigate();
  const goSend = () => {
    navigate(`/send`);
  };

  return (
    <H.Container>
      <H.Line>
        <H.Logo>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.svg`}
            alt="logo"
            width="70px"
          />
        </H.Logo>
        <H.Title>
          🦁DWU x LIKELION🦁
          <br />
          LETTER
        </H.Title>
        <H.LetterWrapper>
          {dataList.map((e) => (
            <H.Letter
              key={e.postId}
              onClick={() => navigate(`/detail/${e.postId}`)}
            >
              {e.title}
            </H.Letter>
          ))}
        </H.LetterWrapper>

        <H.PostBox>
          <div id="postText">POST</div>
          <hr />
          <H.SendBtn onClick={goSend}>
            <div id="heart">❤️</div>
            <div id="goText">편지 보내러 가기</div>
          </H.SendBtn>
        </H.PostBox>
      </H.Line>
    </H.Container>
  );
};

export default Home;