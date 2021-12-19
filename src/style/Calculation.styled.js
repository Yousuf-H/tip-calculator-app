import styled from "styled-components";

export const Conatiner = styled.div`
  width: 920px;
  height: 481px;
  background-color: #fff;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;


  @media only screen and (max-width: 768px) {
    /* background: red; */
    width: 100%;
    height: 481px;
  }
`