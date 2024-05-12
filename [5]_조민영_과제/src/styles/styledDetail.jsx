import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 390px;
  height: 98vh;
  background: #fffef1;
`;
export const BackBtn = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;
export const Title = styled.div`
  width: 300px;
  height: 6vh;
  border-bottom: 1px solid #000;
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
  background: #ffebc5;
  font-family: Inter;
`;
export const DeleteBtn = styled.div`
  margin-top: 4vh;
  width: 220.592px;
  height: 5vh;
  border-radius: 20px;
  background: #dbf6ff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  text-align: center;
  font-family: Inter;
  font-size: 17px;
  line-height: 2;
`;
