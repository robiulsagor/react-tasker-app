const Hero = () => {
    return (
        <div className="flex items-center justify-between flex-col-reverse md:flex-row gap-5 mb-20 md:mb-10">
            <div className="flex-1">
                <h2 className="text-yellow-400 text-5xl outfit font-bold">Tasker</h2>
                <p className="text-slate-400 mt-2 text-lg">
                    Effortlessly Organize, Prioritize and Conquer Tasks with Tasker App - Your Personal Productivity ally for Seamless Goal Achievement and Stress-free Task Management
                </p>
            </div>
            <div className="flex-1 p-10  flex items-center justify-center">
                <img src="./task.jpg" alt="" className=" w-[80%] h-auto opacity-80 rounded-md" />
            </div>
        </div>
    )
}

export default Hero