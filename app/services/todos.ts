import axios from "axios";
import { Todo } from "../types/todo-types";

const todosAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

// todo 조회
export const fetchTodos = async () => {
  const response = await todosAxios.get("/todos");
  return response.data;
};

// todo 추가
export const addTodo = async (todo: Todo) => {
  return await todosAxios.post(`/todos`, todo);
};

// todo 삭제
export const deleteTodo = async (id: String) => {
  return await todosAxios.delete(`/todos/${id}`);
};
