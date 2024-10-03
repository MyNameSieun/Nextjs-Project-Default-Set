"use cilent";
// components/todo/TodoItem.tsx
import Link from "next/link";
import { EditTodo, Todo } from "@/app/types/todo-types";
import { useAddTodoMutation } from "@/app/hooks/query/useTodosMutation";
import { useState } from "react";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const [editMode, setEditMode] = useState<null | EditTodo>(null);

  const { deleteTodoMutate, editTodoMutate, toggleTodoMutate } =
    useAddTodoMutation();
  const { id, title, content, isDone, deadline } = todo;

  // 삭제
  const handleDeleteTodo = () => {
    const deleteConfirm = window.confirm("정말 삭제하시겠습니까?");
    if (deleteConfirm) {
      deleteTodoMutate(id);
    }
  };

  // 수정
  const handleEditTodo = () => {
    if (editMode?.title && editMode?.content) {
      // editTodoMutate는 {id, title, content}를 받아야 하므로 id도 포함하여 전달
      editTodoMutate({ id, title: editMode.title, content: editMode.content });
      setEditMode(null); // 수정이 완료되면 상태 초기화
    } else {
      alert("수정할 제목과 내용을 입력하세요.");
    }
  };

  return (
    <li>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          {editMode ? (
            <>
              <div className={`${!isDone ? "" : "line-through"}`}>
                <h2 className="card-title">
                  <input
                    value={editMode.title}
                    onChange={(e) =>
                      setEditMode({ ...editMode, title: e.target.value })
                    }
                    placeholder="수정할 제목을 입력하세요"
                  />
                </h2>
                <p>
                  <input
                    value={editMode.content}
                    onChange={(e) =>
                      setEditMode({
                        ...editMode,
                        content: e.target.validationMessage,
                      })
                    }
                    placeholder="수정할 내용을 입력하세요"
                  />
                </p>
                <p>{deadline}</p>
              </div>

              <div className="card-actions justify-end">
                <button onClick={handleEditTodo} className="btn btn-accent">
                  수정 완료
                </button>
              </div>
            </>
          ) : (
            <>
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
                <button
                  onClick={(e) => setEditMode({ title, content })}
                  className="btn btn-accent"
                >
                  수정하기
                </button>
                <Link href={`/detail/${id}`}>
                  <button className="btn btn-secondary">상세보기</button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
