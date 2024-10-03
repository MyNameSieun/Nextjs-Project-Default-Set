import { useSuspenseQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./keys.constant";
import { getTodos } from "@/app/services/todos";

export const useTodosQuery = () => {
  return useSuspenseQuery({
    queryKey: [QUERY_KEYS.TODOS],
    queryFn: getTodos,
  });
};
