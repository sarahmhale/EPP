import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { uploadImage } from '../utilities/aws'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props){
    super(props)
    this.state = {
      profileImg: 'http://thefw.com/files/2012/11/tumblr_ls6ujhB6wV1qfq9oxo1_5001.jpg?w=980&q=75'
    }
  }

  setUrl(url){
    console.log("setting state var ", url)
    this.setState({
      profileImg:url
    })
  }
  

  

  render() {
    return (
      <View style={styles.container}>
      <Image style={styles.image} source={{uri: this.state.profileImg}}/>
        <Text>Namn Namnsson</Text>
        <Text>Prestationer</Text> 
        <Button onPress={()=>uploadImage(this.setUrl.bind(this), "mynewimage")} title="Byt profilbild"/>
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  image: {
    margin:30,
    height: 160,
    borderRadius: (160/2),
    width: 160
  }
});