import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

import HeaderNav from '../components/HeaderNav';
import Button from '../components/Button';

const Landing = () => {

  
  return (
    <>
      <HeaderNav goBack='Landing' />
      <View style={styles.container} >
        <Text>Bem vindo</Text>
        <Text>Crie uma conta gratúita</Text>
        <Text>O que você gostaria de fazer</Text>
        <View style={styles.buttonsContainer} >
          <Button icon='iconStudent' title='Estudar' goPath='/' />
          <Button icon='iconTeacher' title='Dar Aula' goPath='/' />

        </View>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  buttonsContainer: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-between",
  },
})

export default Landing;