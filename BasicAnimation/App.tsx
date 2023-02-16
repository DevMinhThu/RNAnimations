import React from 'react';
import {StyleSheet, View} from 'react-native';
import AnimatedBasic from './src/feature/AnimatedBasic';
import FadeInOut from './src/feature/FadeInOut';
import PanResponderAnim from './src/feature/PanResponderAnim';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.viewCommon]}>
        <AnimatedBasic />
      </View>
      <View style={[styles.viewCommon]}>
        <FadeInOut />
      </View>
      <View style={[styles.viewCommon]}>
        <PanResponderAnim />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewCommon: {
    flex: 1,
  },
});

export default App;
