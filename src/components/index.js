//firebase server adding

import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import{getDatabase,ref,push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL:"https://realtime-database-ee82b-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app= initializeApp(appSettings);
const database=getDatabase(app);
export const taskInDB = ref(database,'Task');

