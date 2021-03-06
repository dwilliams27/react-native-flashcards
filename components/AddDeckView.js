import React, { Component } from 'react'
import { Button, Text, View, TextInput, StyleSheet, Alert } from 'react-native'

class AddDeckView extends Component {
  constructor(props) {
    super(props)
    this.state = { text: 'Deck Name' }
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })

  addDeck = (event) => {
    const obj = {
      name: this.state.text,
      cards: []
    }
    let dup = false
    for(d in this.props.screenProps.decks) {
      if(this.props.screenProps.decks[d].name === this.state.text) {
        Alert.alert('Deck name already taken; Please specify a unique name')
        return
      }
    }
    this.props.screenProps.addDeck(obj)
    this.props.navigation.navigate('Decks')
  }

  render() {
    return <View style={this.styles.container}>
      <Text>What is the title of your new deck?</Text>
      <View>
        <TextInput 
          style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
      <Button title="Create Deck" onPress={this.addDeck}></Button>
    </View>
  }
}

export default AddDeckView;