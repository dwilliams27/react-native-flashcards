import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import DeckView from './DeckView'

class DeckListView extends Component {
  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })

  viewDeck(deck) {
    this.props.screenProps.clickOnDeck(deck)
  }

  render() {
    
    return <View style={this.styles.container}>
      {this.props.screenProps.dlv ?
        this.props.screenProps.decks !== undefined && Object.keys(this.props.screenProps.decks).map(deck => {
        return <View key={deck}>
          <Button title={this.props.screenProps.decks[deck].name} onPress={() => this.viewDeck(this.props.screenProps.decks[deck].name)} />
        </View>
      }) 
      : <DeckView deck={this.props.screenProps.activeDeck} addCard={this.props.screenProps.addCard} decksView={this.props.screenProps.decksView} completeQuiz={this.props.screenProps.completeQuiz} />
      }
    </View>
  }
}

export default DeckListView;