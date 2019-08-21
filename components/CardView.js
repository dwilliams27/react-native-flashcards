import React, { Component } from 'react'
import { View, Button, Text } from 'react-native'

class CardView extends Component {
  state = {
    showFront: true
  }

  showBack = () => {
    this.setState({
      showFront: false
    })
  }

  nextView = () => {
    this.setState({
      showFront: true
    })
    this.props.showNextView()
  }

  restart = () => {
    this.setState({
      showFront: true
    })
    this.props.resetQuiz()
  }

  render() {
    return <View>
      <Text>{`Cards remaining: ${this.props.remaining}`}</Text>
      {
        this.state.showFront 
        ? <View>
            <Text>Question</Text>
            <Text>{this.props.card.question}</Text>
            <Button onPress={this.showBack} title="Flip"></Button>
          </View>
        : <View>
            <Text>Answer</Text>
            <Text>{this.props.card.answer}</Text>
            {
              (this.props.index + 1 >= this.props.length)
                ? <View>
                    <Text>You got {this.props.numCorrect} answers correct and {this.props.numIncorrect} incorrect</Text>
                    <Button onPress={this.restart} title="Restart quiz"></Button>
                    <Button onPress={this.nextView} title="Return to deck view"></Button>
                  </View>
                : <View>
                    <Button onPress={() => this.props.correct()} title="Mark Correct"></Button>
                    <Button onPress={() => this.props.incorrect()} title="Mark Incorrect"></Button>
                    <Button onPress={this.nextView} title="Next"></Button>
                  </View>
            }
          </View>
      }
    </View>
  }
}

export default CardView