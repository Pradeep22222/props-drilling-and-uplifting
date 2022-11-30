import { useState } from "react";
import "./App.css";
import { Form } from "./Form";
import { Table } from "./Table";

function App() {
  const [users, setUsers] = useState([]);
  const addUsers = (newUser) => {
    setUsers([...users, newUser]);
  };
  

  return (
    <div className="App">
      <Form adduser={addUsers}></Form>
      <hr />
      <Table lists={users}></Table>
    </div>
  );
}

export default App;
