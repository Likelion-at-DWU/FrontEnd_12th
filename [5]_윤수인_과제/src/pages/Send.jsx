import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "../styles/styledSend";

const Send = ({ dataList }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("내용 입력 ✏️");

  const goSend = () => {
    console.log("제목: ", title);
    console.log("내용: ", content);
  };

  const goBack = () => {
    navigate(`/`);
  };

  return (
    <S.Container>
      <S.BackBtn onClick={goBack}>
        <img
          src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
          alt="back"
          width="35px"
        />
      </S.BackBtn>
      <S.Title>
        편지제목:{" "}
        <S.InputBox
          type="text"
          value={title}
          onChange={(event) => {
            return setTitle(event.target.value);
          }}
        />
      </S.Title>

      <S.ContentBox>
        <S.Content
          type="text"
          value={content}
          onChange={(event) => {
            return setContent(event.target.value);
          }}
        />
      </S.ContentBox>
      <S.SendBtn onClick={goSend}>전송하기</S.SendBtn>
    </S.Container>
  );
};

export default Send;
