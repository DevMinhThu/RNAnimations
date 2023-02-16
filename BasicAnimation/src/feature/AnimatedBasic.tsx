import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const AnimatedBasic = () => {
  // useState()[0] chỉ lấy ra phần state, chứ không lấy setState của useState
  // B1: Tạo value animation khởi tạo ban đầu cho animation
  const leftValue = useState(new Animated.Value(0))[0];

  // B3: Action animation
  const moveRight = () => {
    Animated.timing(leftValue, {
      toValue: 200,
      duration: 1000,
      /* 
            - Khi chuyển value của useNativeDriver -> true. Các thuộc tính style không đáp ứng phía native sẽ gây ra lỗi.
            - Vd: marginLeft: leftValue => Err
            - Khi đó ta phải chuyển sang dùng transform: [{}]
      */
      useNativeDriver: false,
    }).start();
  };

  const moveLeft = () => {
    Animated.timing(leftValue, {
      toValue: -200,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const moveMiddle = () => {
    Animated.timing(leftValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* View nào có animation => không còn là view thường nữa, mà phải được Animated truy cập theo cú pháp: "Animated.Element" */}
      {/*
          B2:
          - Chuyển Element đó thành dạng control animation.
          - Và gắn value khởi tạo ban đầu cho hoạt cảnh muốn animation (VD: di chuyển trái, phái,...)
      */}
      <Animated.View style={[styles.ball, {marginLeft: leftValue}]} />
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={moveLeft}>
          <Text style={styles.textButton}>Left</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={moveMiddle}>
          <Text style={styles.textButton}>Middle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={moveRight}>
          <Text style={styles.textButton}>Right</Text>
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
    backgroundColor: 'orange',
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

export default AnimatedBasic;
