import React from "react";
import { useContext} from "react";

                                              // our application is based on local storage 
export const TodoContext = React.createContext({
                                                   // a list of todos , where it can take arraty of objects 
    todos:[
        {
            id: 1,
            todo: 'Todo Message',
            completed: false,
        },
       
    ],
                            // we write only vague defination , not functionality 
                            // 2. add todo its a method
    addTodo: (todo) =>{},
                          // 3. update todo , to which todo is updated 
    updateTodo:(todo, id) => {},
                         // 4. delete todo   
    deleteTodo: (id) => {},
                        // toggle todo
    toggleComplete: (id)=>{},
});

                                // todoContext, its  just a store 


                                // its just a functionality like shopkeeper , it provides items 

export const TodoProvider = TodoContext.Provider;

                                // with the help of this access  the store from any component 


export  function useTodo(){
   return useContext(TodoContext);
}