"use client";

import { useSingleTodoQuery } from "@/app/hooks/query/useSingleTodoQuery";

interface TodoDetailPageProps {
  params: {
    todoId: string;
  };
}

const TodoDetailPage = ({ params }: TodoDetailPageProps) => {
  const { todoId } = params;

  const {
    data: todo,
    isLoading,
    isError,
    error,
  } = useSingleTodoQuery({ todoId });

  if (isLoading) {
    return <p>로딩 중...</p>;
  }

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
