import React from 'react'
import { Conatiner, Span, Wrapper, Amount, TipAmount, Total, RestBtn } from '../style/TipCalcOutput.styled'

const TipCalcOutput = (props) => {
  const { tipPerPersonAmount, totalAmount, restHandler } = props

  return (
    <Conatiner>
      <Wrapper> 
        <TipAmount>
          <Span>
            <h3>Tip Amount</h3>
            <p>/Person</p>
          </Span>
          <Span>
            <Amount>{tipPerPersonAmount ? `$${tipPerPersonAmount}` : `$${0.00}`}</Amount>
          </Span>
        </TipAmount>

        {/* Total */}
        <Total>
        <Span>
            <h3>Total</h3>
            <p>/Person</p>
          </Span>
          <Span>
            <Amount>{totalAmount ? `$${totalAmount}` : `$${0.00}`}</Amount>
          </Span>
        </Total>
      </Wrapper>

      {/* Rest Button */}
      <RestBtn onClick={restHandler}>RESET</RestBtn>
    </Conatiner>
  )
}

export default TipCalcOutput