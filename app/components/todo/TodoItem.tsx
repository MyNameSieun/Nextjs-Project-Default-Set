// components/todo/TodoItem.tsx
import Link from "next/link";
import { Todo } from "@/app/types/todo-types";
import { useAddTodoMutation } from "@/app/hooks/query/useTodosMutation";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { deleteTodoMutate, toggleTodoMutate } = useAddTodoMutation();
  const { id, title, content, isDone, deadline } = todo;

  const handleDeleteTodo = () => {
    const deleteConfirm = window.confirm("정말 삭제하시겠습니까?");
    if (deleteConfirm) {
      deleteTodoMutate(id);
    }
  };

  return (
    <li>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <div className={`${!isDone ? "" : "line-through"}`}>
            <h2 className="card-title">{title}</h2>
            <p>{content}</p>
            <p>{deadline}</p>
          </div>

          <div className="card-actions justify-end">
            <button onClick={handleDeleteTodo} className="btn btn-primary">
              삭제하기
            </button>
            <button
              onClick={() => toggleTodoMutate({ id, isDone: !isDone })}
              className="btn btn-error"
            >
              완료
            </button>
            <Link href={`/detail/${id}`}>
              <button className="btn btn-secondary">상세보기</button>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
