

import React from 'react';


//firebase server adding very importatnt setting
// to put values we use function like getDatabase, ref, push
// we use onValue function to fetch from DB

import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import{getDatabase,ref,push,onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    // url is from firebase
    databaseURL:"https://realtime-database-ee82b-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app= initializeApp(appSettings);
const database=getDatabase(app);
 const taskInDB = ref(database,'Task');

 const moviesInDB = ref(database,'movies');

 onValue(moviesInDB, function(snapshot){
console.log(snapshot)
 })



function Task(props) {
  const  handletask=()=>{
      console.log(  props.index,"checkindex",props.task[props.index]);
      push(taskInDB,props.task[props.index])
      // we are pushing to the database
    }
  return (
    <div>
      <button onClick={()=>{handletask()}}>  Add task</button>
       
      </div>
  )
}

export default Task