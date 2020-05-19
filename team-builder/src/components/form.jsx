import React from "react"
const Form = props => {
    const { onSubmit, onChangeEmail, onChangeName, onChangeRole } = props;
    return (
        <div className="forms">
            <label>Name:</label>
            <input type="text" name="name" onChange={onChangeName} />
            <label>Email: </label>
            <input type="text" name="email" onChange={onChangeEmail} />
            <label>Role: </label>
            <select id="role" onChange={onChangeRole} >
                <option value="Jungle">Jungle</option>
                <option value="Mid-Lane">Mid-Lane</option>
                <option value="Support">Support</option>
                <option value="Solo">Solo</option>
                <option value="ADC">ADC</option>
            </select>
            <input type="submit" onClick={onSubmit} />
        </div>
    )
}

export default Form;