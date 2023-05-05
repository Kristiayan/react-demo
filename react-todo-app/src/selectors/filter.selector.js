import { createSelector } from 'reselect';

export const selectorTodos = createSelector(
    [(state) => state.todo, (_, filter) => filter],
    (todos, filter) => {
        if(filter === "Active"){
            return todos.filter(t => !t.completed)
        }
        if(filter === "Completed"){
            return todos.filter(t => t.completed)
        }
        return todos;
    }
  )