import React, { Component } from 'react'
import { Button, Text, View, TextInput, StyleSheet } from 'react-native'

class AddCardView extends Component {
  constructor(props) {
    super(props)
    this.state = { question: '', answer: '' }
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })

  addCard = (event) => {
    const obj = {
      question: this.state.question,
      answer: this.state.answer
    }
    this.props.addCard(obj, this.props.deck)
    this.props.deckView()
    this.setState({
      question: '',
      answer: ''
    })
  }

  render() {
    return <View style={this.styles.container}>
      <Text>Add a new Card:</Text>
      <View>
        <TextInput 
          style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}
        />
        <TextInput 
          style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer}
        />
      </View>
      <Button title="Add Card" onPress={this.addCard}></Button>
    </View>
  }
}

export default AddCardView;