"use client";
import { useTodosQuery } from "@/app/hooks/query/useTodosQuery";
import { Todo } from "@/app/types/todo-types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  title: string;
}

const TodoList = ({ title }: TodoListProps) => {
  // 패칭
  const { data: todos, isLoading, error } = useTodosQuery();

  // 로딩 중 처리
  if (isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  // 에러 중 처리
  if (error) {
    return <p>에러 발생: {error.message}</p>;
  }

  // 'inProgress'와 'isDone'에 따라 필터링
  const filteredTodos = todos?.filter((todo: Todo) => {
    return title === "inProgress" ? !todo.isDone : todo.isDone;
  });

  return (
    <section>
      <h2 className="text-4xl">{title}</h2>
      <ul>
        {filteredTodos?.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
};
export default TodoList;
