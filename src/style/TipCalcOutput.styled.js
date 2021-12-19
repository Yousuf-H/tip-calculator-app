import styled from "styled-components";

export const Conatiner = styled.div`
  width: 413px;
  height: 417px;
  background-color: #00474B;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
export const Wrapper = styled.div`
  width: 100%;
`
export const Span = styled.div`
  h3 {
    color: #fff;
    line-height: 30px;
  }

  p {
    color: #7F9D9F;
  }
`
export const TipAmount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`
export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`
export const Amount = styled.div`
  font-size: 48px;
  color: #26C2AE;
`
export const RestBtn = styled.button`
  width: 333px;
  height: 48px;
  border: none;
  border-radius: 5px;
  background-color: #26C2AE;
  color: #00474B;
  cursor: pointer;
  font-size: 20px; 

  &:hover {
    background-color: #9FE8DF;
  }
`



