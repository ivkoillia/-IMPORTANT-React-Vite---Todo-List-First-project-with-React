export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

// export interface IInputProps {
//   input?: string;
//   name?: string;
//   type: string;
//   placeholder?: string;
//   className?: string;
//   id?: string;
//   ariaLabel?: string;
//   checked?: boolean;
//   onInput?: (query: string) => void;
//   onChange?: (value: boolean) => void | (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  ariaLabel?: string; 
}

export interface ITaskProps {
  task: ITask;
  attention?: boolean;
}

export interface ITaskPageProps {
  task: ITask;
}