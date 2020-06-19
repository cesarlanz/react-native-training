import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SelectImage = (props) => {
  //const [avatarSource, setAvatarSource] = useState(null);

  // More info on all the options is below in the API Reference... just some common use cases shown here
  const options = {
    title: 'Select Avatar',
    // customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const pickImage = () => {
    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        // } else if (response.customButton) {
        //   console.log('User tapped custom button: ', response.customButton);
      } else {
        const image = {uri: response.uri};

        // You can also display the image using data:
        // const image = { uri: 'data:image/jpeg;base64,' + response.data };

        //setAvatarSource(image);
        props.onUploadImage(image);
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <Image
          source={props.image || require('../assets/avatar-1577909_640.png')}
          style={styles.uploadAvatar}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadAvatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});

export default SelectImage;
