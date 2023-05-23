import { useState } from "react";

export const LandingPage = ({ allPlayers, setAllPlayers, setGameRounds }) => {
  let [name, setName] = useState();
  let [rounds, setRounds] = useState();

  
  const handleClick = () => {
    setAllPlayers({ ...allPlayers, player: {
      name: name,
      money: 100,
      cards: [],
    
    } });
    setGameRounds(rounds);
  };

  const handleRounds = (num) => {
    num > 10 ? setRounds(10) : setRounds(num);
  };

  return (
    <>
      <div id="landing-page">
        <div>
          <h3>Name</h3>
          <input
            className="user-input"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <h3>Rounds</h3>
          <p style={{ fontSize: 12 }}>(max 10)</p>
          <input
            className="user-input"
            type="number"
            name="rounds"
            value={rounds}
            onChange={(e) => handleRounds(e.target.value)}
          />
        </div>
        <button type="submit" onClick={() => handleClick()}>
          Submit
        </button>
      </div>
    </>
  );
};
