import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const expenses = [
    {
      title: " Car",
      amount: 2500,
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

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  console.log(props.items);
  const filteredExpenses = props.items.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      {filteredExpenses.length === 0 ? (
        <p>No expense found</p>
      ) : filteredExpenses.length === 1 ? (
        <p>Only one expense found</p>
      ) : (
        filteredExpenses.map((expense, index) => (
          <ExpenseItems
            items={filteredExpenses}
            key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
          />
        ))
      )}
    </Card>
  );
};

export default Expenses;
