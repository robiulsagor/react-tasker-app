import { IoIosSearch } from "react-icons/io";
import useTaskContext from "../hooks/useTaskContext";

const Search = () => {
    const { searchTerm, setSearchTerm } = useTaskContext()

    return (
        <div className="w-[300px] bg-slate-800 bg-opacity-80 flex items-center px-2  rounded-md">
            <input type="search" name="" id="" placeholder="Search Task" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="bg-transparent flex-1 py-1 outline-none text-slate-200" />
            <IoIosSearch size={22} className="cursor-pointer text-slate-400" />
        </div>
    )
}

export default Search