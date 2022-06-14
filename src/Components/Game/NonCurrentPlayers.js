const NonCurrentPlayers = () => {

    return (
        <div className="other-players">
            <p>Waiting...</p>
            <div className="non-current-players" id="non-current-1">
                <div className="non-current-cards" id="non-current-cards-1"/>
                <div className="non-current-details" id="non-current-details-1" />
            </div>
            <div className="non-current-players" id="non-current-2">
                <div className="non-current-cards" id="non-current-cards-2" />
                <div className="non-current-details" id="non-current-details-2" />
            </div>
            <div className="non-current-players" id="non-current-3">
                <div className="non-current-cards" id="non-current-cards-3" />
                <div className="non-current-details" id="non-current-details-3" />
            </div>
        </div>
    )
}

export default NonCurrentPlayers
