import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

const useTaskContext = () => {
    const context = useContext(TaskContext)
    if (!context) {
        throw new Error("Task context not found")
    }
    return context
}

export default useTaskContext