"use server";

import { Todo } from "../types/todo-types";

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

// todo 추가
export const addTodo = async (todo: Todo) => {
  const response = await fetch(`${baseURL}/todos`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  const data = await response.json();

  return data;
};

// todo 삭제
export const deleteTodo = async (todoId: string) => {
  const response = await fetch(`${baseURL}/todos/${todoId}`, {
    method: "DELETE",
  });
  const data = await response.json();

  return data;
};

// todo 토글
export const toggleTodo = async (todoId: string, isDone: boolean) => {
  const response = await fetch(`${baseURL}/todos/${todoId}`, {
    method: "PATCH",
    cache: "no-cache",
    body: JSON.stringify({ isDone }),
  });
  const data = response.json();
  return data;
};
