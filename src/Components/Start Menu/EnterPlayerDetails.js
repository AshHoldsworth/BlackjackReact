const EnterPlayerDetails = (props) => {
    const playerNamesArray = []
    const getPlayerName = (e,i) => {
        playerNamesArray[i] = e.target.value
        console.log("playerNamesArray = ", playerNamesArray)
    }
    let playerTextBoxes = []
    for (let i=0; i<props.amount; i++) {
           playerTextBoxes.push(
            <p key={"p" + i}>
                <span key={"span" + i}>Player {i+1} </span>
                <input 
                    id={`player-${i+1}-name`}
                    type="text"
                    placeholder="Name"
                    disabled={props.disabled}
                    onChange={e => (getPlayerName(e,i))}
                    key={i} />    
            </p>
           )     
    }

    return (
        <div className="enter-player-details">
            {playerTextBoxes}
            <button
                id="submit-player-names-button"
                disabled={props.disabled}
                onClick={() => props.handler(playerNamesArray)}>
                    Submit Names
            </button>
        </div>
    )
}

export default EnterPlayerDetails
