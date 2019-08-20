import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import AddDeckView from './components/AddDeckView'
import DeckListView from './components/DeckListView'
import { Notifications } from 'expo'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const addDeckView = (props) => (
  <AddDeckView {...props} />
);

const dlv = (props) => (
  <DeckListView {...props} />
)

const Tabs = createBottomTabNavigator({
  "Decks": {
    screen: dlv
  },
  "Add New Deck": {
    screen: addDeckView
  },
});

class AppView extends Component {
  state = {
    decks: [],
    activeDeck: {},
    dlv: true
  }

  notifications() {
    Notifications.cancelAllScheduledNotificationsAsync()
  
    let tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(20)
    tomorrow.setMinutes(0)
  
    Notifications.scheduleLocalNotificationAsync(
      { title: "Take a quiz", body: "Dont forget to take a quiz today" },
      {
        time: tomorrow
      }
    )
  }

  componentDidMount() {
    this.notifications()
  }

  setDecks = (decks) => {
    this.setState({
      decks
    })
  }

  completeQuiz() {
    Notifications.cancelAllScheduledNotificationsAsync()
  }

  clickOnDeck = (deck) => {
    let ad = {}
    for(deckid in this.state.decks) {
      if(this.state.decks[deckid].name === deck) {
        ad = this.state.decks[deckid]
        break
      }
    }
    this.setState({
      activeDeck: ad,
      dlv: false
    })
  }

  decksView = () => {
    this.setState({
      dlv: true
    })
  }

  addDeck = (deck) => {
    this.setState(prevState => {
      let newDecks = prevState.decks
      newDecks.push(deck)
      return {
        newDecks
      }
    })
  }

  addCard = (card, deck) => {
    for(d in this.state.decks) {
      if(this.state.decks[d].name === deck.name) {
        let temp = this.state.decks
        temp[d].cards.push(card)
        this.setState({
          decks: temp
        })
        return
      } else {

      }
    }
  }

  render() {
    return <Tabs screenProps={{ 
      decks: this.state.decks, 
      setDecks: this.setDecks, 
      addDeck: this.addDeck, 
      dlv: this.state.dlv, 
      clickOnDeck: this.clickOnDeck, 
      activeDeck: this.state.activeDeck,
      addCard: this.addCard,
      decksView: this.decksView,
      completeQuiz: this.completeQuiz }}/>
  }
}

export default function App() {
  return (
    <AppView />
  );
}