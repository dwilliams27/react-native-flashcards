import { AsyncStorage } from 'react-native'

export const DECKS_STORAGE_KEY = 'FlashCards:decks'

export function addDeck (deck) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data.decks.push(deck);
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
    }).catch(error => {
      console.log(error);
    })
}

export function initialize() {
  return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify({
    decks: [
      {
        name: "Sample Deck 1",
        cards: [
          {
            question: "Test question",
            answer: "Test answer"
          },
          {
            question: "Test question 2",
            answer: "Test answer 2"
          },
          {
            question: "Test question 3",
            answer: "Test answer 3"
          }
        ]
      }
    ]
  }))
}

export function addCard (card, deckName) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data.decks[deckName].push(card)
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
    })
}

export function getDecks (res) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      res(data)
    })
}