"use client";

import TodoItem from "@/app/components/todo/TodoItem";
import { useSingleTodoQuery } from "@/app/hooks/query/useSingleTodoQuery";

interface TodoDetailPageProps {
  params: {
    id: string;
  };
}

const TodoDetailPage = ({ params }: TodoDetailPageProps) => {
  const { id } = params;

  const { data: todo, isLoading, isError, error } = useSingleTodoQuery({ id });

  // 로딩 중일 때 처리
  if (isLoading) {
    return <p>로딩 중...</p>;
  }

  // 에러가 발생했을 때 처리
  if (isError) {
    return (
      <p>
        에러 발생: {error instanceof Error ? error.message : "알 수 없는 에러"}
      </p>
    );
  }

  const { title, content, deadline } = todo;

  return (
    <section>
      <section>
        <h1 className="text-3xl mb-4">Todo 상세 보기</h1>
        제목: {title}
        내용: {content}
        마감일: {deadline}
      </section>
    </section>
  );
};

export default TodoDetailPage;
