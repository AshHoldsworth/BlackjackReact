import './App.css';
import React from 'react';
import { useState } from 'react';
import StartMenu from './Components/Start Menu/StartMenu';
import Game from './Components/Game/Game';

const App = () => {
  const [amountOfPlayers, setAmountOfPlayers] = useState()
  const [players, setPlayers] = useState()
  const [amountOfRounds, setAmountOfRounds] = useState(1)
  const [setupComplete, setSetupComplete] = useState(false)

  const startGame = (playersAmount, playerDetails, rounds) => {
    console.log("startGame was called.")
    setAmountOfPlayers(playersAmount)
    setPlayers(playerDetails)
    setAmountOfRounds(rounds)
    setSetupComplete(true)
  }

  if (!setupComplete) {
    return (
      <div className="App">
        <header>
          <h1>Blackjack!</h1>
        </header>
        <StartMenu handler={startGame} />
      </div>
    )
  } else if (setupComplete) {
    return (
      <div className="App">
        <header>
          <h1>Blackjack!</h1>
        </header>
        <Game amountOfPlayers={amountOfPlayers} amountOfRounds={amountOfRounds} players={players} />
      </div>
    )
  }
}

export default App;
