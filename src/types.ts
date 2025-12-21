export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface IInputProps {
  name?: string;
  type: string;
  placeholder?: string;
  className?: string;
  id?: string;
  ariaLabel?: string;
  checked?: boolean;
  onInput?: (query: string) => void;
  onChange?: (value: boolean) => void;
}

export interface ITaskProps {
  task: ITask;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}