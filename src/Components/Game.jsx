import { useState, useEffect } from "react";
import { getCardDeck } from "../Functions/getCardDeck";
import { LandingPage } from "./LandingPage";
import { Round } from "./Round";

export const Game = () => {
  let [cpuPlayers, setCpuPlayers] = useState({
    player2: {
      name: "Zak",
      money: 100,
      cards: [],
      roundScore: 0,
    },
    player3: {
      name: "Christian",
      money: 100,
      cards: [],
      roundScore: 0,
    },
    player4: {
      name: "Narayan",
      money: 100,
      cards: [],
      roundScore: 0,
    },
  });

  let [player, setPlayer] = useState({
    money: 100,
    cards: []
  });

  let deck = getCardDeck().sort((a, b) => 0.5 - Math.random());
  const getCard = (amount) => {
    let random = Math.floor(Math.random() * deck.length - 1);
    let card = deck.splice(random, amount);
    if (card === undefined) {
      random = Math.floor(Math.random() * deck.length - 1);
      card = deck.splice(random);
    } else {
      return card;
    }
  };

  useEffect(() => {
    cpuPlayers.player2.cards = getCard(2);
    cpuPlayers.player3.cards = getCard(2);
    cpuPlayers.player4.cards = getCard(2);
    player.cards = getCard(2);
  }, []);

  let [gameRounds, setGameRounds] = useState();

  let roundNumber = 1;

  if (roundNumber > gameRounds) {
    console.log("END OF GAME");
  } else {
    if (player.name) {
      return (
        <>
          <div id="game">
            <Round
              roundNumber={roundNumber}
              cpuPlayers={cpuPlayers}
              setCpuPlayers={setCpuPlayers}
              player={player}
              setPlayer={setPlayer}
              getCard={getCard}
            />
          </div>
        </>
      );
    } else {
      return (
        <LandingPage
          player={player}
          setPlayer={setPlayer}
          setGameRounds={setGameRounds}
        />
      );
    }
  }
};
