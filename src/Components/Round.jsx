import { useEffect, useState } from "react";
import "./css/round.css";
import { Controls } from "./Controls";

export const Round = ({
  roundNumber,
  cpuPlayers,
  setCpuPlayers,
  player,
  setPlayer,
  getCard,
}) => {
  let player2 = cpuPlayers.player2;
  let player3 = cpuPlayers.player3;
  let player4 = cpuPlayers.player4;

  const handleTwist = () => {
    player.cards.push(getCard(1)[0]);
    let score = scoreCalc(player);
    score > 21 ? setRoundScore("BUST") : setRoundScore(score);
  };

  const handleStick = () => {};

  const scoreCalc = (p) => {
    let total = 0;
    p.cards.map((card) => (total += card.value));
    return total;
  };

  const [roundScore, setRoundScore] = useState(0);
  useEffect(() => {
    setRoundScore(scoreCalc(player));
  }, []);

  const [stake, setStake] = useState(0);
  const handleStake = (num) => {
    num > player.money ? setStake(player.money) : setStake(num);
  }

  return (
    <>
      <div id="round">
        <h3>Round {roundNumber}</h3>
        <div id="cpu-players">
          <div id="player-2">
            <p>{player2.name}</p>
            <p>Money: £{player2.money}</p>
            <div id="cards">
              {player2.cards.map((card) => (
                <img src={require("../assets/cards/back.png")} id="card"></img>
              ))}
            </div>
          </div>

          <div id="player-3">
            <p>{player3.name}</p>
            <p>Money: £{player3.money}</p>
            <div id="cards">
              {player3.cards.map((card) => (
                <img src={require("../assets/cards/back.png")} id="card"></img>
              ))}
            </div>
          </div>

          <div id="player-4">
            <p>{player4.name}</p>
            <p>Money: £{player4.money}</p>
            <div id="cards">
              {player4.cards.map((card) => (
                <img src={require("../assets/cards/back.png")} id="card"></img>
              ))}
            </div>
          </div>
        </div>

        <div id="player">
          <p>{player.name}</p>
          <p>Money: £{player.money}</p>
          <p>Stake: £{Number(stake)}</p>
          <div id="cards">
            {player.cards.map((card) => (
              <img
                src={require(`../assets/cards/${card.name}.png`)}
                id="card"
              ></img>
            ))}
          </div>
          <p>Current Score: {roundScore}</p>
        </div>
        <Controls
          handleTwist={handleTwist}
          handleStick={handleStick}
          handleStake={handleStake}
          stake={stake}
          money={player.money}
        />
      </div>
    </>
  );
};
