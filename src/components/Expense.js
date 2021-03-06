import React from 'react'
import Card from '../components/Card'
import ExpenseItem from './ExpenseItem'
import ExpenseForm from './ExpenseForm';

function Expense(props) {
    console.log("Expense -> props", props)
    const { data,onAddExpense } = props;

    const onSubmitExpenseData =(expenseData) => {
        console.log("Submit Expense =============>" , expenseData )
        const id= Math.random().toString()

        const expenseDataWithID ={
            ...expenseData, ...id
        }
        console.log("onSubmitExpenseData -> expenseDataWithID", expenseDataWithID)
        onAddExpense(expenseDataWithID)
    }

    return (
        <div>
            <ExpenseForm onSubmit = {onSubmitExpenseData} />
            <Card className='expense'>
                <ExpenseItem title={data[0].title} amount={data[0].amount} date={data[0].date} />
                {/* <ExpenseItem title={data[1].title} amount={data[1].amount} date={data[1].date} />
                <ExpenseItem title={data[2].title} amount={data[2].amount} date={data[2].date} />
                <ExpenseItem title={data[3].title} amount={data[3].amount} date={data[3].date} />
                <ExpenseItem title={data[4].title} amount={data[4].amount} date={data[4].date} /> */}
            </Card>
        </div>
    )
}
export default Expense
