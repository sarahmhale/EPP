import { ImagePickerIOS } from 'react-native'
import { accessKeyId, secretAccessKey, region } from '../config/secrets'
var AWS = require('aws-sdk');

var s3 = new AWS.S3({
	accessKeyId,
	secretAccessKey,
	region
  });




export const uploadImage = (callback, name) => {
    ImagePickerIOS.openSelectDialog({}, imageUri => {
		callback(imageUri)
      //get signed url
	  let presignedUrl;
	  let Key = name + 'jpg'
      var params = {Bucket: 'eppimageslol', Key, ContentType: 'image/jpg'};
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
                  params = {Bucket: 'eppimageslol', Key};
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
          xhr.send({ uri: imageUri, type: 'image/jpg', name: Key})

      });
      }, error => console.log(error));

  }