import React, { useState } from "react";
import "../App.css";
import Task from "./Task";
const date = new Date();
const Expense = () => {
  const [expense, setExpense] = useState([
    {
      msg: "",
      amount: 0,
      key: Math.random() * 10,
      by: "",
      date: date.getDate(),
    },
  ]);

  const handleExpense = (e, index) => {
    let data = [...expense];
    console.log(data);
    data[index][e.target.name] = e.target.value;
    setExpense(data);
  };

  const AddExpense = () => {
    let newExpense = {
      msg: "",
      amount: 0,
      key: Math.random() * 20,
      by: "",
      date: date.getDate(),
    };
    setExpense([...expense, newExpense]);
  };
  const deleteExpense = (e, index) => {
    console.log(e.target.value);
    let data = [...expense];

    data.splice(index, 1);

    setExpense(data);
  };

  const sum = expense.reduce((acc, curr) => {
    return (acc = acc + parseInt(curr.amount));
  }, 0);
  return (
    <div className="main-block">
      {expense.map((item, index) => {
        return (
          <>
            <div>Expense number {index + 1} </div>
            <input
              type="text"
              name="msg"
              value={item.msg}
              placeholder="Write your expense"
              onChange={(e) => {
                handleExpense(e, index);
              }}
            />
            <input
              type="number"
              name="amount"
              value={item.amount}
              onChange={(e) => {
                handleExpense(e, index);
              }}
            />
            <input
              type="text"
              name="by"
              value={item.by}
              placeholder="mode of payment"
              onChange={(e) => {
                handleExpense(e, index);
              }}
            />
            <input type="date" name="date" value={item.date}
            onChange={(e)=>{handleExpense(e,index)}} />
            <button
              onClick={(e) => {
                deleteExpense(e, index);
              }}
            >
              Delete{" "}
            </button>
            <Task  task={expense} index={index}/>
          </>
        );
      })}
      <div>
        <button
          onClick={() => {
            AddExpense();
          }}
        >
          Add more expense +
        </button>
      </div>
      <div>Net Total Expoense {sum}</div>
    </div>
  );
};

export default Expense;
