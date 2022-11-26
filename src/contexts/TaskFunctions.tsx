import { createContext, useState, ReactNode, useContext } from "react"
import { api } from "../services/apiClient"

interface TaskProviderProps {
    children: ReactNode
}

interface TaskContextData {
    createTask: () => Promise<void>
}

const TaskContext = createContext<TaskContextData>({} as TaskContextData)

export function TaskProvider({ children }: TaskProviderProps) {

    async function createTask(){
        // verificar se a task jé existe

        // se não existir criar a task
    }



    return(
        <TaskContext.Provider value={{createTask}}>
            {children}
        </TaskContext.Provider>
    )
}

export function UseTaskFunctions() {
    const context = useContext(TaskContext)

    return context
}

