const shuffle = (cards) => {
    let j, x, i
    for (i = cards.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        x = cards[i]
        cards[i] = cards[j]
        cards[j] = x
    }
    return cards
}

export default shuffle
