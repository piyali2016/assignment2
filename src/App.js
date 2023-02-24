import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css';
import TodoListTask from './TodoListTask';


function App() {
  const [taskAdd, settaskAdd] = useState('');
  const [taskArr, settaskArr] = useState([]);
  let handleOnclick =(event)=>{
    event.preventDefault();
    if(taskAdd.length===0){
      alert("enter task details");
      return;
    }
    const newItem = {
      text: taskAdd,
      id: Date.now()
    };
    settaskArr(taskArr.concat(newItem));
    settaskAdd('');
  }
  
  return (
    <div className="App">
      <header className="App-header">
       TODO task to add
      </header>
      <h1>Todo task List</h1>
      <center>
      <TodoListTask items={taskArr}></TodoListTask>
      </center>
      
      <TextField  id="taskAdd" 
          value={taskAdd}
          onChange={(event)=>settaskAdd(event.target.value)}
          label="Add Todo Task"
        />
        <br></br>
        <br></br>
        <Button size="large" variant="contained" onClick={handleOnclick}>Add TODO Task</Button>
    </div>
  );
}

export default App;
