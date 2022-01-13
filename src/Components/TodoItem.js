import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../Redux/actions";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ModeEditIcon from "@material-ui/icons/Edit";
import '../card.css';

const TodoItem = ({ todo }) => {
  const [edit, setEdit] = useState(false);
  // const [notes, setNotes] = useState(todo.notes);

  const [day, setDay] = useState(todo.day);
  const [time, setTime] = useState(todo.time);
  const [tasks, setTasks] = useState(todo.tasks);
  

  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <div className="card-body">
          <div className="">
            {edit ? (
              <form className="updateForm">
              <input
                type="text"
                onChange={(e) => setDay(e.target.value)}
                value={day} 
                title="Day"
                placeholder="Day"
              />
              <input
                type="text"
                onChange={(e) => setTime(e.target.value)}
                value={time} 
                title="Day"
                placeholder="Time"
              />
              <textarea
                type="text"
                onChange={(e) => setTasks(e.target.value)}
                value={tasks} 
                title="Day"
                placeholder="Tasks"
              />
              </form>
            ) : (
              <div>
              <h5 className="task-head">{todo.day}</h5>
              <h3 className="task">{todo.time}</h3>
              <h3 className="task">{todo.tasks}</h3>
              </div>
            )}
          </div>
          <button
            className="btn editBtn"
            onClick={() => {
              if (edit) {
                // setNotes(todo.notes);
                setDay(day);
                setTime(time);
                setTasks(tasks);
                dispatch(updateTodo({
                  ...todo,
                  day: day,
                  time: time,
                  tasks: tasks
                })
                );
              }
              setEdit(!edit);
            } }
            type="primary"
            title="Edit"
          > <ModeEditIcon />
            {edit ? "Update" : ""}
          </button>
          <button
            className="btn dltBtn"
            type="primary"
            title="Delete"
            onClick={() => dispatch(deleteTodo({ id: todo.id }))}
          ><DeleteOutlineIcon /></button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
