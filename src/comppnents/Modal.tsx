import { AnimatePresence, motion } from "framer-motion"
import useTaskContext from "../hooks/useTaskContext";
import TaskModal from "./TaskModal";

const Modal = () => {
    const { modalOpen, setModalOpen, mode, setMode } = useTaskContext();

    const closeModal = () => {
        setModalOpen(false)
        setMode('add')
    }

    return (
        <AnimatePresence>
            {modalOpen && (
                <div className="w-[100vw] h-[100vh]  fixed  left-0 top-0 flex items-center justify-center">
                    <motion.div
                        exit={{ opacity: 0 }} className="absolute bg-black bg-opacity-70 top-0 left-0 w-full h-screen" onClick={closeModal}></motion.div>
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0, y: '-200px' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ y: '-600px', opacity: 0 }}
                        className="z-10 w-[90%] max-w-[380px] sm:max-w-[480px] sm:w-[80%] md:max-w-[590px] bg-gray-800 p-4 sm:p-7 md:p-10 rounded-md">
                        <h2 className="text-2xl md:text-3xl text-center text-slate-200 font-semibold capitalize"> {mode}  Task</h2>

                        <TaskModal closeModal={closeModal} />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>


    )
}

export default Modal