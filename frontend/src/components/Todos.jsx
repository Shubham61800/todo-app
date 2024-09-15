import { useState } from "react";
export function Todos(){
    const [toddoo, setTodos] = useState([]);
  fetch("sum-server.100xdevs.com/todos").then(async function (res) {
    const jsonResult = await res.json();
    setTodos(jsonResult.todos)
  });
    return <div>
        {toddoo.map(function(todo){
            return <>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            </>
        })}
    </div>
}