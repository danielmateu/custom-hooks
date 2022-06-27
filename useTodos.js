import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


export const useTodos = () => {

    
    // PERSISTENCIA EN EL LOCALSTORAGE

    const init = () =>{
        return JSON.parse(localStorage.getItem('todos'))|| [];
    }

    // const initialState = [];

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    
    // FIN PERSISTENCIA EN EL LOCALSTORAGE

    //DIBUJAR TODO
    const handleNewTodo = (todo) =>{
        
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }

        dispatch( action );
    }

    // FIN DIBUJAR TODO

    const handleToggleTodo = (id) =>{
        // console.log({id})
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        });
    }

    //ELIMINAR TODOS

    const handleDeleteTodo = (id) =>{
        // console.log({id})
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    }

    return {
        todos,
        todosCount : todos.length,
        pendingTodosCount : todos.filter(todo => todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }

    // Fin ELIMINAR TODOS
}
