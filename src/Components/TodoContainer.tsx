import React from 'react';
import { TodoItem } from '../types';
import { Card, SectionTitle, EmptyTaskLabel } from './Styled';
import TodoTask from './TodoTask';

interface TodoProps {
  completedTasks: TodoItem[];
  incompleteTasks: TodoItem[];
}

const TodoContainer: React.FC<TodoProps> = ({ completedTasks, incompleteTasks }) => {
  return (
    <div>
      <Card>
        <SectionTitle>Remaining Tasks</SectionTitle>
        {incompleteTasks.length > 0 ? (
          <ul>
            {incompleteTasks.map((task) => (
              <TodoTask {...task} key={task.id} />
            ))}
          </ul>
        ) : (
          <EmptyTaskLabel>There are no uncompleted items</EmptyTaskLabel>
        )}
      </Card>

      <Card>
        <SectionTitle>Completed Tasks</SectionTitle>
        {completedTasks.length > 0 ? (
          <ul>
            {completedTasks.map((task) => (
              <TodoTask {...task} key={task.id} />
            ))}
          </ul>
        ) : (
          <EmptyTaskLabel>There are no completed items</EmptyTaskLabel>
        )}
      </Card>
    </div>
  );
};

export default TodoContainer;
