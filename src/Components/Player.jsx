export const Player = ({player, stake, roundScore}) => {

    return <>
        <div className="player">
          <p>{player.name}</p>
          <p>Money: £{player.money}</p>
          <p>Stake: £{Number(stake)}</p>
          <div id="cards">
            {player.cards.map((card, index) => (
              <img
                src={require(`../assets/cards/${card.name}.png`)}
                className="card"
                id={card.name}
                key={index}
              ></img>
            ))}
          </div>
          <p>Current Score: {roundScore}</p>
        </div>
    </>
}
