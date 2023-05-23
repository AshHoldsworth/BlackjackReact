import { useEffect, useState } from "react";
import "./css/round.css";
import { Controls } from "./Controls";
import { CpuPlayer } from "./common/CpuPlayer";
import { Player } from "./Player";
import { Dealer } from "./Dealer";
import { getCardDeck } from "../Functions/getCardDeck";

export const Round = ({ roundNumber, allPlayers, setAllPlayers }) => {
  const handleTwist = () => {
    allPlayers.player.cards.push(getCard(1)[0]);
    let score = scoreCalc(allPlayers.player);
    // score > 21 ? setRoundScore("BUST") : setRoundScore(score);
    if (score > 21) {
      let containsAce = false;
      allPlayers.player.cards.map((card) => {
        console.log(card);
        if (card.name.includes("ace")) {
          card.value = 1;
          containsAce = true;
          setRoundScore(score);
        }
        if (!containsAce) {
          setRoundScore("BUST");
        }
      });
    } else {
      setRoundScore(score);
    }
  };

  const handleStick = () => {};

  const scoreCalc = (p) => {
    let total = 0;
    p.cards.map((card) => (total += card.value));
    return total;
  };

  const [roundScore, setRoundScore] = useState(0);
  useEffect(() => {
    setRoundScore(scoreCalc(allPlayers.player));
  }, []);

  const [stake, setStake] = useState(0);
  const handleStake = (num) => {
    num > allPlayers.player.money
      ? setStake(allPlayers.player.money)
      : setStake(num);
  };

  let deck = getCardDeck().sort((a, b) => 0.5 - Math.random());
  const getCard = (amount) => {
    let random = Math.floor(Math.random() * deck.length - 1);
    if (random == deck.length - 1) {
      random = Math.floor(Math.random() * deck.length - 1);
    }
    let card = deck.splice(random, amount);
    return card;
  };

  useEffect(() => {
    allPlayers.dealer.cards = getCard(2);
    allPlayers.player2.cards = getCard(2);
    allPlayers.player3.cards = getCard(2);
    allPlayers.player.cards = getCard(2);
  }, []);

  return (
    <>
      <div id="round">
        <h2>Round {roundNumber}</h2>

        <div id="dealer">
          <Dealer dealer={allPlayers.dealer} />
        </div>
        
        <div id="cpu-players">
          <CpuPlayer player={allPlayers.player2} />
          <CpuPlayer player={allPlayers.player3} />
        </div>

        <div id="player">
          <Player
            player={allPlayers.player}
            stake={stake}
            roundScore={roundScore}
          />
        </div>
        <Controls
          handleTwist={handleTwist}
          handleStick={handleStick}
          handleStake={handleStake}
          stake={stake}
          money={allPlayers.player.money}
        />
      </div>
    </>
  );
};
