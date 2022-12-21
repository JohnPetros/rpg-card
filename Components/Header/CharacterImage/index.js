import * as React from 'react';
import { View, Image, useWindowDimensions } from 'react-native';
import Styles from './styles'

export default function() {
   const { height, width } = useWindowDimensions();
  const isPortrait = height > width;
    // isPortrait ? Styles.imageContainerPortrait : Styles.imageLandscape
  return (
     <View style={isPortrait ? Styles.imageContainerPortrait : Styles.imageContainerLandscape}>
          <Image
            style={isPortrait ? Styles.imagePortraint : Styles.imageLandscape}
            source={require('../../../assets/character-image.png')}
          />
        </View>
  )
}