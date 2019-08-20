import React, { Component } from 'react'
import { View, Button, Text} from 'react-native'
import AddCardView from './AddCardView'
import QuizView from './QuizView'

class DeckView extends Component {
  state = {
    view: 'deck'
  }

  setView(view) {
    this.setState({
      view
    })
  }

  render() {
    return <View>
      {
        this.state.view === 'deck' && <View>
          <Text>{this.props.deck.name}</Text>
          <Button title="Add Card" onPress={() => this.setView('add')} ></Button>
          <Button title="Start quiz" onPress={() => this.setView('quiz')} ></Button>
          <Button title="Back to decks view" onPress={() => this.props.decksView()} ></Button>
        </View>
      }
      {
        this.state.view === 'add' && <AddCardView addCard={this.props.addCard} deck={this.props.deck} deckView={() => this.setView('deck')} />
      }
      {
        this.state.view === 'quiz' && <QuizView deck={this.props.deck} deckView={() => this.setView('deck')} decksView={this.props.decksView} completeQuiz={this.props.completeQuiz} />
      }
    </View>
  }
}

export default DeckView;