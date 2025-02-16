// screens/InboxScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InboxScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inbox Screen</Text>
      {/* Nội dung của Inbox Screen */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
});

export default InboxScreen;
