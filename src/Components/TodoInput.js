import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/actions";
import AddIcon from "@material-ui/icons/Add";
import "../card.css";

//geeting the values of local storage
const getLocalItems = () => {
  const data = localStorage.getItem('notes');
  if (data) {
    return JSON.parse(data);
    } else {
    return [];
  }
    
}

const TodoInput = () => {

  //main array of objects state
  const [notes, setNotes] = useState(getLocalItems());

  //input field states
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  const [tasks, setTasks] = useState('');

  // const [name, setName] = useState('');
  let dispatch = useDispatch();

  const handleAddTodo = (event) => {

    let task = {
      day,
      time,
      tasks,
    };

    dispatch(
      addTodo({
        id: Math.random(),
        day,
        time,
        tasks
      })
    );
    
    setNotes([...notes,task])
    setDay('');
    setTime('');
    setTasks('');

    event.preventDefault(); 
  };

  //saving data to local storage
  useEffect(() => {
    localStorage.setItem('notes',JSON.stringify(notes));
  },[notes]);

  return (
    <>
      <div className="container my-4">
        
          <form onSubmit={handleAddTodo} className="input">
            <input
              type="text"
              onChange={(e) => setDay(e.target.value)}
              value={day}
              className="col-12"
              placeholder="Day"
            />
            <input
              type="text"
              onChange={(e) => setTime(e.target.value)}
              value={time}
              className="col-12"
              placeholder="Time"
            />
            <textarea 
              type="text"
              onChange={(e) => setTasks(e.target.value)}
              value={tasks}
              className="col-12"
              placeholder="Take a note..."
            />

            <button
              className="addIcon"
              type="primary"
              onClick={handleAddTodo}
              title="Add Note"
            >
              <AddIcon />
            </button>
          </form>
        
      </div>
    </>
  );
};

export default TodoInput;
