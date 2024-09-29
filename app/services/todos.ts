import axios from "axios";
import { Todo } from "../types/todo-types";

const todosAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

// todo 조회
export const getTodos = async () => {
  const responst = await todosAxios.get("~~~");
};

// todo 추가
export const addTodo = async (todo: Todo) => {
  return await todosAxios.post(`/todos`, todo);
};
