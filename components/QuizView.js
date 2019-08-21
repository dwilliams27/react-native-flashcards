import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import CardView from './CardView'

class QuizView extends Component {
  state = {
    index: 0,
    numCorrect: 0,
    numIncorrect: 0
  }

  showNextView = () => {
    if(this.state.index + 1 >= this.props.deck.cards.length) {
      this.props.deckView()
      this.props.completeQuiz()
    } else {
      this.setState({
        index: this.state.index+1
      })
    }
  }

  notifyCorrect = () => {
    this.setState({
      numCorrect: this.state.numCorrect + 1
    })
  }

  notifyIncorrect = () => {
    this.setState({
      numIncorrect: this.state.numIncorrect + 1
    })
  }

  resetQuiz = () => {
    this.setState({
      index: 0,
      numCorrect: 0,
      numIncorrect: 0
    })
  }

  returnToDeckView = () => {
    this.props.decksView()
  }

  render() {
    if(!this.props.deck.cards[this.state.index]) {
      return <View>
        <Text>No questions to show!</Text>
        <Button title="Return to deck view" onPress={this.returnToDeckView}/>
      </View>
    }
    return <View>
      <CardView card={this.props.deck.cards[this.state.index]} 
        remaining={this.props.deck.cards.length - this.state.index - 1} 
        showNextView={this.showNextView}
        reset={this.resetQuiz} 
        correct={this.notifyCorrect}
        incorrect={this.notifyIncorrect}
        numCorrect={this.state.numCorrect}
        numIncorrect={this.state.numIncorrect}
        index={this.state.index}
        length={this.props.deck.cards.length}
        resetQuiz={this.resetQuiz} />
    </View>
  }
}

export default QuizView