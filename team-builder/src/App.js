import React, { useState } from "react";
import Form from "./components/form";
import Cards from "./components/cards";
import "./App.css";

const initialUser = {
	name: "",
	email: "",
	role: "",
};

function App() {
	const [team, setTeam] = useState([]);
	const [edit, setEdit] = useState({});
	const [user, setUser] = useState(initialUser);
	const [message, setMessage] = useState("");

	const onChangeHandler = event => {
		setMessage("");
		setUser({
			...user,
			[event.target.name]: event.target.value,
		});
	};

	const onSubmit = event => {
		event.preventDefault();
		console.log(team);
		console.log("Submitted!");
		setTeam([user, ...team]);
		setUser(initialUser);
	};

	return (
		<div className="App">
			<h1>Conquest Team Maker</h1>
			<h2>Sign-Up</h2>
			<Form
				onSubmit={onSubmit}
				setUser={setUser}
				member={user}
				onChangeHandler={onChangeHandler}
				message={message}
				setMessage={setMessage}
			/>
			{team.map((member, i) => (
				<Cards
					onChangeHandler={onChangeHandler}
					member={member}
					key={i}
					edit={edit}
					setEdit={setEdit}
					setMessage={setMessage}
					onSubmit={onSubmit}
					onEdit={() => {
						const editedTeam = team.filter(removal => {
							return removal.name !== member.name;
						});
						setTeam([edit, ...editedTeam]);
						setUser(initialUser);
					}}
				/>
			))}
		</div>
	);
}

export default App;
