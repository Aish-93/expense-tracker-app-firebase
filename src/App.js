import logo from './logo.svg';
import './App.css';
import Expense from './components/Expense';
import Income from './components/Income';
import Task from './components/Task';

import Test from './components/Test';
function App() {
  return (
    <div className="App">
    <div>Main Tracker expense</div>
    <div id="main">
      <Expense/>
      <Income />
      {/* <Test/> */}
      
    </div>
    {/* <Task/> */}
    </div>
  );
}

export default App;
