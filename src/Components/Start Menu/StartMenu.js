import './StartMenu.css'
import { useState } from 'react'
import SelectPlayers from "./SelectPlayers"
import EnterPlayerDetails from "./EnterPlayerDetails"
import SelectRounds from "./SelectRounds"

const StartMenu = (props) => {
    const [startMenuState, setStartMenuState] = useState("amountofplayers")
    const [amountOfPlayers, setAmountOfPlayers] = useState()
    const [players, setPlayers] = useState()
    const [amountOfRounds, setAmountOfRounds] = useState(1)

    const setPlayersAmount = (amount) => {
        setAmountOfPlayers(amount)
        setStartMenuState("playerdetails")
    }

    const setPlayerDetails = (names) => {
        let playersSetup = []
        names.map(name => playersSetup.push({
            name: name,
            cards: [],
            roundScore: 0,
            bust: false,
            chips: 0,
            userPlayer: true
        }))
        setPlayers(playersSetup)
        setStartMenuState("amountofrounds")
    }

    const setNumberOfRounds = (number) => {
        setAmountOfRounds(number)
    }

    if (startMenuState === "amountofplayers") {
        return (
            <div className="start-menu">
                <SelectPlayers handler={setPlayersAmount} disabled={false} />
            </div>
        )
    } else if (startMenuState === "playerdetails") {
        return (
            <div className="start-menu">
                <SelectPlayers handler={setPlayersAmount} disabled={true} />
                <EnterPlayerDetails handler={setPlayerDetails} amount={amountOfPlayers} disabled={false} />

            </div>
        )
    } else if (startMenuState === "amountofrounds") {
        return (
            <div className="start-menu">
                <SelectPlayers handler={setPlayersAmount} disabled={true} />
                <EnterPlayerDetails handler={setPlayerDetails} amount={amountOfPlayers} disabled={true} />
                <SelectRounds handler={setNumberOfRounds} />
                <br />
                <div className="start-game">
                    <button
                        id="button"
                        onClick={() => props.handler(players, amountOfPlayers, amountOfRounds)}>
                        Start Game!
                    </button>
                </div>
            </div>
        )
    }
}

export default StartMenu
