import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ThemeCard from '../../components/ThemeCard';
import data from '../../data/data.json';
import GameLoop from '../../GameLoop';

export default function Home() {
  const themePicker = data.myArray;
  const [themeIndex, setThemeIndex] = useState(0);

  const answerCallback = () => {};
  return (
    <View style={styles.container}>
      {themePicker.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              console.log(themeIndex);
              setThemeIndex(index);
            }}
          >
            <ThemeCard label={item.themeName} />
          </TouchableOpacity>
        );
      })}
      <GameLoop selectedTheme={themeIndex} />
      <StatusBar style="auto" />
    </View>
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
