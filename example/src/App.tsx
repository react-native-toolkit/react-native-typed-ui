import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Card from './components/Card';
import Search from './components/Search';
import { Column, ThemeProvider, useTheme } from './designSystem/theme';

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

function Home() {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.green200 }]}
    >
      <ScrollView>
        <Column
          backgroundColor="green200"
          paddingVertical="2xl"
          paddingHorizontal="2xl"
          spacing="5xl"
        >
          <Search />
          <Column spacing="2xl">
            <Card backgroundColor="brand300" />
            <Card backgroundColor="brand400" />
            <Card backgroundColor="brand500" />
            <Card backgroundColor="brand600" />
            <Card backgroundColor="brand700" />
            <Card backgroundColor="brand800" />
            <Card backgroundColor="brand900" />
          </Column>
        </Column>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
