"use client";

import {
  useAddTodoMutation,
  useDeleteTodoMutation,
} from "@/app/hooks/query/useTodosMutation";
import { useTodosQuery } from "@/app/hooks/query/useTodosQuery";
import useCounterStore from "@/app/store/counterStore";
import { Todo } from "@/app/types/todo-types";
import { useSession } from "next-auth/react";
import { useId } from "react";

const HomePage = () => {
  const titleId = useId();
  const contentId = useId();

  // 세션 정보 확인------------------------------------------------
  const session = useSession();

  console.log("====================================");
  console.log("HomePage", session);
  console.log("====================================");

  // zustand 활용 예제---------------------------------------------
  const { count, increase, decrease } = useCounterStore();

  // useQuery 예제-------------------------------------------------

  // 추가
  const addTodoMutation = useAddTodoMutation();

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    const nextTodo = {
      id: crypto.randomUUID(),
      title,
      content,
    };

    addTodoMutation.mutate(nextTodo);

    form.reset();
  };

  // 삭제
  const deleteTodoMutation = useDeleteTodoMutation();

  const handleDeleteTodo = (id: string) => {
    deleteTodoMutation.mutate(id);
  };

  // 패칭
  const { data: todos, isLoading, error } = useTodosQuery();

  // 로딩 중 처리
  if (isLoading) {
    return <p>로딩중...</p>;
  }

  // 에러 중 처리
  if (error) {
    return <p>에러 발생: {error.message}</p>;
  }

  return (
    <section>
      <div>
        <h1>샘플 카운터 앱</h1>
        <p>현재 숫자: {count}</p>
        <button onClick={increase}>증가</button>
        <button onClick={decrease}>감소</button>
      </div>
      <div>
        <h1>샘플 Todo App</h1>
        {todos.map((todo: Todo) => (
          <ul key={todo.id}>
            <li>{todo.title}</li>
            <li>{todo.content}</li>
            <button onClick={() => handleDeleteTodo(todo.id)}>삭제하기</button>
          </ul>
        ))}
        <form onSubmit={handleOnSubmit}>
          <label htmlFor={titleId}>Title</label>
          <input type="text" id={titleId} name="title" required />

          <label htmlFor={contentId}>content</label>
          <input type="text" id={contentId} name="content" required />
          <button type="submit">추가하기</button>
        </form>
      </div>
    </section>
  );
};

export default HomePage;
