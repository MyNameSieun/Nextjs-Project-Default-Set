import axios from "axios";
import { Todo } from "../types/todo-types";

const todosAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});
const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

// todo 조회
export const getTodos = async () => {
  const response = await fetch(`${baseURL}/todos`, {
    cache: "no-cache",
  });
  const data = await response.json();

  return data;
};

export const getSingleTodo = async (id: string) => {
  const response = await fetch(`${baseURL}/todos/${id}`, {
    cache: "no-cache",
  });
  const data = await response.json();

  return data;
};

// todo 추가
export const addTodo = async (todo: Todo) => {
  const response = await fetch(`${baseURL}/todos`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  return response.json();
};

// todo 삭제
export const deleteTodo = async (id: String) => {
  return await todosAxios.delete(`/todos/${id}`);
};

// todo 토글
export const toggleTodo = async (id: string, isDone: boolean) => {
  const response = await fetch(`${baseURL}/todos/${id}`, {
    method: "PATCH",
    cache: "no-cache",
    body: JSON.stringify({ isDone }),
  });
  return response.json();
};
