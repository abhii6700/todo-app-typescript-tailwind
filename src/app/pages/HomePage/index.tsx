import { TodoList } from 'app/components/TodoList';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { TodoInput } from '../../components/TodoInput';

export interface Hprops {
  todoItem: {
    name: string;
    isCompleted: boolean;
    id: number;
  }[];
}

export const HomePage: React.FC = () => {
  const [todoItem, setTodoItem] = useState<Hprops['todoItem']>([]);

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div className="container mt-16 flex flex-col gap-y-8  items-center">
        <h1 className="text-2xl  font-bold">Todo List</h1>
        <TodoInput setTodoItem={setTodoItem} />
        <TodoList todoItem={todoItem} setTodoItem={setTodoItem} />
      </div>
    </>
  );
};
