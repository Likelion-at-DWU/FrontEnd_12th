import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 390px;
  height: 98vh;
  background: #fff2c6;
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
  font-family: Inter;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
`;
export const ContentBox = styled.div`
  margin-top: 4vh;
  width: 300px;
  height: 50vh;
  border-radius: 5px;
  background: white;
  font-family: Inter;
  border: 1px solid #5f5f5f;
  border-radius: 0px, 0px, 30px, 0px;
`;
export const SendBtn = styled.div`
  margin-top: 4vh;
  width: 30vw;
  height: 5vh;
  border-radius: 20px;
  background: #fffef1;
  border: 1px solid #5f5f5f;
  text-align: center;
  font-family: Inter;
  font-size: 24px;
  line-height: 2;
`;
