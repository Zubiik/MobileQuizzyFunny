import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';
import Button from '../../components/Button';
import ThemeCard from '../../components/ThemeCard';
import data from '../../data/data.json';
import GameLoop from '../../GameLoop';

export default function Home() {
  const themePicker = data.myArray;
  const [themeIndex, setThemeIndex] = useState(-1);
  const [questionIndex, setQuestionIndex] = useState(0);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {themeIndex === -1 ? (
          themePicker.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setThemeIndex(index);
                  setQuestionIndex(0);
                }}
              >
                <ThemeCard label={item.themeName} />
              </TouchableOpacity>
            );
          })
        ) : (
          <View>
            <GameLoop
              selectedTheme={themeIndex}
              questionIndex={questionIndex}
              setQuestionIndex={setQuestionIndex}
            />
            <Button textButton={'Home'} callback={() => setThemeIndex(-1)} />
          </View>
        )}
      </ScrollView>
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
