/**
 *
 * TodoInput
 *
 */
import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { messages } from './messages';

// interface Props {
//   // todoitem: string;
// }

export const TodoInput = ({ setTodoItem }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { t, i18n } = useTranslation();
  const [todo, setTodo] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setTodo((e.target.name = e.target.value));
  };

  const handleClick = (): void => {
    // console.log(todo);
    setTodoItem(previous => {
      return [
        ...previous,
        {
          id: Math.random(),
          isCompleted: false,
          name: todo,
        },
      ];
    });

    setTodo('');
  };

  return (
    <div className="flex gap-x-6 justify-center">
      <input
        className="bg-gray-100 px-4 rounded outline-none"
        type="text"
        placeholder="Add Todo"
        name="todo"
        value={todo}
        onChange={handleChange}
      />
      <button
        className="p-1.5 px-4 text-white focus:outline-none rounded-md  font-semibold bg-blue-500"
        onClick={handleClick}
      >
        Add
      </button>
    </div>
  );
};
