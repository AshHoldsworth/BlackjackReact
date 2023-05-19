import { useEffect, useState } from "react";
import "./css/round.css";

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

  const handleNewCard = () => {
    player.cards.push(getCard(1)[0]);
    let score = scoreCalc(player);
    score > 21 ? setRoundScore("BUST") : setRoundScore(score);
  };

  const scoreCalc = (p) => {
    let total = 0;
    p.cards.map((card) => (total += card.value));
    return total;
  };

  const [roundScore, setRoundScore] = useState(null);
  useEffect(() => {
    setRoundScore(scoreCalc(player));
  }, []);

  const [stake, setStake] = useState();
  const handleStake = num => num > player.money ? setStake(player.money) : setStake(num);

  const handleStakeSubmit = () => {
    
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

        <div id="controls">
          <button type="submit" onClick={() => handleNewCard()}>
            New Card
          </button>
          <p>
          <input
            type="number"
            placeholder="Stake"
            id="stake-input"
            value={stake}
            onChange={(e) => handleStake(e.target.value)}
          /><button type="submit" onClick={() => handleStakeSubmit()}>
          Submit
        </button></p>
        </div>
      </div>
    </>
  );
};
