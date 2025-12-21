import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { createSelector } from 'reselect'

import type { ITodoState } from '../types/Todo/typesStore';


export const useTodoStore = create<ITodoState>()(
    persist(
      (set) => ({
        tasks: [],
        searchTaskInputQuery: '',
        addTaskInputQuery: '',

        
        addTask: ( title:string ) => set((state) => ({
            tasks: [...state.tasks, { id: crypto.randomUUID(), title, isCompleted: false }],
            addTaskInputQuery: ''
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


/** get tasks */
const getTasks = (state: ITodoState) => state.tasks;

/** get search query */
const getQuery = (state: ITodoState) => state.searchTaskInputQuery;

/** This selector returns tasks filtered by search query ( memo included ) */
export const selectRenderedTasks = createSelector(
  [getTasks, getQuery],
  (tasks, query) => {
    const lowerQuery = query.toLowerCase();
    return tasks.filter(t => t.title.toLowerCase().includes(lowerQuery));
  }
);

/** This selector returns the id of the first incomplete task */
export const selectFirstIncompleteTaskId = createSelector(
  [selectRenderedTasks],
  (tasks) => tasks.find(t => !t.isCompleted)?.id || null
);

/**
 * This selector returns tasks statistics ( total, completed, remaining, percent of completion )
 * @param state
 * @returns { total: number; completed: number; remaining: number; percent: number }
 */
export const selectTasksStats = createSelector(
  [selectRenderedTasks],
  (tasks) => {
    const total = tasks.length;
    // Используем простой цикл или reduce, если задач будут тысячи, 
    // но filter + length тоже ок для мемоизированного селектора.
    const completed = tasks.filter(t => t.isCompleted).length;
    
    return {
      total,
      completed,
      remaining: total - completed,
      percent: total > 0 ? Math.round((completed / total) * 100) : 0
    };
  }
);