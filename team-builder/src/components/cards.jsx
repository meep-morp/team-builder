import React, { useState } from "react";
import Form from "./form";
import { useEffect } from "react";

const Cards = props => {
    const {
        onChangeHandler,
        member,
        edit,
        setEdit,
        onEdit,
        value } = props;
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="member-list">

            <div className="container"> {
                isEditing === false ?
                    <div className="member-card">
                        <h2>{member.role}</h2>
                        <h3>{member.name}</h3>
                        <h3>{member.email}</h3>
                        <button className="edit" onClick={
                            event => {
                                setIsEditing(true);
                                console.log("edited");
                            }
                        } >Edit</button>
                    </div> :
                    <div className="editForm">
                        <Form onSubmit={event => {
                            setIsEditing(false);
                            onEdit();
                        }} onChangeHandler={event => {
                            console.log(edit);
                            setEdit({
                                ...edit,
                                [event.target.name]: event.target.value,
                            })
                        }}
                            member={member} />
                    </div>
            }
            </div>
        </div>
    )
}

export default Cards;
