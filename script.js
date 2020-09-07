function flip(card) {
  card.children()[0].before(card.children()[1])
}