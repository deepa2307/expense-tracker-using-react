import ExpenseItems from "./components/ExpenseItems";

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

  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map((expense, index) => (
        <ExpenseItems
          key={index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      ))}
    </div>
  );
}

export default App;
