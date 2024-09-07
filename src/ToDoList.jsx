import { useState } from "react";

function ToDoList(){

    const [tasks, setTasks] = useState(["Eat Breakfast", "Do coding"]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){    // this line is basically checking if user tries to add empty field. Even if they dont type anything its still going to add in the list. So to prevent that we used trim method to remove any white space and check if the field is empty or not
            setTasks(t => [...t, newTask]);
            setNewTask(""); // resetting the input field after addin
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0) { // checking if the element is already on top we dont need to move it up further
            const updatedTasks = [...tasks];

            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]; // basically to swap the tasks
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1) { // checking if the element is already on bottom we dont need to move it up further
            const updatedTasks = [...tasks];

            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]; // basically to swap the tasks
            setTasks(updatedTasks);
        }
    }

    return(
        <div className="to-do-list">

            <h1>To-Do-List</h1>

            <div>
                <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}/>
                <button className="add-button" onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button 
                    className="delete-button"
                    onClick={() => deleteTask(index)}>
                    Delete
                    </button>
                    <button 
                    className="move-button"
                    onClick={() => moveTaskUp(index)}>
                    👆
                    </button>
                    <button 
                    className="move-button"
                    onClick={() => moveTaskDown(index)}>
                    👇
                    </button>
                </li>)}
            </ol>
        </div>
    );
}

export default ToDoList