export const CpuPlayer = ({ player }) => {
  return (
    <>
      <div id="player-2">
        <p>{player.name}</p>
        <p>Money: £{player.money}</p>
        <div id="cards">
          {player.cards.map((card, index) => (
            <img
              src={require("../../assets/cards/back.png")}
              className="card"
              id={card.name}
              key={index}
            ></img>
          ))}
        </div>
      </div>
    </>
  );
};
