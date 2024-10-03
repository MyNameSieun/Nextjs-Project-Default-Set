import { getSingleTodo } from "@/app/services/todos";
import { useQuery } from "@tanstack/react-query";
interface UseTodoQueryParams {
  id: string;
}

export const useSingleTodoQuery = ({ id }: UseTodoQueryParams) => {
  return useQuery({
    queryKey: ["todo", id],
    queryFn: () => getSingleTodo(id),
    enabled: !!id,
  });
};
