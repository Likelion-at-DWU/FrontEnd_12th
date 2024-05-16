import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/styledSend";

const Send = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [makeListCalled, setMakeListCalled] = useState(false);

  const makeList = () => {
    console.log("제목:", input1);
    console.log("내용:", input2);
    setMakeListCalled(true);
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
        편지 제목:
        <input
          style={{
            border: "none",
            borderBottom: "1px solid black",
            background: "#fff2c6",
          }}
          type="text"
          value={input1}
          placeholder="제목 입력"
          onChange={(e) => setInput1(e.target.value)}
        />
      </S.Title>
      <S.ContentBox>
        <input
          style={{ border: "none", width: "250px" }}
          type="text"
          value={input2}
          placeholder="내용 입력"
          onChange={(e) => setInput2(e.target.value)}
        />
      </S.ContentBox>
      <S.SendBtn onClick={makeList}>전송하기</S.SendBtn>
      {makeListCalled && true}
    </S.Container>
  );
};

export default Send;
