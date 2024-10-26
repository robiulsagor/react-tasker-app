import React, { ReactNode, useEffect, useState } from "react"
import { Task, TaskContext } from "./TaskContext"

interface TaskProviderProps {
    children: ReactNode;
}


const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [mode, setMode] = useState('add')
    const [searchTerm, setSearchTerm] = useState<string>("")
    const [tasks, setTasks] = useState<Task[]>([])
    const [editTaskId, setEditTaskId] = useState<number>()

    const deleteTask = (id: number) => {
        const sure = window.confirm("Are you sure to delete this task?")
        if (sure) {
            setTasks(tasks => tasks.filter(task => task.id !== id))
        } else {
            alert("Aborted")
        }
    }

    const deleteAllTasks = () => {
        const sure = window.confirm("Are you sure to delete all tasks?")
        if (sure) {
            setTasks([])
        } else {
            alert("Aborted")
        }
    }

    useEffect(() => {
        const localItem = JSON.parse(localStorage.getItem("tasks") as string)
        if (localItem) {
            setTasks(localItem)
        }
    }, [])

    useEffect(() => {
        if (tasks.length > 0) {  // Only set localStorage if there are tasks to store
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }, [tasks])

    return (
        <TaskContext.Provider
            value={{
                modalOpen, setModalOpen, mode, setMode, tasks, setTasks, deleteTask, deleteAllTasks,
                searchTerm, setSearchTerm, editTaskId, setEditTaskId
            }}>
            {children}
        </TaskContext.Provider>
    )
}
export default TaskProvider