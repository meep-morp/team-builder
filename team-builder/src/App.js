import React, { useState } from "react";
import Form from "./components/form";
import Cards from "./components/cards";
import "./App.css";

const initialUser = {
  name: "",
  email: "",
  role: "",
}

function App() {
  const [team, setTeam] = useState([]);
  const [edit, setEdit] = useState({});
  const [user, setUser] = useState(initialUser);

  const onChangeHandler = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    })
  }

  const onSubmit = event => {
    event.preventDefault();
    console.log(team);
    console.log("Submitted!");
    setTeam([user, ...team]);
    setUser(initialUser);
  }

  return (
    <div className="App">
      <h1>Conquest Team Maker</h1>
      <h2>Sign-Up</h2>
      <Form
        onSubmit={onSubmit}
        onChangeHandler={onChangeHandler}
        member={user} />
      {team.map((member, i) => (
        <Cards
          member={member}
          key={i}
          edit={edit}
          setEdit={setEdit}
          onSubmit={onSubmit}
          onChangeHandler={onChangeHandler}
          onEdit={event => {
            const editedTeam = team.filter((removal) => {
              if (removal.name !== member.name) {
                return member;
              }
            })
            setTeam([edit, ...editedTeam]);
            setUser(initialUser);
          }
          } />
      ))}
    </div>
  );
}

export default App;
