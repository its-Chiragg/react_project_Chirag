import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import "../card.css";

const TodoList = () => {
  let todos = useSelector((state) => state.app);
  console.log("todos", todos);
  return (
    <div className="container">
      <div className="">
        <div className="">
          {todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
