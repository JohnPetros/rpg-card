import { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Styles from './Styles/style';
import Header from './Components/Header';
import Info from './Components/Info';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function App() {
  const [isPortrait, setIsPortraint] = useState(true);

  const toggleOrientation = () => {
    setIsPortraint(!isPortrait);
    changeScreenOrientation();
  };

  async function changeScreenOrientation() {
    if (isPortrait == true) {
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
      );
    } else if (isPortrait == false) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  }

  return (
    <View
      style={isPortrait ? Styles.containerPortrait : Styles.containerLandscape}>
      <View style={isPortrait ? Styles.cardPortrait : Styles.cardLandscape}>
        <Header oriantationIsPortraint={isPortrait} />
        <Info oriantationIsPortraint={isPortrait} />
        {isPortrait ? (
          <TouchableOpacity
            style={Styles.buttonPortrait}
            onPress={toggleOrientation}>
            <Icon name="ios-arrow-forward" size={24} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={Styles.buttonLandscape}
            onPress={toggleOrientation}>
            <Icon name="ios-arrow-down" size={24} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
// isPortrait ? Styles.cardPortrait : Styles.cardLandscape
