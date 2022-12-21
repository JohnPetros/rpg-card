import * as React from 'react';
import { Text, View, Image } from 'react-native';
import Styles from './styles';

export default function App(props) {
  return (
    <View style={Styles.attributeContainer}>
      <View style={Styles.attributeIconContainer}>
        <Image
          style={Styles.attributeIcon}
          source={props.attributeIcon}
        />
      </View>
      <Text style={Styles.attributeName}>{props.attributeName}</Text>
      <Text style={Styles.attributeValue}>{props.attributeValue}</Text>
    </View>
  );
}
