import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filter);
  const filterByStatus = (todo) => {
    const { status } = filters;
    switch (status) {
      case 'Complete':
        return todos.complete;
      case 'Incomplete':
        return todos.Incomplete
      default:
        return todos;
    }
  }
  const fitlerByColors = (todo) =>{
    const {colors} = filters;
      if(colors.length > 0){
        return colors.includes(todo?.color)
      }
      return true;
  }


  return (
    <div
      className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
    >
      { 
        todos
        .filter(filterByStatus)
        .filter(fitlerByColors)
        .map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
    </div>

  )
}

export default TodoList