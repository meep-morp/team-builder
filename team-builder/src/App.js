import React, { useState } from "react";
import Form from "./components/form";
import Cards from "./components/cards";
import "./App.css";

function App() {
  const [team, setTeam] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const onChangeName = event => {
    setName(event.target.value);
  }
  const onChangeEmail = event => {
    setEmail(event.target.value);
  }
  const onChangeRole = event => {
    setRole(event.target.value);
  }
  const onSubmit = event => {
    event.preventDefault();
    console.log(team);
    console.log("Submitted!");
    setTeam(team.concat({
      name: name,
      email: email,
      role: role,
    }))
  }

  return (
    <div className="App">
      <h1>Conquest Team</h1>
      <Cards team={team} setTeam={setTeam} />
      <Form onSubmit={onSubmit} onChangeEmail={onChangeEmail} onChangeName={onChangeName} onChangeRole={onChangeRole} />
    </div>
  );
}

export default App;
