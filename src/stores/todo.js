import {defineStore} from 'pinia'


export const useTodoStore = defineStore('todoStore', {
    actions: {
//======================================================================================================================
        saveTodoInLocalStorage(items){
            localStorage.setItem("todo", JSON.stringify(items));
        },
//======================================================================================================================
        getTodos(){
            const r= localStorage.getItem("todo");
            return r
        }
    }
})