import * as React from 'react';
import { Text, View, } from 'react-native';
import Styles from './styles'
import CharacterImage from './CharacterImage'

export default function App(props) {

  return (
      <View style={props.oriantationIsPortraint ? Styles.headerPortrait : Styles.headerLandscape}>
        <View style={Styles.nameContainer}>
          <Text style={Styles.name}>Aurelius Darksbane</Text>
        </View>
        <View style={Styles.traits}>
          <View style={Styles.trait}>
            <Text style={Styles.traitLabel}>RAÇA:</Text>
            <Text style={Styles.traitText}>Humano</Text>
          </View>
          <View style={Styles.trait}>
            <Text style={Styles.traitLabel}>CLASSE:</Text>
            <Text style={Styles.traitText}>Paladino</Text>
          </View>
          <View style={Styles.trait}>
            <Text style={Styles.traitLabel}>NÍVEL:</Text>
            <Text style={Styles.traitText}>25</Text>
          </View>
        </View>
        <CharacterImage oriantationIsPortraint={props.oriantationIsPortraint}/>
     </View>
  );
}
