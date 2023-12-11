import axios from "axios";

const getTodos = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`);
  console.log(response.data);
  return response.data;
};

// 추가
const addTodo = async (newTodo) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, newTodo);
};

export { getTodos, addTodo };
