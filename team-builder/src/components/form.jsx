import React from "react"
import { useState } from "react";
const Form = props => {
    let {
        onSubmit,
        onChangeHandler,
        setMessage,
        message,
        member,
    } = props;


    return (

        <form className="forms">
            <h3 style={{
                color: "red",
            }} >{message}</h3>
            <label>Name:</label>
            <input type="text" name="name"
                onChange={onChangeHandler}
                value={member.name} />
            <label>Email: </label>
            <input type="text" name="email"
                value={member.email}
                onChange={event => {
                    if (!event.target.value.includes("@")) {
                        setMessage("Invalid Email Address");
                    } else {
                        onChangeHandler(event);
                    }
                }} />
            <label>Role: </label>
            <select name="role"
                onChange={onChangeHandler}
                value={member.role}>
                <option value="selectRole">Select Role</option>
                <option value="Jungle">Jungle</option>
                <option value="Mid-Lane">Mid-Lane</option>
                <option value="Support">Support</option>
                <option value="Solo">Solo</option>
                <option value="ADC">ADC</option>
            </select>
            <input type="submit" id="submitButton" onClick={onSubmit} />
        </form>
    )
}

export default Form;