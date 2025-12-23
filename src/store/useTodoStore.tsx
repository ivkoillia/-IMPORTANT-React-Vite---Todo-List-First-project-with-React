import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { createSelector } from 'reselect';

import TasksAPI from '../api/todo/TasksAPI';

import type { ITodoState } from '../types/Todo/typesStore';



export const useTodoStore = create<ITodoState>()(
  persist(
    (set, get) => ({
      tasks: [],
      searchTaskInputQuery: '',
      addTaskInputQuery: '',
      isLoading: false,
      error: null,

      loadTasks: async () => {
        set({ isLoading: true, error: null });
        try {
          const data = await TasksAPI.fetchTasks();
          set({ tasks: data, isLoading: false });
          console.log( data )
        } catch (err) {
          set({ error: 'Ошибка при загрузке задач', isLoading: false });
          console.error(err);
        }
      },

      addTask: async (title: string) => {
        const newTask = { id: crypto.randomUUID(), title, isCompleted: false };
        const previousTasks = get().tasks;

        set((state) => ({
          tasks: [...state.tasks, newTask],
          addTaskInputQuery: ''
        }));

        try {
          await TasksAPI.addTask(newTask);
        } catch (error) {
          set({ tasks: previousTasks });
          console.error("Failed to add task:", error);
        }
      },

      deleteTask: async (id: string) => {
        const previousTasks = get().tasks;

        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id)
        }));

        try {
          await TasksAPI.deleteTask(id);
        } catch (error) {
          set({ tasks: previousTasks });
          console.error("Failed to delete task:", error);
        }
      },

      toggleTask: async (id: string) => {
        const previousTasks = get().tasks;
        const taskToUpdate = previousTasks.find(t => t.id === id);
        
        if (!taskToUpdate) return;

        const updatedStatus = !taskToUpdate.isCompleted;

        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, isCompleted: updatedStatus } : task
          )
        }));

        try {
          await TasksAPI.toggleTask(id, updatedStatus);
        } catch (error) {
          set({ tasks: previousTasks });
          console.error("Failed to toggle task:", error);
        }
      },

      clearTasks: async () => {
        const previousTasks = get().tasks;

        set({ tasks: [] });

        try {
          await Promise.all(previousTasks.map(task => TasksAPI.deleteTask(task.id)));
        } catch (error) {
          set({ tasks: previousTasks });
          console.error("Failed to clear tasks:", error);
        }
      },

      setSearchTaskInputQuery: (query) => set({ searchTaskInputQuery: query }),
      setAddTaskInputQuery: (query) => set({ addTaskInputQuery: query }),
    }),
    {
      name: 'tasks-storage',
      partialize: (state) => ({ tasks: state.tasks }),
    }
  )
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