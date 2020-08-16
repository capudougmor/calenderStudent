import React, {useState, useEffect} from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Image, Text, ImageBackground, Animated, Keyboard } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import logoImg from '../../assets/Logo@2x.png';

const Landing = () => {

  const [offset, setOffset] = useState(new Animated.ValueXY({x: 0, y: 95}))
  const [opacity, setOpacity] = useState(new Animated.Value(0))
  const [logo, setLogo] = useState(new Animated.ValueXY({x: 180, y: 180}))
  
  useEffect(() => {

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 15
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
      })
    ]).start()
      

  },[])
  
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.logo} >
        <Animated.Image source={logoImg} style={{ width: logo.x, height: logo.y }} />
      </View>

      <Animated.View 
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [
              { translateY: offset.y }
            ]
          }
        ]} >
        <TextInput style={styles.input}
          placeholder='Email'
          autoCorrect={false}
          onChangeText={() => {}}   
        />

        <TextInput style={styles.input}
          placeholder='Senha'
          autoCorrect={false}
          onChangeText={() => {}}   
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnText}>
          <Text>Criar conta</Text>
        </TouchableOpacity>

      </Animated.View>

    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#191919',
  },

  container: {
    flex: 1,
    padding: 22,
    justifyContent: 'center',
    alignItems: "center",
  },

  logo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    backgroundColor: "#fff",
    width: '80vw',
    marginBottom: 15,
    color: "#222",
    fontSize: 17,
    borderRadius: 8,
    padding: 16,
  },
  
  btnSubmit: {
    backgroundColor: '#35aaff',
    width: '80vw',
    height: 45,
    alignItems: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 15,
    color: '#000'
  },
  
  btnText: {
    width: '70vw',
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    fontWeight: "bold",
  },

})

export default Landing;