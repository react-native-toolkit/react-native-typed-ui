import React, { useEffect, useState } from 'react';
import {
  LoginTextBlock,
  useLoginChangeLightTheme,
  useLoginChangeDarkTheme,
  useLoginThemeToggle,
} from './LoginScreen/loginDesign';
import { Row, Column } from '../../designSystem/theme';
import Frame from './Frame';
import LoginScreen from './LoginScreen/LoginScreen';
import SegmentedControl from '@react-native-community/segmented-control';
import {
  loginThemeOne,
  loginThemeOneDark,
  loginThemeThree,
  loginThemeThreeDark,
  loginThemeTwo,
  loginThemeTwoDark,
} from './LoginScreen/loginThemes';
import { Switch } from 'react-native';

const PhoneExample = () => {
  const [option, setOption] = useState(0);

  const lightThemeChanger = useLoginChangeLightTheme();
  const darkThemeChanger = useLoginChangeDarkTheme();
  const darkModeToggle = useLoginThemeToggle();

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    darkModeToggle();
    setIsDarkMode((mode) => !mode);
  };

  useEffect(() => {
    switch (option) {
      case 0:
        lightThemeChanger(loginThemeOne);
        darkThemeChanger(loginThemeOneDark);
        break;
      case 1:
        lightThemeChanger(loginThemeTwo);
        darkThemeChanger(loginThemeTwoDark);
        break;
      case 2:
        lightThemeChanger(loginThemeThree);
        darkThemeChanger(loginThemeThreeDark);
        break;
      default:
        return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [option]);

  return (
    <Row
      padding="xl"
      borderColor="lowPriorityBackground"
      justifyContent="space-between"
      alignItems="center"
    >
      <Column spacing="xl">
        <LoginTextBlock fontFamily="primary" fontSize="titleText" color="brand">
          Select the theme
        </LoginTextBlock>
        <SegmentedControl
          values={['Green', 'Purple', 'Red']}
          selectedIndex={option}
          onChange={(event) => {
            setOption(event.nativeEvent.selectedSegmentIndex);
          }}
        />
        <Row spacing="xl" alignItems="center" justifyContent="center">
          <LoginTextBlock
            fontFamily="primary"
            fontSize="normalText"
            color="brand"
          >
            Is Darkmode
          </LoginTextBlock>
          <Switch onValueChange={toggleDarkMode} value={isDarkMode} />
        </Row>
      </Column>
      <Frame>
        <LoginScreen />
      </Frame>
    </Row>
  );
};

export default PhoneExample;
