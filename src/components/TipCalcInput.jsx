import React, { useState } from 'react'
import { Conatiner, Wrapper, Label, TipInput, 
        SelectTip, Select, TipBtn1,TipBtn2, TipBtn3, 
        TipBtn4, TipBtn5, CustomTip, Span, Error, PeopleInput } from '../style/TipCalcInput.styled'

const TipCalcInput = (props) => {
const { billAmount, 
      peopleAmount, tipInputHandler, 
      peopleInputHandler, tipHandler, 
      lessThanZero, billError, 
      peopleError,  customInputHandler, customPercent} = props

  return (
    <Conatiner>
      <Wrapper>
        <Span>
          <Label htmlFor='bill'>Bill</Label>
          <Error>{billError && 'This Field must be filled'}</Error>
        </Span>
        <TipInput type='number' min='0' id= 'bill' value={billAmount} onChange={tipInputHandler} placeholder='0'/>
      </Wrapper>

      <Wrapper>
        <SelectTip>Select Tip %</SelectTip>
        <Select>
          <TipBtn1 onClick={tipHandler} value='5'>5%</TipBtn1>
          <TipBtn2 onClick={tipHandler} value='10'>10%</TipBtn2>
          <TipBtn3 onClick={tipHandler} value='15'>15%</TipBtn3>
          <TipBtn4 onClick={tipHandler} value='25'>25%</TipBtn4>
          <TipBtn5 onClick={tipHandler} value='50'>50%</TipBtn5>
          <CustomTip onClick={tipHandler} type='number' min='0' id='peopleAmount' value={customPercent} onChange={customInputHandler} placeholder='Custom' />
        </Select>
      </Wrapper>


      <Wrapper>
        <Span>
          <Label htmlFor='peopleAmount'>Number of People</Label>
          <Error>{lessThanZero && 'Can\'t be Zero'}</Error>
          <Error>{peopleError && 'This Field must be filled'}</Error>
        </Span>
        <PeopleInput type='number' min='0' id='peopleAmount' value={peopleAmount} onChange={peopleInputHandler} placeholder='0'/>
      </Wrapper>
    </Conatiner>
  )
}

export default TipCalcInput