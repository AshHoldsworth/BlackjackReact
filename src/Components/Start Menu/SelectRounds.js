import { useState } from "react"

const SelectRounds = (props) => {
    const arrayOfOptions = [1, 3, 5, 10]
    const options = []
    arrayOfOptions.map(option => (
        options.push(
            <option value={option} key={option}>{option}</option>
        )
    ))
    return (
        <div id="select-rounds">
            <p>Please select how many rounds you would like to play:</p>
            <select id="select-rounds-select" onChange={(e) => props.handler(parseInt(e.target.value))}>
                {options}
            </select>
        </div>

    )
}
export default SelectRounds
