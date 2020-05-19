import React, { useState } from "react";

const Cards = props => {
    const { team, setTeam } = props;
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="member-list">
            {team.map((member, i) => {
                return (
                    <div className="member-card">
                        <h2>{member.role}</h2>
                        <h3>{member.name}</h3>
                        <h3>{member.email}</h3>
                        <h4>{i + 1}</h4>
                        <button className="edit" onClick={
                            event => {
                                isEditing(true);
                                console.log("edited")
                            }
                        } >Edit</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards;
