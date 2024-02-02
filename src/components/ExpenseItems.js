import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetalis";
import "./ExpenseItem.css";

function ExpenseItems(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        location={props.location}
        amount={props.amount}
      />
    </div>
  );
}

export default ExpenseItems;
