export interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
  deadline: string;
}

export type ToggleTodo = Pick<Todo, "id" | "isDone">;

export interface WorkingTodo extends Todo {
  isDone: false;
}

export interface DoneTodo extends Todo {
  isDone: true;
}
