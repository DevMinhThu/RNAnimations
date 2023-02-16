import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const FadeInOut = () => {
  const opacity = useState(new Animated.Value(1))[0];

  const fadeInBall = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOutBall = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.ball, {opacity: opacity}]} />
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={fadeInBall}>
          <Text style={styles.textButton}>Fade In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={fadeOutBall}>
          <Text style={styles.textButton}>Fade Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'green',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
  },
  containerButton: {
    flexDirection: 'row',
  },
});

export default FadeInOut;
