import TodoForm from "@/app/components/todo/TodoForm";
import TodoList from "@/app/components/todo/TodoList";
import { QUERY_KEYS } from "@/app/hooks/query/keys.constant";
import { useTodosQuery } from "@/app/hooks/query/useTodosQuery";
import { getTodos } from "@/app/services/todos";
import { DoneTodo, Todo, WorkingTodo } from "@/app/types/todo-types";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const HomePage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.TODOS],
    queryFn: getTodos,
  });

  return (
    <main>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <TodoForm />
        <TodoList title="inProgress" />
        <TodoList title="isDone" />
      </HydrationBoundary>
    </main>
  );
};

export default HomePage;
