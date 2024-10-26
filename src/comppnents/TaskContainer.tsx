import Search from "./Search"
import TaskList from "./TaskList";
import useTaskContext from "../hooks/useTaskContext";
import { ImCross } from "react-icons/im";

const TaskContainer = () => {
    const { setModalOpen, deleteAllTasks, tasks } = useTaskContext()

    return (
        <div className="mt-5 pb-10">
            <div className=" flex justify-end">
                <Search />
            </div>

            <div className="py-10 px-4 md:px-10 mt-2 bg-slate-400 bg-opacity-10 rounded-md">
                <div className="flex items-center justify-between flex-col gap-3 sm:flex-row">
                    <h2 className="text-2xl text-slate-200 font-semibold outfit">Your Tasks</h2>
                    <div className="space-x-2">
                        <button className="bg-blue-500 px-3 text-sm py-2 rounded text-white"
                            onClick={() => setModalOpen(true)}>Add Task</button>
                        <button disabled={tasks.length === 0} onClick={deleteAllTasks} className="bg-red-500 px-3 text-sm py-2 rounded text-white disabled:cursor-not-allowed disabled:opacity-55">Delete All</button>
                    </div>
                </div>

                {tasks.length > 0 ? <TaskList /> : (
                    <div className="text-center text-slate-200 text-lg mt-10 py-10 flex items-center justify-center gap-4">

                        <ImCross color="red" /> <h2 className="text-red-500 text-2xl">  <span> No tasks available</span></h2>

                    </div>
                )}
            </div>
        </div>

    )
}

export default TaskContainer