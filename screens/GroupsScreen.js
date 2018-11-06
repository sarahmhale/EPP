import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Button,
  ImagePickerIOS,
  Image
} from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };


  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.container}>Groups</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
