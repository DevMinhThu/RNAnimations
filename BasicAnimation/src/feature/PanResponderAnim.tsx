import React, {useState} from 'react';
import {
  Animated,
  PanResponder,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

const PanResponderAnim = () => {
  const pan = useState(new Animated.ValueXY())[0];

  const panResponder = useState(
    PanResponder.create({
      // Khi mới bắt đầu cử chỉ tương tác lên đối tượng
      onMoveShouldSetPanResponder: () => true,
      // Khi cử chỉ move đối tượng đó
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      // Khi cử chỉ với đối tượng đã hoàn thành
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    }),
  )[0];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Drag this box!</Text>
      <Animated.View
        style={[
          styles.ball,
          {transform: [{translateX: pan.x}, {translateY: pan.y}]},
        ]}
        {...panResponder.panHandlers}
      />
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
    backgroundColor: 'red',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
});

export default PanResponderAnim;
