import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageContainerPortrait: {
    padding: 5,
    width: '80%',
    backgroundColor: '#2d454d',
    borderWidth: 1,

  },

  imageContainerLandscape: {
    padding: 5,
    height: 265,
    width: '70%',
    backgroundColor: '#2d454d',
    borderWidth: 1,
  },

  imagePortraint: {
    width: '100%',
    height: 275,
    resizeMode: 'contain',
  },

  imageLandscape: {
     width: '100%',
    height: 250,
    resizeMode: 'contain',
  }
});

export default styles;
