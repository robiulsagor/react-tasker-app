import Header from "./comppnents/Header"
import Hero from "./comppnents/Hero"
import TaskContainer from "./comppnents/TaskContainer"
import Modal from "./comppnents/Modal"
import { useContext, useEffect } from "react"
import { TaskContext } from "./context/TaskContext"

function App() {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error("No contexts found!")
  }

  const { modalOpen, setModalOpen } = context

  // hide modal while tapping Escape key
  const handleKeyDown = (event: { key: string }) => {
    if (modalOpen && event.key === "Escape") {
      setModalOpen(false)
    }
  }

  useEffect(() => {
    if (modalOpen) window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalOpen])


  return (
    <div className="bg-gray-950 bg-opacity-90 min-h-[100vh] outfit">
      <div className="px-4 sm:px-6 md:px-10 xl:px-0 xl:max-w-7xl mx-auto ">
        <Header />
        <Hero />
        <TaskContainer />
      </div>

      <Modal />
    </div>
  )
}

export default App
