import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

// Import hình nền từ thư mục assets
import background from '../assets/CartScreen.png'; // Thay đổi đường dẫn nếu cần

const OrderScreen = () => {
  return (
    <ImageBackground source={background} style={styles.container}>
      <Text style={styles.title}>Order Screen</Text>
      {/* Nội dung của Order Screen */}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:100
  },
  title: {
    fontSize: 24,
    color: '#fff', // Đổi màu chữ để nổi bật trên nền
  },
});

export default OrderScreen;
