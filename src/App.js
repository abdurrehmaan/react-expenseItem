import './App.css';
import ExpenseItem from './ExpenseItem'

function App() {

  const expense = [
    {id:1, title: "Devnation-Payment", amount:'5000', date:"March 24th, 2022" },
    {id:2, title: "Book-Payment", amount:'6000', date:"July 24th, 2022" },
    {id:3, title: "Netflex Subscription", amount:'7000', date:"Aug 24th, 2022" },
    {id:4, title: "School Fee", amount:'8000', date:"Sep 24th, 2022" },
    {id:5, title: "Udemy Courset", amount:'12000', date:"Jan 24th, 2022" },
  ]

  return (
    <>
      <h1>React.js</h1>
      <h2>Welcome to react class</h2>

      <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date}/>
      <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date}/>
      <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date}/>
      <ExpenseItem title={expense[3].title} amount={expense[3].amount} date={expense[3].date}/>
      <ExpenseItem title={expense[4].title} amount={expense[4].amount} date={expense[4].date}/>
      

    </>
  );
}

export default App;
