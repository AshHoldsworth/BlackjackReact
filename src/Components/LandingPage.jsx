import { useState } from "react";

export const LandingPage = ({player, setPlayer, setGameRounds}) => {
  let [name, setName] = useState();
  let [rounds, setRounds] = useState();

  const handleClick = () => {
      setPlayer({...player, name: name})
      setGameRounds(rounds)
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
