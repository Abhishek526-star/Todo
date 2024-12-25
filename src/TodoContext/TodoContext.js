import {createContext , useContext} from "react"

export const TodoContext = createContext({
    todos : [
        {
            id:1,
            todo:"todo msg",
            completed : false,
        }
    ],
    addTodo : (todo)=>{},
    updatedTodo : (todo , id)=>{},
    deleteTodo : (id)=>{},
    toggleCompleted : (id)=>{},
 
})

export const useTodo = ()=>{ // hook
    return useContext(TodoContext)
}

export const Todoprovider =  TodoContext.Provider // for wrapping code in App.jsx