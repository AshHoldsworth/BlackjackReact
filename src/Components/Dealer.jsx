export const Dealer = ({ dealer }) => {
  return <>
    <div id="player-2">
      <h4>Dealer</h4>
      <p>{dealer.name}</p>
      <div id="cards">
        {dealer.cards.map((card, index) => (
          <img
            src={require("../assets/cards/back.png")}
            className="card"
            id={card.name}
            key={index}
          ></img>
        ))}
      </div>
    </div>
  </>
};
