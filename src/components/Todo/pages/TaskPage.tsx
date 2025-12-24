import type { ITaskPageProps } from '../../../types/Todo/types';


function TaskPage(props : ITaskPageProps) {
    const { task } = props;


  return <main className="main">
            <h1>Task Page</h1>
            <p>Task ID: {task.id}</p>
            <p>Task Title: {task.title}</p>
            <p>Completed: {task.isCompleted ? 'Yes' : 'No'}</p>
        </main>;
}

export default TaskPage;