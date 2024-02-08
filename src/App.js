import { useState } from "react";
import Expenses from "./components/ExpensesAll/Expenses";
import NewExpense from "./components/newExpenseInput/NewExp";

const InitialExpense = [
  {
    id: "e1",
    title: " Car",
    amount: "2500",
    date: new Date(2021, 2, 28),
    location: "baroda",
  },
  {
    id: "e2",
    title: "Mobile",
    amount: 230,
    date: new Date(2021, 2, 28),
    location: "surat",
  },
  {
    id: "e3",
    title: "house EMI",
    amount: 2500,
    date: new Date(2022, 2, 28),
    location: "jamnagar",
  },
  {
    id: "e4",
    title: "Food",
    amount: 650,
    date: new Date(2021, 2, 28),
    location: "rajkot",
  },
];

function App() {
  const [expenses, setExpenses] = useState(InitialExpense);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      console.log(prevExpenses);
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />;
    </div>
  );
}

export default App;
