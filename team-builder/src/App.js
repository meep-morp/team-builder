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
      <h1>Member List</h1>
      <div className="member-list">
        {team.map((member, i) => {
          return (
            <div className="member-card">
              
              <h2>{member.role}</h2>
              <h3>{member.name}</h3>
              <h3>{member.email}</h3>
              <h4>{i + 1}</h4>
            </div>
          )
        })}
      </div>
      <Form onSubmit={onSubmit} onChangeEmail={onChangeEmail} onChangeName={onChangeName} onChangeRole={onChangeRole} />
    </div>
  );
}

export default App;
