import React from "react"
import { useState } from "react"
import Dealer from "./Dealer"
import NonCurrentPlayers from "./NonCurrentPlayers"
import CurrentPlayer from "./CurrentPlayer"

const Game = ({amountOfPlayers, amountOfRounds, players}) => {
    console.log(amountOfPlayers, amountOfRounds, players)
    const [gamePlayers, setGamePlayers] = useState(players)
    return (
        <div className="game">
            <Dealer />
            <NonCurrentPlayers />
            <CurrentPlayer />
        </div>
    )
}
export default Game
