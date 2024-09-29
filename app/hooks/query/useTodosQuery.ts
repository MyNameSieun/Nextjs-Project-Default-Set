import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./keys.constant";
import { fetchTodos } from "@/app/services/todos";

export const useTodosQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.TODOS],
    queryFn: fetchTodos,
  });
};
