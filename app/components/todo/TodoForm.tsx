"use client";
import { useAddTodoMutation } from "@/app/hooks/query/useTodosMutation";
import { useId } from "react";

const TodoForm = () => {
  // 추가
  const { addTodoMutate } = useAddTodoMutation();

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
      isDone: false,
      deadline: new Date().toLocaleDateString(),
    };

    addTodoMutate(nextTodo);

    form.reset();
  };

  const titleId = useId();
  const contentId = useId();

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor={titleId}>Title</label>
        <input type="text" id={titleId} name="title" required />
        <label htmlFor={contentId}>content</label>
        <input type="text" id={contentId} name="content" required />
        <button type="submit">추가하기</button>
      </form>
    </div>
  );
};

export default TodoForm;
