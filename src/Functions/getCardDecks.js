const getCardDecks = (amount) => {
    const suits = ["spades", "clubs", "hearts", "diamonds"]
    const number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
    let deck = []
    for (let i = 0; i < amount; i++) {
        suits.map(suit => {
            number.map((number, i) => {
                deck.push({ [suit + number]: { suit: suit, value: value[i] } })
            })
        })
    }
    return deck
}
export default getCardDecks
