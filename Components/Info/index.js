import * as React from 'react';
import { Text, View } from 'react-native';
import Styles from './styles';
import Attribute from './Attribute';

export default function App(props) {
 
  return (
    <View style={props.oriantationIsPortraint ? Styles.infoPortrait : Styles.infoLandscape}>
        <View style={Styles.attributesContainerTitle}>
          <Text style={Styles.attributesTitle}>ATRIBUTOS</Text>
        </View>
      <View style={Styles.attributesContainer}>

        <View style={Styles.attributes}>
          <Attribute
            attributeIcon={require('./Attribute/icons/shield.png')}
            attributeName="Resistência:"
            attributeValue="550"
          />
           <Attribute
            attributeIcon={require('./Attribute/icons/sword.png')}
            attributeName="Ataque:"
            attributeValue="500"
          />
           <Attribute
            attributeIcon={require('./Attribute/icons/foot.png')}
            attributeName="Velocidade:"
            attributeValue="350"
          />
           <Attribute
            attributeIcon={require('./Attribute/icons/light-bulb.png')}
            attributeName="Inteligência:"
            attributeValue="450"
          />
        </View>
      </View>
    </View>
  );
}
