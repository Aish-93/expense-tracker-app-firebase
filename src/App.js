import logo from './logo.svg';
import './App.css';
import Expense from './components/Expense';
import Income from './components/Income';
import Task from './components/Task';

import Test from './components/Test';
import Btn from './components/Btn';
function App() {
  return (
    <div className="App">
    <div>Main Tracker expense</div>
    <div id="main">
      <Expense/>
      <Income />
      <Btn/>
      {/* <Test/> */}
      
    </div>
    {/* <Task/> */}
    </div>
  );
}

export default App;
