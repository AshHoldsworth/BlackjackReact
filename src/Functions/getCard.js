const getCard = (cards, amount) => {
    let cardsToReturn = []
    for (let i = 0; i < amount; i++) {
        cardsToReturn.push(cards.shift())
    }
    return cardsToReturn
}
export default getCard
