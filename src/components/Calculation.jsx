import React, { useState } from 'react'
import { Conatiner } from '../style/Calculation.styled'
import TipCalcInput from './TipCalcInput'
import TipCalcOutput from './TipCalcOutput'

const Calculation = () => {
  const [billAmount, setBillAmount] = useState('')
  const [peopleAmount, setPeopleAmount] = useState('')
  const [tipPerPersonAmount, setTipPerPersonAmount] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)
  const [lessThanZero, setLessThanZero] = useState(false)
  const [billError, setBillError] = useState(false)
  const [peopleError, setPeopleError] = useState(false)
  const [customPercent, setCustomPercent] = useState('')

  // Tip Input Handler (onChange)
  const tipInputHandler = (e) => {
    const regExp = /^\d*\.?\d*$/
    const value = e.target.value

    if(regExp.test(value)) {
      setBillAmount(value)
    } 
  } 
  
  // People Input Handler (onChange)
  const peopleInputHandler = (e) => {
    const RegExp = /^\d*\.?\d*$/
    const value = e.target.value
    
    if(RegExp.test(value)){
      setPeopleAmount(value)
    } 
    
    if(value < 1 || value === ''){
      setLessThanZero(true)
    } else {
      setLessThanZero(false)
    }
  } 

  // Tip Handler (onClick)
  const tipHandler = (e) => {
    const btnValue = e.target.value
    const tipPercentage =  parseFloat(btnValue / 100)

    if (billAmount && peopleAmount) {
      if(billAmount < 1 || peopleAmount < 1) return 

      const tipPerPerson = parseFloat((tipPercentage * billAmount) / peopleAmount).toFixed(2)
      const total = parseFloat(billAmount / peopleAmount ) + parseFloat(tipPerPerson)
      // Tip Per Person
      setTipPerPersonAmount(tipPerPerson)
      // // Total Price
      setTotalAmount(total.toFixed(2))
      setBillError(false)
      setPeopleError(false)
    } else {
      console.log('fill in the bill amount and people')
      
      if(!billAmount) {
        setBillError(true)
      } else {
        setBillError(false)
      }
      if(!peopleAmount) {
        setPeopleError(true)
      } else {
        setPeopleError(false)
      }
    }
  } 

  // Rest Handler
  const restHandler = () => {
    setBillAmount('')
    setPeopleAmount('')
    setTipPerPersonAmount(0)
    setTotalAmount(0)
    setLessThanZero(false)
    setBillError(false)
    setPeopleError(false)
  }

  // CUSTOM input
  const customInputHandler = (e) => {
    const regExp = /^\d*\.?\d*$/
    const value = e.target.value

    if(regExp.test(value)) {
      setCustomPercent(value)
    } 
  }

  
  return (
    <Conatiner>
      {/* Tip Input Container */}
      <TipCalcInput 
        billAmount={billAmount} 
        setBillAmount={setBillAmount} 
        peopleAmount={peopleAmount} 
        setPeopleAmount={setPeopleAmount}
        tipInputHandler={tipInputHandler}
        peopleInputHandler={peopleInputHandler}
        tipHandler={tipHandler}
        lessThanZero={lessThanZero}
        billError={billError}
        peopleError={peopleError}
        customPercent={customPercent}
        customInputHandler={customInputHandler}/>

      {/* Tip output Container */}
      <TipCalcOutput 
        tipPerPersonAmount={tipPerPersonAmount}
        totalAmount={totalAmount}
        restHandler={restHandler}/>
    </Conatiner>
  )
}

export default Calculation