import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

export default class Phones extends React.Component {
  playSound = async (soundChunk) => {
    var soundLink =
      'https://s3-whitehatjrcontent.whjr.online/phones/' + soundChunk + '.mp3';
    await Audio.Sound.createAsync(
      {
        uri: soundLink,
      },
      {
        shouldPlay: true,
      }
    );
  };
  render() {
    return (
      <TouchableOpacity
        style={styles.chunkButton}
        onPress={() => {
          this.playSound(this.props.soundChunk);
        }}>
        <Text style={styles.displayText}>{this.props.wordChunk}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  chunkButton:{
    width :'60%',
    height : 50,
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 10,
    alignSelf : 'center',
    margin : 5,
    backgroundColor :'#82ffd5'
  },

  displayText:{
    textAlign : 'center',
    fontSize : 30,
    color :'#ffc982'
  }
})
