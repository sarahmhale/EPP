import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Button,
  ImagePickerIOS,
  Image
} from 'react-native';
import Camera from '../components/Camera'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props){
    super(props)
    this.state = {
      src: undefined
    }
  }

  _onPress(callback){

    var AWS = require('aws-sdk');
    var s3 = new AWS.S3({
      accessKeyId: "AKIAJC5BHGOLZMPZAUBQ", 
      secretAccessKey: "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", 
      region: "us-east-1"
    });



    ImagePickerIOS.openSelectDialog({}, imageUri => {
      //get signed url
      let presignedUrl;
      var params = {Bucket: 'eppimageslol', Key: 'myimage.jpg', ContentType: 'image/jpg'};
      s3.getSignedUrl('putObject', params, function (err, url) {
          console.log('Your generated pre-signed URL is', url);
          presignedUrl = url

          console.log(presignedUrl);
          const xhr = new XMLHttpRequest()
          xhr.open('PUT', presignedUrl)
          xhr.onreadystatechange = function() {
              if (xhr.readyState === 4) {
                  if (xhr.status === 200) {
                  console.log('Image successfully uploaded to S3')
                  params = {Bucket: 'eppimageslol', Key: 'myimage.jpg'};
                  s3.getSignedUrl('getObject', params, function (err, url) {
                      console.log('Your generated pre-signed URL is', url);
                      callback(url)
                  });

              } else {
                  console.log('Error while sending the image to S3: ', xhr.status)
              }
            }
          }
          xhr.setRequestHeader('Content-Type', 'image/jpg')
          xhr.send({ uri: imageUri, type: 'image/jpg', name: 'myimage.jpg'})

      });



      }, error => console.log(error));

  }

  uploadImage(url){
    console.log("setting state var ", url)
    this.setState({
      src:url
    })
  }
  
  render() {
    return (
      <ScrollView style={styles.container}>
        <Image source={{uri: this.state.src}} style={{height:200, width:200}}/>
        <Text style={styles.container}>Groups</Text>
        <Button onPress={()=>this._onPress(this.uploadImage.bind(this))} title="Upload img"/>
        <Camera/>
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
