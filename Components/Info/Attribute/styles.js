import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  attributeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5debc',
    width: '95%',
    marginTop: 10,
    paddingHorizontal: 14
  },
  
  attributeIconContainer: {
    width: 50,
    padding: 5,
    borderRadius: 50,
    backgroundColor: '#89928c',
    borderWidth: 2,
  },

  attributeIcon: {
    width: '100%',
    height: 40,
    resizeMode: 'contain',
  },

  attributeName: {
    fontSize: 22,
    fontWeight: 'bold'
  },

  attributeValue: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default styles;
