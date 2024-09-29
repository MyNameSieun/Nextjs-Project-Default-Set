import { addTodo, deleteTodo } from "@/app/services/todos";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "./keys.constant";

export const useAddTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODOS] });
      alert("추가 완료!");
    },
    onError: (error) => {
      console.error("추가 실패:", error);
      alert("추가 실패. 다시 시도해 주세요.");
    },
  });
};

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODOS] });
      alert("삭제 완료!");
    },
    onError: (error) => {
      console.error("삭제 실패:", error);
      alert("삭제 실패. 다시 시도해 주세요.");
    },
  });
};
