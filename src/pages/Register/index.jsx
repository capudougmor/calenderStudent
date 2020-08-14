import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

import HeaderNav from '../components/HeaderNav';
import Button from '../components/Button';

const Register = () => {
  
  return (
    <>
      <HeaderNav goBack='Landing' />
      <View style={styles.container} >
        <Text style={styles.title}>Bem vindo!</Text>
        <Text style={styles.subtitle}>Crie uma conta gratúita <br/>O que você gostaria de fazer?</Text>
        <View style={styles.buttonsContainer} >
          <Button icon='iconStudent' title='Estudar' goPath='/' color='#2D9CDB' />
          <Button icon='iconTeacher' title='Dar Aula' goPath='/' color='#4f4f4f' />
        </View>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    transform: [      
      { translateY: -90 }
    ],
  },

  title: {
    fontFamily: "Ubuntu_700Bold",
    color: "#aaa",
    fontSize: 36,
    marginBottom: 40,
  },
  
  subtitle: {
    fontFamily: "Ubuntu_400Regular",
    color: "#aaa",
    fontSize: 24,
  },
  
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-between",
  },
})

export default Register;