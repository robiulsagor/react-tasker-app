import { CiStar } from "react-icons/ci"
import { FaStar } from "react-icons/fa";
import useTaskContext from "../hooks/useTaskContext";

interface TaskProps {
    id: number;
    isFaviourite: boolean;
    title: string;
    description: string;
    priority: string;
    tags: string[];
}

const Task = ({ id, isFaviourite, title, description, priority, tags }: TaskProps) => {
    const taskColors = ['#5da492', '#af7ac5', '#17a589', '#21618c', '#6c3483', '#148f77', '#5b2c6f', '#9c640c']
    const { setModalOpen, setMode, setTasks, deleteTask, setEditTaskId } = useTaskContext();

    const openEditModal = () => {
        setModalOpen(true)
        setMode('edit')
        setEditTaskId(id)
    }


    const handleFavourite = () => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, isFavourite: !task.isFavourite } : task
            )
        )
    }

    return (
        <tr className="py-3 border-b border-gray-600 text-sm">
            <td className="py-3 ">
                {isFaviourite ? <FaStar onClick={handleFavourite} className="cursor-pointer" size={20} />
                    : <CiStar onClick={handleFavourite} className="cursor-pointer" size={20} />}
            </td>
            <td>
                {title}
            </td>
            <td>
                {description}
            </td>
            <td className=" text-center capitalize">
                {tags.map((tag, i) => (
                    <span key={i} className={`border rounded px-2 py-1 mr-1 `}
                        style={{ background: taskColors[i] || '#666' }}>
                        {tag}   
                    </span>
                ))}
            </td>
            <td className=" text-center capitalize w-[200px]">
            {priority}
            </td>
            <td className=" text-center capitalize text-sm">
                <button className="text-blue-500 mr-2"
                    onClick={openEditModal}>Edit</button>
                <button onClick={() => deleteTask(id)} className="text-red-500">Delete</button>
            </td>
        </tr>

    )
}

export default Task