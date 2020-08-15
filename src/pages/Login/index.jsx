import React, { useState, version } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { BorderlessButton, TextInput, RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import HeaderNav from '../components/HeaderNav';

const Login = () => {
  
  const { navigate } = useNavigation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  function handleGoRegister() {
    navigate('Register')
  }

  function enterLogin() {

  }
  
  return (
    <>
      <HeaderNav goBack='Landing' />

      <View style={styles.container} >
        <View style={styles.header} >
          <Text style={styles.login}>Fazer login</Text>
          <BorderlessButton onPress={handleGoRegister} >
            <Text style={styles.count}>Criar conta</Text>
          </BorderlessButton>
        </View>

        <View style={styles.inputGroup} >
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder='E-mail'
            placeholderTextColor="#c1bccf"
          />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder='Senha'
            placeholderTextColor="#c1bccf"
          />
        </View>
        <RectButton onPress={enterLogin} style={styles.submitButton} >
          <Text style={styles.submitButtonText} >Entrar</Text>
        </RectButton>
        

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
      { translateY: -200 }
    ],
    position: "relative",
  },
  
  header: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },

  login: {
    fontFamily: "Roboto_700Bold",
    color: "#222",
    fontSize: 24,
  },
  
  count: {
    fontFamily: "Roboto_400Regular",
    color: "#222",
    fontSize: 16,
  },

  seatchForm: {
    marginBottom: 14,
  },

  label: {
    fontFamily: "Roboto_400Regular",
    color: "#d4c2ff",
  },

  input: {
    height: 54,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginBottom: 4,
  },

  submitButton: {
    backgroundColor: "#04d361",
    height: 56,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  submitButtonText: {
    color: "#fff",
    fontFamily: "Ubuntu_400Regular",
    fontSize: 16,
  }
  
})

export default Login;