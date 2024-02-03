import Expenses from "./components/ExpensesAll/Expenses";
// import NewExpense from "./components/newExpenseInput/NewExpense";
import NewExpense from "./components/newExpenseInput/NewExp";

function App() {
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

  const addExpenseHandler = (expense) => {
    console.log("in app.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />;
    </div>
  );
}

export default App;
