import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as D from "../styles/styledDetail";

const Detail = ({ dataList }) => {
  const navigate = useNavigate();

  const { postId } = useParams();

  const goBack = () => {
    navigate(`/`);
  };

  const post = postId
    ? dataList.find((item) => item.postId === parseInt(postId))
    : null;

  return (
    <D.Container>
      <D.BackBtn onClick={goBack}>
        <img
          src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
          alt="back"
          width="35px"
        />
      </D.BackBtn>
      <D.Title>{post && post.title}</D.Title>
      <D.ContentBox>{post && post.content}</D.ContentBox>
      <D.DeleteBtn>삭제하기</D.DeleteBtn>
    </D.Container>
  );
};

export default Detail;
