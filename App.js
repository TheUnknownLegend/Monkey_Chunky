import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { Header } from 'react-native-elements';
import db from './Localdb';
import Phones from './components/Phones'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks:[],
      phones:[]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'cyan'}
          centerComponent={{
            text: 'Monkey Chumnky',
            style: { color: 'white', fontSize: 20 },
          }}
        />
        <Image style = {styles.image} source ={{ uri:'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png',}}/>
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            var word = this.state.text.toLowerCase().trim()

            db[word]?(
              this.setState({ chunks:db[word].chunks }),
              this.setState({ phones:db[word].phones })
              ):
              alert("The Word does not exist in the database")
            
          }}>
          <Text style={styles.displayText}>go</Text>
        </TouchableOpacity>
        <View>
        {this.state.chunks.map((item , index) =>{
          return(
           <Phones
           soundChunk = {this.state.phones[index]}
           wordChunk  = {this.state.chunks[index]}
           />
          )
        })}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#b8b8b8' },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  image:{width :150, height:150 , marginLeft:95},
  chunkButton: {
    width: '60%',
    height : '50',
    justifyContent : 'center',
    alignSelf : 'center',
    alignItems : 'center',
    borderRadius : 10,
    margin :5 ,
    backgroundColor : '#a3e3b1'  },
  displayText: { textAlign: 'center', fontSize: 30 },
});
