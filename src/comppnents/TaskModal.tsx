import { useEffect, useState } from "react";
import useTaskContext from "../hooks/useTaskContext";

interface InputState {
    id: number;
    title: string;
    description: string;
    tags: string[];
    priority: string;
    isFavourite: boolean;

}

const TaskModal = ({ closeModal }: { closeModal: () => void }) => {
    const { tasks, setTasks, setModalOpen, modalOpen, editTaskId, mode, setMode, setEditTaskId } = useTaskContext()

    const [input, setInput] = useState<InputState>({
        id: tasks.length + 1,
        title: "",
        description: "",
        tags: [],
        priority: "",
        isFavourite: false
    })

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const name = e.target.name
        const value = e.target.value
        setInput(prevInput => ({ ...prevInput, [name]: value }))
    }

    const handleTags = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const cleanedValue = value.replace(/,\s*$/, "");
        const tag = cleanedValue.split(",").map((item: string) => item.trimStart());


        setInput(prev => ({ ...prev, tags: [...tag] }))


    }

    const submitBtnDisabled = () => input.title === "" || input.description === "" || input.tags.length === 0;

    const handleAddTask = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (input) {
            setTasks(prev => [...prev, input])
            setModalOpen(false)

        }
    }

    const handleEditTask = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setTasks(prevTasks =>
            prevTasks.map(task => task.id === editTaskId ? { ...task, ...input } : task)
        )
        setModalOpen(false)
        setMode("add")
        setEditTaskId(undefined)
    }

    useEffect(() => {
        if (mode === 'edit') {
            const task = tasks.find(task => task.id === editTaskId)
            if (task) {
                setInput(task);
            }
        }
        if (!modalOpen) setInput({
            id: tasks.length + 1,
            title: "",
            description: "",
            tags: [],
            priority: "",
            isFavourite: false
        })
    }, [editTaskId, mode, tasks, modalOpen])

    return (
        <form className="flex flex-col mt-8">
            <label htmlFor="title" className="text-slate-200">Title</label>
            <input type="text" name="title" id="title" placeholder="Task Title" value={input.title} onChange={handleInput} className="mb-10 p-2 mt-1 rounded text-gray-900 outline-none " autoFocus />

            <label htmlFor="description" className="text-slate-200">Description</label>
            <textarea name="description" id="description" placeholder="Task description" value={input.description} onChange={handleInput} className="mb-10 p-2 mt-1 rounded text-gray-900 outline-none"></textarea>

            <div className="flex items-center justify-between flex-col sm:flex-row gap-5">
                <div className="flex-1 w-full">
                    <label htmlFor="tags" className="text-slate-200 block">Tags</label>
                    <input type="text" name="tags" id="tags" placeholder="Task tags" onChange={handleTags} className="p-2 mt-1 outline-none rounded w-full " />
                </div>
                <div className="flex-1  w-full">
                    <label htmlFor="priority" className="text-slate-200 block">Priority</label>
                    <select name="priority" id="priority" className="p-2 mt-1 outline-none rounded w-full" value={input.priority} onChange={handleInput}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
            </div>

            <div className="flex items-center justify-between mt-8">
                <button type="button" className="px-4 py-1 text-white font-semibold bg-red-600 rounded" onClick={closeModal}>Close</button>
                <button disabled={submitBtnDisabled()} className="capitalize px-4 py-1 text-white font-semibold bg-blue-600 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={mode === "edit" ? handleEditTask : handleAddTask}>{mode} </button>
            </div>
        </form>
    )
}

export default TaskModal; 