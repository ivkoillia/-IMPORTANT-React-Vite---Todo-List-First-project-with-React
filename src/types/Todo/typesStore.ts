import type { ITask } from './types';

export interface ITodoState {
    tasks: ITask[];
    addTask: ( title : string ) => void;
    deleteTask: (id: string) => void;
    toggleTask: (id: string) => void;
    clearTasks: () => void;
    
    searchTaskInputQuery: string;
    setSearchTaskInputQuery: (query: string) => void;

    addTaskInputQuery: string;
    setAddTaskInputQuery: (query: string) => void;
}