import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Card, Flex, ErrorMessage, SectionTitle, Input } from './Styled';
import { SubmittedTodoItem } from '../types';
import { addTodo } from '../actions';

interface NewTodoFormProps {
  todoCount: number;
}

interface FormInput {
  value: string;
  error: boolean;
}

interface FormInputState {
  title: FormInput;
  description: FormInput;
}

const NewTodoForm: React.FC<NewTodoFormProps> = ({ todoCount }) => {
  const dispatch = useDispatch();
  const defaultFormInputs: FormInputState = {
    title: {
      value: '',
      error: false,
    },
    description: {
      value: '',
      error: false,
    },
  };
  const [formInputs, setFormInputs] = useState<FormInputState>(defaultFormInputs);

  const isDisabled = todoCount >= 5;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const updatedFormInputs = {
      ...formInputs,
      [e.target.name]: {
        value: e.target.value,
        error: !e.target.value,
      },
    } as FormInputState;

    setFormInputs(updatedFormInputs);
  };

  const handleAddTodoClick = (): void => {
    if (!formInputs.title.value || !formInputs.description.value) {
      setFormInputs({
        title: {
          ...formInputs.title,
          error: !formInputs.title.value,
        },
        description: {
          ...formInputs.description,
          error: !formInputs.description.value,
        },
      });
      return;
    }
    const newTodoItem: SubmittedTodoItem = {
      title: formInputs.title.value,
      description: formInputs.description.value,
    };
    dispatch(addTodo(newTodoItem));
    setFormInputs(defaultFormInputs);
  };

  return (
    <Card>
      <SectionTitle>New Todo</SectionTitle>
      {isDisabled && <ErrorMessage>* You can not have more than 5 outstanding todos</ErrorMessage>}
      <Flex>
        <label htmlFor='todo-title'>Todo Title</label>
        <Input
          disabled={isDisabled}
          id='todo-title'
          name='title'
          error={formInputs.title.error}
          value={formInputs.title.value}
          onChange={handleInputChange}
        />
      </Flex>

      <Flex>
        <label htmlFor='todo-description'>Todo Description</label>
        <Input
          disabled={isDisabled}
          id='todo-description'
          name='description'
          error={formInputs.description.error}
          value={formInputs.description.value}
          onChange={handleInputChange}
        />
      </Flex>

      <Button onClick={handleAddTodoClick} disabled={isDisabled} buttonType='neutral'>
        Add Todo
      </Button>
    </Card>
  );
};

export default NewTodoForm;
