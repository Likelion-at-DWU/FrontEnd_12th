import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 390px;
  height: 98vh;
  background: #FFF2C6;
`;
export const BackBtn = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;
export const Title = styled.div`
  width: 300px;
  height: 6vh;
  margin-top: 10vh;
  color: #5F5F5F;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const ContentBox = styled.div`
  margin-top: 4vh;
  width: 300px;
  height: 50vh;
  border-radius: 0px 0px 30px 0px;
  border: 1px solid #5F5F5F;
  background: #FFF;
`;
export const SendBtn = styled.div`
  margin-top: 4vh;
  width: 274px;
  height: 5vh;
  border-radius: 20px;
  border: 1px solid #5F5F5F;
  background: #FFFEF1;
  text-align: center;
  font-family: Inter;
  font-size: 17px;
  line-height: 2;
  color: #5F5F5F;
`;

export const CustomInput = styled.input`
  background: #FFF2C6;
  width: 155px;
  height: 37px;
  flex-shrink: 0;
  border: none;
  border-bottom: 1px solid #000;
`;

export const StyleInput = styled.input`
  background: #FFF;
  width: 274px;
  height: 20px;
  flex-shrink: 0;
  border: none;
  resize: "vertical"
`;

export const StyledTextarea = styled.textarea`
  background: #FFF;
  width: 274px;
  height: 20px;
  flex-shrink: 0;
  border: none;
  white-space: pre-wrap;
`;