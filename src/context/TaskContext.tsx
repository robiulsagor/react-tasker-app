import React, { createContext } from "react";

export interface Task {
    id: number;
    isFavourite: boolean;
    title: string;
    description: string;
    priority: string;
    tags: string[];
}

interface TaskContextType {
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    mode: string;
    setMode: React.Dispatch<React.SetStateAction<string>>;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[] | never[]>>;
    deleteTask: (id: number) => void;
    deleteAllTasks: () => void;
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    editTaskId: number | undefined;
    setEditTaskId: React.Dispatch<React.SetStateAction<number | undefined>>
}

export const TaskContext = createContext<TaskContextType | null>(null);

