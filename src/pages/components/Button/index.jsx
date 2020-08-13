import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity, ImageBackground } from 'react-native';

import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

import IconStudent from '../../../assets/study.png';

const Landing = (props) => {

  const { navigate } = useNavigation()
  const { goPath } = props
  const { icon } = props


  function handleNavigate() {
    navigate(goPath)
  }

  return (
    <RectButton 
      onPress={handleNavigate}
      style={[styles.button, styles.buttonPrimary]}>
        <ImageBackground 
          source={require(`../../../assets/${icon}.png`)} 
          imageStyle={{ width: 70, height: 70 }}
        ></ImageBackground>
      <Text style={styles.buttonText}>
        {props.title}
      </Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 150,
    width: "48%",
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 24,
    justifyContent: "space-between",
    alignContent: "center",
  },

  buttonPrimary: {
    backgroundColor: "#9871f5",
  },

  buttonText: {
    fontFamily: "Roboto_700Bold",
    color: "#fff",
    fontSize: 20,
  },

  banner: {
    alignItems: 'center',

    resizeMode: "contain",
  },
})

export default Landing;