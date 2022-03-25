import React from 'react'
import './ExenseItem.css'

function ExpenseItem(props) {
  // console.log("ExpenseItem -> props", props)
  const {title, amount, date} = props;
  

  // const expenseData = 'March 24th, 2022'
  // const expenseTitle = 'Devnation-Payment'
  // const expenseAmount = '5000'

  return (
    <>
      <div className='outerdiv'>
        <div className="expense-item">
          <div>{date}</div>
          <div className="expenseItem-detail">
            <h2>{title}</h2>
            <div>Rs. {amount}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExpenseItem
