import React from 'react';
import { useDispatch } from 'react-redux';
import { completeTodoItem, removeTodo } from '../actions';
import { TodoItem } from '../types';
import { Button, ListItem, TodoTitle, TodoDescription } from './Styled';

const Task: React.FC<TodoItem> = ({ isCompleted, title, description, id }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(completeTodoItem(id));
  };

  const handleRemoveClick = () => {
    dispatch(removeTodo(id));
  };

  return (
    <ListItem>
      <TodoTitle>{title}</TodoTitle>
      <TodoDescription>{description}</TodoDescription>
      {isCompleted ? (
        <Button onClick={handleRemoveClick} buttonType='negative'>
          Remove Item
        </Button>
      ) : (
        <Button onClick={handleCompleteClick} buttonType='positive'>
          Complete Task
        </Button>
      )}
    </ListItem>
  );
};

export default Task;
