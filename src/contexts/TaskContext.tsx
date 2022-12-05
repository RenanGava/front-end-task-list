import { createContext, useState, ReactNode, useContext } from "react"
import { api } from "../services/apiClient"

interface TaskProviderProps {
    children: ReactNode
}



interface TaskContextData {
    
}

const TaskContext = createContext<TaskContextData>({} as TaskContextData)

export function TaskProvider({ children }: TaskProviderProps) {

    


    return(
        <TaskContext.Provider value={{}}>
            {children}
        </TaskContext.Provider>
    )
}

export function UseTaskFunctions() {
    const context = useContext(TaskContext)

    return context
}
