import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={styles.container}>
      <Image style={styles.image} source={{uri: 'https://i.pinimg.com/originals/f8/12/8c/f8128c045ac5bda679971ab7bacace1e.jpg'}}/>
        <Text>Namn Namnsson</Text>
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