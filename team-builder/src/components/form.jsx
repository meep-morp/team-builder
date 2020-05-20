import React from "react"
import { useEffect } from "react";
const Form = props => {
    const {
        onSubmit,
        onChangeHandler,
        value,
    } = props;


    return (

        <form className="forms">
            <label>Name:</label>
            <input type="text" name="name" onChange={onChangeHandler} />
            <label>Email: </label>
            <input type="text" name="email" onChange={onChangeHandler} />
            <label>Role: </label>
            <select name="role" onChange={onChangeHandler} >
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