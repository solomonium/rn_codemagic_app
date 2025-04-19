import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('Welcome to My First React Native App!');

  const changeMessage = () => {
    setMessage('You clicked the button yes!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <Button title="Click Me" onPress={changeMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  message: {
    fontSize: 20,
    marginBottom: 20,
  },
});