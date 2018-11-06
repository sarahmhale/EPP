import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
      <Image style={styles.image} source={{uri: 'https://s3.amazonaws.com/eppimageslol/llama.jpg'}}/>
        <Text>Namn Namnsson</Text>
        <Text>Prestationer</Text> 
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