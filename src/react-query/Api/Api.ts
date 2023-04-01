import axios from 'axios';

export const getAllTodos = () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=20')
    .then(res => res.data);
};

export const getTodo = (todoId: number) => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
    .then(res => res.data);
};
