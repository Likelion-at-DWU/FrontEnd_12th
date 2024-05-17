import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 390px;
  height: 844px;
  background: #fff2c6;
`;

export const BackBtn = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const SmallContainer = styled.div`
  felx-direction: row;
`;
export const Title = styled.div`
  flex-direction: row;
  margin-top: 10vh;
  margin-right: 8vh;
  color: #5f5f5f;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Input = styled.input`
  background: none;
  border: none;
  width: 155px;
  height: 37px;
  flex-shrink: 0;
  border-bottom: 1px solid #000;
`;

export const SendBtn = styled.div`
  margin-top: 4vh;
  width: 274px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid #5f5f5f;
  background: #fffef1;
  color: #5f5f5f;
  text-align: center;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ContentBox = styled.div`
  margin-top: 4vh;
  width: 274px;
  height: 423px;
  flex-shrink: 0;
  border-radius: 0px 0px 30px 0px;
  border: 1px solid #5f5f5f;
  background: #fff;
  color: #5f5f5f;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
`;

export const Content = styled.input`
  border: none;
`;