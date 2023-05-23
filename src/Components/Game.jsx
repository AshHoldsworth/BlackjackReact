import { useState } from "react";
import { LandingPage } from "./LandingPage";
import { Round } from "./Round";
import { playerNames } from "../data/cpuPlayerNames";

export const Game = () => {
  let [allPlayers, setAllPlayers] = useState({
    dealer: {
      name: playerNames[Math.floor(Math.random() * playerNames.length - 1)],
      cards: [],
      roundScore: 0,
    },
    player2: {
      name: playerNames[Math.floor(Math.random() * playerNames.length - 1)],
      money: 100,
      cards: [],
      roundScore: 0,
    },
    player3: {
      name: playerNames[Math.floor(Math.random() * playerNames.length - 1)],
      money: 100,
      cards: [],
      roundScore: 0,
    },
    player: {},
  });
  
  let [gameRounds, setGameRounds] = useState();

  let roundNumber = 1;

  if (roundNumber > gameRounds) {
    console.log("END OF GAME");
  } else {
    if (allPlayers.player.name) {
      return (
        <>
          <div id="game">
            <Round
              roundNumber={roundNumber}
              allPlayers={allPlayers}
              setAllPlayers={setAllPlayers}
            />
          </div>
        </>
      );
    } else {
      return (
        <LandingPage
          allPlayers={allPlayers}
          setAllPlayers={setAllPlayers}
          setGameRounds={setGameRounds}
        />
      );
    }
  }
};
