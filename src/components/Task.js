

import React from 'react';


//firebase server adding

import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import{getDatabase,ref,push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL:"https://realtime-database-ee82b-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app= initializeApp(appSettings);
const database=getDatabase(app);
 const taskInDB = ref(database,'Task');



function Task(props) {
  const  handletask=()=>{
      console.log(  props.index,"checkindex",props.task[props.index]);
      push(taskInDB,props.task[props.index])
    }
  return (
    <div>
      <button onClick={()=>{handletask()}}>  Add task</button>
       
      </div>
  )
}

export default Task