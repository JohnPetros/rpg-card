import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  infoPortrait: {
    width: '100%',
    alignItems: 'center',
  },

  infoLandscape: {
    width: '42%',
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  attributesContainer: {
    backgroundColor: '#f5debc',
    width: '90%',
    borderWidth: 1,
  },

  attributes: {
    paddingBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  attributesContainerTitle: {
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    borderWidth: 1,

    backgroundColor: '#89928c',
    fontWeight: 'bold',
    width: '100%',
    fontSize: 18,
    height: 35,
    marginTop: 10,
  },

  attributesTitle: {
    fontSize: 20,
    color: '#ddd',
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 5,
  },
});

export default styles;
