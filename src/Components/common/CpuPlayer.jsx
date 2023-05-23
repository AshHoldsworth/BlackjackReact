export const CpuPlayer = ({ player }) => {
  return (
    <>
      <div className="player">
        <p>{player.name}</p>
        <p>Money: £{player.money}</p>
        <div id="cards">
          {player.cards.map((card, index) => (
            <img
              src={require(`../../assets/cards/${card.name}.png`)}
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
