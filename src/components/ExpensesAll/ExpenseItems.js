import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import ExpenseDetails from "./ExpenseDetalis";
import "./ExpenseItem.css";
import React, { useState } from "react";

const ExpenseItems = (props) => {
  const [amount, setAmount] = useState(props.amount);

  const clickHandle = () => {
    setAmount("100");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        location={props.location}
        amount={amount}
      />
      <button onClick={clickHandle}> $100 </button>
    </Card>
  );
};

export default ExpenseItems;
