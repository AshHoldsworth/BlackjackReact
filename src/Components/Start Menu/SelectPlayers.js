const SelectPlayers = (props) => {
    let buttons = []
    for (let i = 0; i < 4; i++) {
        buttons.push(
            <button
                className="select-players-button"
                disabled={props.disabled}
                onClick={() => props.handler(i+1)}
                key={i+1}>
                    {i+1}
            </button>
        )
    }
    
    return (
        <div id="select-players">
                <p>Please select how many players there are:</p>
                <div id="select-players-buttons">
                    {buttons}
                </div>
            </div>
    )
}

export default SelectPlayers
