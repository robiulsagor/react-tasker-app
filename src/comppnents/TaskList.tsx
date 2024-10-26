import Task from "./Task"
import useTaskContext from "../hooks/useTaskContext"

const TaskList = () => {
    const { tasks, searchTerm } = useTaskContext()

    const filterTasks = searchTerm ? tasks.filter(task => task.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || task.description.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) : tasks


    return (
        filterTasks.length > 0 ? (
            <div className="overflow-auto">
                <table className="w-full overflow-auto mt-10 text-slate-200 ">
                    <thead>
                        <tr className="text-sm font-normal ">
                            <th className="p-4 "></th>
                            <th className="px-6 min-w-[100px] xl:min-w-[150px] py-3 text-sm font-medium uppercase tracking-wider mt-20">Title</th>
                            <th className="px-6 min-w-[200px] py-3 text-sm font-medium uppercase tracking-wider mt-20">Description</th>
                            <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider mt-20">Tags</th>
                            <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider mt-20">Priority</th>
                            <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider mt-20">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterTasks.map(task => (
                            <Task
                                key={task.id}
                                id={task.id}
                                isFaviourite={task.isFavourite}
                                title={task.title}
                                description={task.description}
                                priority={task.priority}
                                tags={task.tags}
                            />
                        ))}
                    </tbody>
                </table>

            </div>
        ) : filterTasks.length === 0 && <h2 className="text-red-500 text-center font-semibold text-2xl my-10">No tasks found on the term</h2>

    )
}


export default TaskList