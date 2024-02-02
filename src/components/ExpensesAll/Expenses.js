import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  const expenses = [
    {
      title: " Car",
      amount: "2500",
      date: new Date(2021, 2, 28),
      location: "baroda",
    },
    {
      title: "Mobile",
      amount: 230,
      date: new Date(2021, 2, 28),
      location: "surat",
    },
    {
      title: "house EMI",
      amount: 2500,
      date: new Date(2021, 2, 28),
      location: "jamnagar",
    },
    {
      title: "Food",
      amount: 650,
      date: new Date(2021, 2, 28),
      location: "rajkot",
    },
  ];

  return (
    <Card className="expenses">
      {expenses.map((expense, index) => (
        <ExpenseItems
          key={index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      ))}
    </Card>
  );
}

export default Expenses;
