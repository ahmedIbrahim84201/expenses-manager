import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import React, { useState } from "react";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "car Insurance",
    amount: 98.2,
    date: new Date(2019, 1, 14),
  },
  {
    id: "e2",
    title: "toilet paper",
    amount: 99.99,
    date: new Date(2021, 8, 20),
  },
  {
    id: "e3",
    title: "Bank",
    amount: 59.8,
    date: new Date(2020, 5, 14),
  },
  {
    id: "e4",
    title: "Note books",
    amount: 10.99,
    date: new Date(2022, 11, 14),
  },
];
function App() {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
