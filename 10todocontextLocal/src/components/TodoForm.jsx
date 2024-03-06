import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext';




function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()


    // here we created a constant named Add which whill add the task in todo after clicking add button
    const add = (e) => {
      e.preventDefault()

      if (!todo) return
      addTodo({ todo, completed: false})
      setTodo("")
    }


  return (
      <form onSubmit={add}  className="flex">
      
      {/* /input field for task */}
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />


          {/* add button */}
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;