"use client";

import { useAddTodoMutation } from "@/app/hooks/query/useTodosMutation";
import { useTodosQuery } from "@/app/hooks/query/useTodosQuery";
import useCounterStore from "@/app/store/counterStore";
import { useSession } from "next-auth/react";

const HomePage = () => {
  // 세션 정보 확인
  const session = useSession();

  console.log("====================================");
  console.log("HomePage", session);
  console.log("====================================");

  // zustand 활용 예제
  const { count, increase, decrease } = useCounterStore();

  // useQuery 예제
  const { data: todos, isLoading, error } = useTodosQuery();
  const addTodoMutation = useAddTodoMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    addTodoMutation.mutate({ title, content });
  };
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
        <h1>샘플 Todo App추가</h1>
        <button onClick={handleSubmit}>추가</button>
      </div>
    </section>
  );
};

export default HomePage;
