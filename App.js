import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './src/pages/Home';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/utils/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Home />
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
