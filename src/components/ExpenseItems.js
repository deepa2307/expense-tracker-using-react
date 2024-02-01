import "./ExpenseItem.css";

function ExpenseItems() {
  const expenseDate = new Date(2021, 2, 23);
  const expenseTitle = "Car insurance";
  const expenseAmount = 225;
  const expenseLocation = "rajkot";

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__description">{expenseLocation}</div>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
