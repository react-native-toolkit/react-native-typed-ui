import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import NoteHeader from './components/NoteHeader/NoteHeader';
import {
  Box,
  Column,
  TextBlock,
  ThemeProvider,
  Touchable,
  useTheme,
} from './designSystem/theme';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import NoteCard from './components/NoteCard/NoteCard';
import CreateNote from './components/CreateNote/CreateNote';

export default function App() {
  const [loaded] = useFonts({
    poppinsMedium: require('./assets/fonts/Poppins-Medium.ttf'),
    poppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
  });

  if (!loaded) return null;

  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

function Home() {
  const theme = useTheme();
  const [openModal, setOpenModal] = useState(false);

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme.colors.backgroundColor },
      ]}
    >
      <StatusBar
        style="auto"
        translucent={false}
        backgroundColor={theme.colors.backgroundColor}
      />
      {/* TODO: spacing property for the column doesn't work if we use inside scroll view */}
      <Column flex={1} paddingHorizontal="xl" paddingTop="xl">
        <NoteHeader text={'Todo'} />
        <ScrollView>
          <Column spacing="xl" paddingTop="xl">
            <NoteCard
              note="This is task description that will wrap automatically into a new line"
              date={'Mar 3, 2020'}
              priority="low"
              categories={['Mobile', 'Web']}
              pictureUrl={
                'https://images.unsplash.com/photo-1604274608427-486b399380ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3302&q=80'
              }
            />

            <NoteCard
              note="Define more tags in components"
              date={'Mar 3, 2020'}
              priority="low"
              categories={['Web', 'Web']}
              pictureUrl={
                'https://images.unsplash.com/photo-1604274608427-486b399380ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3302&q=80'
              }
            />
          </Column>
        </ScrollView>
      </Column>
      <Touchable nativeProps={{ onPress: () => setOpenModal(true) }}>
        <Box
          alignSelf="flex-end"
          width={60}
          height={60}
          borderRadius="circle"
          backgroundColor="addIconBackground"
          position="absolute"
          bottom={20}
          right={20}
        >
          <TextBlock fontSize="addIcon" color="addIconText" textAlign="center">
            +
          </TextBlock>
        </Box>
      </Touchable>
      <CreateNote isVisible={openModal} onClose={setOpenModal} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
