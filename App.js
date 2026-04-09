import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import MainTab from './src/navigation/MainTab';

export default function App() {
  return (
    // View ngoài cùng này sẽ giúp căn giữa toàn bộ khung app
    <View style={styles.masterContainer}>
      <View style={styles.phoneSimulatorContainer}>
        <StatusBar style="light" translucent={true} backgroundColor="transparent" />
        <NavigationContainer>
          <MainTab />
        </NavigationContainer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  masterContainer: {
    flex: 1,
    backgroundColor: '#ffffff', // Màu nền bên ngoài khung app
    justifyContent: 'center',    // Căn giữa theo chiều dọc
    alignItems: 'center',        // Căn giữa theo chiều ngang (Sửa lỗi bị lệch trái)
  },
  phoneSimulatorContainer: {
    width: 414,
    height: 896,
    overflow: 'hidden',
    backgroundColor: '#000000',
    borderRadius: 0,            // Màn hình vuông vức
    borderWidth: 1,
    borderColor: '#333',
    // Đảm bảo không có margin nào làm lệch khung
    margin: 0,
  },
});