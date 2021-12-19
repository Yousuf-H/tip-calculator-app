import styled from "styled-components";
import dollar from '../Assets/icon-dollar.svg'

export const Conatiner = styled.div`
  width: 413px;
  height: 417px;
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media only screen and (max-width: 768px) {
    /* background: red; */
    width: 50%;
    height: 481px;
    /* background: red; */
  }
`

export const Wrapper = styled.div`
  /* border: 2px black solid; */
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  /* border: 2px red solid;  */
  color: #5E7A7D;
`

export const TipInput = styled.input`
  /* border: 2px green solid; */
  height: 38px;
  font-size: 24px; 
  color: #00474B;
  text-align: right;
  padding: 10px;
  background-color: #F3F9FA;
  margin-top: 15px;
  border-radius: 5px;
  border: none;
  padding-left: 25px;
  /* background: url(dollar) no-repeat left; */
  background: url('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstyle.protime.eu%2Fuploads%2Fimages%2FDollar-Grey.png&f=1&nofb=1') no-repeat left;
  background-size: 20px;

  &:focus {
    outline: 2px #26C2AE solid;
    border-radius: 5px;
  }
`

export const SelectTip = styled.span`
  /* border: 2px green solid; */
  color: #5E7A7D;
`
export const Select = styled.div`
  /* border: 2px red solid; */
  text-align: center;
  background-color: #fff;
  color: #444;
  margin-top: 15px;
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr; 
  gap: 10px 25px; 
  grid-template-areas: 
    "button1 button2 button3"
    "button4 button5 input"; 
  
  @media only screen and (max-width: 768px) {
    background: red;
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr 1fr; 
    gap: 10px 5px; 
    grid-template-areas: 
    "button1 button2"
    "button3 button4"
    "button5 input"; 
  }
`
// Button 1
export const TipBtn1 = styled.button`
  grid-area: button1; 
  border: none;
  width: 117px;
  height: 48px;
  font-size: 26px;
  margin: 1px;
  cursor: pointer;
  border-radius: 5px;
  color: #fff;
  background-color: #00474B;

  &:hover {
    background-color: #9FE8DF;
    color: #00474B;
  }
`
// button 2
export const TipBtn2 = styled.button`
  grid-area: button2;
  border: none;
  width: 117px;
  height: 48px;
  font-size: 26px;
  margin: 1px;
  cursor: pointer;
  border-radius: 5px;
  color: #fff;
  background-color: #00474B;

  &:hover {
    background-color: #9FE8DF;
    color: #00474B;
  }
`
// button 3
export const TipBtn3 = styled.button`
  grid-area: button3;
  border: none;
  width: 117px;
  height: 48px;
  font-size: 26px;
  margin: 1px;
  cursor: pointer;
  border-radius: 5px;
  color: #fff;
  background-color: #00474B;

  &:hover {
    background-color: #9FE8DF;
    color: #00474B;
  }
`
// button 4
export const TipBtn4 = styled.button`
  grid-area: button4;
  border: none;
  width: 117px;
  height: 48px;
  font-size: 26px;
  margin: 1px;
  cursor: pointer;
  border-radius: 5px;
  color: #fff;
  background-color: #00474B;

  &:hover {
    background-color: #9FE8DF;
    color: #00474B;
  }
`
// button 5
export const TipBtn5 = styled.button`
  grid-area: button5;
  border: none;
  width: 117px;
  height: 48px;
  font-size: 26px;
  margin: 1px;
  cursor: pointer;
  border-radius: 5px;
  color: #fff;
  background-color: #00474B;

  &:hover {
    background-color: #9FE8DF;
    color: #00474B;
  }
`
// custon tip input
export const CustomTip = styled.input`
  border: none;
  padding: 10px;
  width: 117px;
  height: 48px;
  text-align: right;
  font-size: 24px;
  cursor: pointer;
  border-radius: 5px;
  color: #547878;
  background-color: #F3F9FA;

  &::placeholder {
    color: #547878; 
  }

  &:focus {
    outline: 2px #26C2AE solid;
    border-radius: 5px;
  }
`

export const Span = styled.span`
  display: flex;
  justify-content: space-between;
`
export const Error = styled.span`
  color: #E17457;
`
export const PeopleInput = styled.input`
  height: 38px;
  border: none;
  font-size: 24px; 
  text-align: right;
  padding: 10px;
  background-color: #F3F9FA;
  margin-top: 15px;
  padding-left: 25px;
  background: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.women-in-technology.com%2Fhubfs%2FCORE-Maddox%2Fimages%2FPersonPlaceholder.png&f=1&nofb=1") no-repeat left;
  background-size: 20px;
  color: #00474B;
  
  &:focus {
    outline: 2px #26C2AE solid;
    border-radius: 5px;
  }
`
