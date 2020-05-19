import React, { useState } from "react";
import Form from "./components/form";
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
      <div className="member-list">
        {team.map((member) => {
          return (
            <div className="member-card">
              <h1>{member.name}</h1>
              <h2>{member.email}</h2>
              <h2>{member.role}</h2>
            </div>
          )
        })}
      </div>
      <Form onSubmit={onSubmit} onChangeEmail={onChangeEmail} onChangeName={onChangeName} onChangeRole={onChangeRole} />
    </div>
  );
}

export default App;
