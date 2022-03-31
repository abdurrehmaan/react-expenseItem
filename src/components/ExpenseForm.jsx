import React,{useState} from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {
    console.log("ExpenseForm -> props", props)
    const { onSubmit } = props;

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');



    const titleHandler=(e)=>{
        setTitle(e.target.value)
    }
    const dateeHandler=(e)=>{
        setDate(e.target.value)
    }
    const amountHandler=(e)=>{
        setAmount(e.target.value)
    }

    const submitExpense = () =>{
        const expenseData = {
            expenseTitle: title,
            expenseDate: date,
            expenseAmount: amount,
        }
        console.log("submitExpense -> expenseData", expenseData)

        setTitle('')
        setDate('')
        setAmount('')

        onSubmit(expenseData)
    }


  return (
    <div>
        <div className='expense-outdiv'>
            <div>
                <label htmlFor="">Title</label>
                <input type="text" name="" id="" value={title} onChange={titleHandler} />
            </div>
            <div>
                <label htmlFor="">Amount</label>
                <input type="text" name="" id="" value={amount}  onChange={amountHandler} />
            </div>
            <div>
                <label htmlFor="">Date</label>
                <input type="date" name="" id="" value={date}  onChange={dateeHandler}/>
            </div>
            <button className='expense-btn' onClick={submitExpense} >Submit Expense</button>
        </div>

    </div>
  )
}

export default ExpenseForm