import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerPortrait: {
    backgroundColor: '#23120A',
    paddingHorizontal: 15,
    paddingTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  containerLandscape: {
    padding: 0,
    paddingTop: 10,
    backgroundColor: '#23120A',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  cardPortrait: {
    backgroundColor: '#94510F',
    padding: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderWidth: 2,
    width: '100%',
  },

  cardLandscape: {
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#94510F',
  },

  buttonPortrait: {
    backgroundColor: '#89928c',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 50,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    right: 2,
  },

  buttonLandscape: {
    backgroundColor: '#89928c',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 50,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    right: '45%',
  },
});

export default styles;
