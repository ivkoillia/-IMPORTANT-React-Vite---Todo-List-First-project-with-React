const API_URL = 'http://localhost:4000/tasks';

const TasksAPI = {
  fetchTasks: async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch tasks');
    return response.json();
  },

  addTask: async (task: { id: string; title: string; isCompleted: boolean }) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });
    if (!response.ok) throw new Error('Failed to add task');
    return response.json();
  },

  deleteTask: async (id: string) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete task');
    return response.json();
  },

  toggleTask: async (id: string, isCompleted: boolean) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isCompleted }),
    });
    if (!response.ok) throw new Error('Failed to toggle task');
    return response.json();
  },
};

export default TasksAPI;