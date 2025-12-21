import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { ITodoState } from '../types/Todo/typesStore';


export const useTodoStore = create<ITodoState>()(
    persist(
      (set) => ({
        tasks: [],
        searchTaskInputQuery: '',
        addTaskInputQuery: '',

        
        addTask: () => set((state) => ({
            tasks: [...state.tasks, { id: crypto.randomUUID(), title: state.addTaskInputQuery, isCompleted: false }]
        })),

        deleteTask: (id) => set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id)
        })),

        toggleTask: (id) => set((state) => ({
            tasks: state.tasks.map((task) => 
                task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
            )
        })),
    
        clearTasks: () => set({ tasks: [] }),
        
        setSearchTaskInputQuery: (query) => set({ searchTaskInputQuery: query }),
        
        setAddTaskInputQuery: (query) => set({ addTaskInputQuery: query }),
        
        }),
        {
            name: 'tasks-storage',
            partialize: (state) => ({ tasks: state.tasks }),
        }
    ),

);


/** This selector returns tasks filtered by search query */
export const selectRenderedTasks = (state: ITodoState) => {
  const query = state.searchTaskInputQuery.toLowerCase();
  return state.tasks.filter(t => t.title.toLowerCase().includes(query));
};

/** This selector returns the id of the first incomplete task */
export const selectFirstIncompleteTaskId = (state: ITodoState) => 
  state.tasks.find(t => !t.isCompleted)?.id || null;

/**
 * This selector returns total tasks length
 * @param state
 * @returns tasksLength: number
 */
export const selectTasksLength = (state: ITodoState) => {
  return state.tasks.length; 
}

/** This selector returns completed tasks length
 * @param state
 * @returns completedTasksLength: number
 */
export const selectCompletedTasksLength = (state: ITodoState) => {
  return state.tasks.filter(t => t.isCompleted).length; 
}
