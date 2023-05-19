import { useState } from "react";

export const Controls = ({ handleTwist, handleStick, handleStake, stake }) => {
  let [stakeSubmitted, setStakeSubmitted] = useState(false);

  return (
    <>
      <div id="controls">
        {stakeSubmitted == true ? (
          <div id="stick-twist">
            <button type="submit" onClick={() => handleStick()}>
              Stick
            </button>
            <button type="submit" onClick={() => handleTwist()}>
              Twist
            </button>
          </div>
        ) : (
          <>
            <div id="stake">
              <input
                type="number"
                placeholder="Stake"
                id="stake-input"
                value={stake}
                onChange={(e) => handleStake(e.target.value)}
              />
              <button type="submit" onClick={() => setStakeSubmitted(true)}>
                Submit
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
