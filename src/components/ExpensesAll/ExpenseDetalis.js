import "./ExpenseDetails.css";

function ExpenseDetails(props) {
  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item">{props.location}</div>
      <div className="expense-item__price">${props.amount}</div>
      <button>Delete Expense</button>
    </div>
  );
}

export default ExpenseDetails;
