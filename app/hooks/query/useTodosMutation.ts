import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "./keys.constant";
import { ToggleTodo } from "@/app/types/todo-types";
import { addTodo, deleteTodo, toggleTodo } from "@/app/actions/todo-actions";

export const useAddTodoMutation = () => {
  const queryClient = useQueryClient();

  // Add Todo Mutation
  const { mutate: addTodoMutate } = useMutation({
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

  // Delete Todo Mutation
  const { mutate: deleteTodoMutate } = useMutation({
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

  // toggle Todo Mutation
  const { mutate: toggleTodoMutate } = useMutation({
    mutationFn: ({ id, isDone }: ToggleTodo) => toggleTodo(id, isDone),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODOS] });
    },
    onError: (error) => {
      console.error("토글 실패:", error);
      alert("토글 실패. 다시 시도해 주세요.");
    },
  });

  return { addTodoMutate, deleteTodoMutate, toggleTodoMutate };
};
