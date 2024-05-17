import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/styledSend";

const Send = ({ dataList }) => {
  const navigate = useNavigate();

  const [text, setText] = useState("내용 입력✏️");
  const [name, setName] = useState("");

  const goSend = () => {
    console.log("제목:", name);
    console.log("내용:", text);
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
      <S.SmallContainer>
        <S.Title>
          편지 제목:
          <S.Input
            type="text"
            value={name}
            onChange={(event) => {
              return setName(event.target.value);
            }}
          />
        </S.Title>
      </S.SmallContainer>
      <S.ContentBox>
        <S.Content
          type="text"
          value={text}
          onChange={(event) => {
            return setText(event.target.value);
          }}
          onFocus={() => {
            setText("");
          }}
        />
      </S.ContentBox>
      <S.SendBtn onClick={goSend}>전송하기</S.SendBtn>
    </S.Container>
  );
};

export default Send;