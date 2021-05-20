/**
 *
 * TodoList
 *
 */
import * as React from 'react';
// import { useTranslation } from 'react-i18next';
// import { messages } from './messages';

export interface TLProps {
  todoItem: {
    name: string;
    isCompleted: boolean;
    id: number;
  }[];
  setTodoItem: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        isCompleted: boolean;
        id: number;
      }[]
    >
  >;
}

export const TodoList: React.FC<TLProps> = ({ todoItem, setTodoItem }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { t, i18n } = useTranslation();

  // const deleteTodo = e => {
  //   console.log(e);
  // };

  // const updateTodos = todoToAdd => {
  //   const shouldUpdate = todoItem.some(todoItem => {
  //     return todoItem.name === todoToAdd.name;
  //   });

  //   if (shouldUpdate) {
  //     return todoItem.map(todo => {
  //       if (todo.name === todoToAdd.name) {
  //         return {
  //           name: todo.name,
  //           isCompleted: !todoToAdd.isCompleted,
  //           id: todo.id,
  //         };
  //       } else {
  //         return todo;
  //       }
  //     });
  //   } else {
  //     return todoItem;
  //   }
  // };

  const deleteTodo = id => {
    const pendingTodo = todoItem.filter(todo => todo.id !== id);

    setTodoItem(pendingTodo);
  };

  const renderList = (): JSX.Element[] => {
    return todoItem.map(todo => (
      <li
        className="w-72 shadow bg- p-2 px-4 rounded flex justify-between items-center gap-x-4"
        key={todo.id}
      >
        <div className="flex gap-x-4 items-center">
          <input
            className="w-4 h-4"
            type="checkbox"
            defaultChecked={todo.isCompleted}
            // onChange={() => setTodoItem(updateTodos(todoItem))}
          />
          <div className="w-44">{todo.name}</div>
        </div>
        <div>
          <button
            className="text-xs w-10 text-red-500 font-semibold"
            type="submit"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </div>
      </li>
    ));
  };

  return (
    <div>
      <ul className="flex flex-col gap-y-3">{renderList()}</ul>
    </div>
  );
};
