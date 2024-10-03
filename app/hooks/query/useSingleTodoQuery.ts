import { getSingleTodo } from "@/app/services/todos";
import { useSuspenseQuery } from "@tanstack/react-query";
interface UseTodoQueryParams {
  todoId: string;
}

export const useSingleTodoQuery = ({ todoId }: UseTodoQueryParams) => {
  return useSuspenseQuery({
    queryKey: ["todo", todoId],
    queryFn: () => getSingleTodo(todoId),
  });
};
