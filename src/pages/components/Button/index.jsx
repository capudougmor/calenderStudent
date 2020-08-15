import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity, ImageBackground } from 'react-native';

import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

const Landing = (props) => {

  const styleColor = StyleSheet.create({
    button: {
      backgroundColor: props.color || ''
    }
  })

  const { navigate } = useNavigation()
  const { goPath } = props
  const { icon } = props


  function handleNavigate() {
    navigate(goPath)
  }

  return (
    <RectButton 
      onPress={handleNavigate}
      style={[styles.button, styleColor.button]}>
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
    borderRadius: 8,
    padding: 24,
    justifyContent: "space-between",
    alignItems: "stretch",
  },

  buttonText: {
    fontFamily: "Roboto_700Bold",
    color: "#fff",
    fontSize: 20,
  },

})

export default Landing;