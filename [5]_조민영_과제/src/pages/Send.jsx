import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/styledSend";

const Send = ({ dataList }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(""); 
  const [content, setContent] = useState("내용 입력 ✏️");


  const goBack = () => {
    navigate(`/`);
  };

  const handleSend = () => {
    console.log("제목:", title);
    console.log("내용:", content);
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
      <S.Title>편지제목: <S.CustomInput type="text" value={title} onChange={(e) => setTitle(e.target.value)}/> 
      </S.Title>
      <S.ContentBox><S.StyledTextarea type = "text" value={content} onChange={(e) => setContent(e.target.value)} onFocus={() => setContent("")} />
      </S.ContentBox>
      <S.SendBtn onClick={handleSend}>전송하기</S.SendBtn>
    </S.Container>
  );
};

export default Send;