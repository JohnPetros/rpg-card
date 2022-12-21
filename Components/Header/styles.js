import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerPortrait: {
    width: '100%',
    alignItems: 'center',
  },

    headerLandscape: {
    width: '55%',
    height: '35%',
    alignItems: 'center',
  },

  nameContainer: {
    backgroundColor: '#f5debc',
    borderRadius: 5,
    marginBottom: 30,
    width: '100%',
  },

  name: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Times',
    borderWidth: 2,
  },

  traits: {
    position: 'absolute',
    top: 50,
    zIndex: 1,
    padding: 5,
    flexDirection: 'row',
    width: '90%',
    height: 50,
    backgroundColor: '#89928c',
    justifyContent: 'space-around',
    borderColor: '#111',
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  trait: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    color: '#fff',
    width: '25%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  traitLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#111',
  },

  traitText: {
    fontSize: 17,
    color: '#ddd',
    fontWeight: 'bold',
  },

  imageContainer: {
    padding: 5,
    width: '80%',
    backgroundColor: '#2d454d',
    borderWidth: 1,

  },

  image: {
    width: '100%',
    height: 275,
    resizeMode: 'contain',
  },
});

export default styles;
