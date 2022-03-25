import React from 'react'
import Card from '../components/Card'
import ExpenseItem from './ExpenseItem'

function Expense(props) {
    const { data } = props;
    return (
        <div>
            <Card className='expense'>
                <ExpenseItem title={data[0].title} amount={data[0].amount} date={data[0].date} />
                <ExpenseItem title={data[1].title} amount={data[1].amount} date={data[1].date} />
                <ExpenseItem title={data[2].title} amount={data[2].amount} date={data[2].date} />
                <ExpenseItem title={data[3].title} amount={data[3].amount} date={data[3].date} />
                <ExpenseItem title={data[4].title} amount={data[4].amount} date={data[4].date} />
            </Card>
        </div>
    )
}
export default Expense
