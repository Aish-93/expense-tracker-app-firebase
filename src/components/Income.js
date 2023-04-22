import React, { useState } from "react";
import "../App.css"
import Task from "./Task";

const date = new Date();
const Income = () => {
  const [income, setIncome] = useState([
    {
      msg: "",
      amount: 0,
      key: Math.random() * 40,
      by:"",
      date: date.getDate(),
    },
  ]);


const sum = income.reduce((acc,curr)=>{
return acc = acc + parseInt(curr.amount)
},0)
  const handleIncome = (e, index) => {
    let data = [...income];
    data[index][e.target.name] = e.target.value;

    setIncome(data);
  };
const AddIncome=()=>{
let addNew = {
    msg: "",
    amount: 0,
    key: Math.random() * 30,
    by:"",
    date: date.getDate(),
}
setIncome([...income,addNew])
}

const handleDelete=(e,index)=>{
    let data =[...income];
    data.splice(index,1)
    setIncome(data)
}
  return (
    <div className="main-block">
      {income.map((item, index) => {
        return (
          <>
            <div>Income number {index + 1}</div>
            <input
              type="text"
              value={item.msg}
              name="msg"
              placeholder="Write your Income Mode"
              onChange={(e) => {
                handleIncome(e, index);
              }}
            />
            <input
              type="number"
              value={item.amount}
              name="amount"
              onChange={(e) => {
                handleIncome(e, index);
              }}
            />
            <input
            type="text"
            name="by"
            value={item.by}
            placeholder="mode of payment"
            onChange={(e) => {
                handleIncome(e, index);
              }}/>
              <input type="date" name="date" value={item.date}
            
            onChange={(e)=>{handleIncome(e,index)}} />
            <button onClick={(e)=>{handleDelete(e,index)}}>Delete -</button>
            <Task  task={income} index={index}/>
          </>
        );
      })}
      <div><button onClick={()=>{AddIncome()}}>Add more income +</button></div>
      <div>Net Total Income {sum}
      </div>
    </div>
  );
};

export default Income;
