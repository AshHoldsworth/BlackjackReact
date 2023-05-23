export const Dealer = ({ dealer }) => {
  return <>
    <div className="player">
      <h4>Dealer</h4>
      <p>{dealer.name}</p>
      <div id="cards">
        {dealer.cards.map((card, index) => (
          <img
            src={require(`../assets/cards/${card.name}.png`)}
            className="card"
            id={card.name}
            key={index}
          ></img>
        ))}
      </div>
    </div>
  </>
};
