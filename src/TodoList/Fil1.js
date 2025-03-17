import React, { useState } from 'react'
import Display from './Display';
const Fil1 = () => {
    const[todo,setTodo] = useState("");
    const[task,setTask] = useState([]);

    const chandler = (e) =>
    {
       
        setTodo(e.target.value);
        
        
    }
    const shandler = (e) =>
    {
        e.preventDefault();
        if(todo.length>0)
        {
            const neededTasks = [...task,todo];
            setTask(neededTasks);
        }
        setTodo("");
    }
    const deletehandler = (index) =>
    {
        const updatedTask = task.filter((val,ind) =>  ind!==index);
        setTask(updatedTask);
        
    }
  return (
    <div>
      <center>
        <h1> Welcome to Todo Management App</h1>
        <h2> It is cretaed by Udaychand </h2>
        <Display task={task} deletehandler={deletehandler} />
        <form onSubmit={shandler} >
            <input type="text" placeholder="Enter your activity" name="todo" value={todo} onChange={chandler} />&nbsp;&nbsp;
            <input type="submit" name="Add" />
        </form>
        




      </center>
    </div>
  )
}

export default Fil1
