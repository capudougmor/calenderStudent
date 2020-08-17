import React from 'react';
import { StyleSheet, View, ImageBackground, Image } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../../assets/Logo.png';

const HeaderNav = (props) => {

  const { navigate } = useNavigation()
  const { goBack } = props


  function handleGoBack() {
    navigate(goBack)
  }
  
  return (
    <>
      <View style={styles.container} >
        <View style={styles.btnContent}>
          <BorderlessButton onPress={handleGoBack} >
            <Icon name="arrow-left" color="#fff" size={24} />
          </BorderlessButton>
          <Icon name="more-horizontal" color="#fff" size={24} />
        </View>
      </View>
      <View style={styles.logo} >
        <ImageBackground source={logoImg} style={{ width: 150, height: 150}} />
      </View>
      <View style={styles.boxGreen}>
      </View>
      <View style={styles.boxOrange}>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D33A3A",
    alignItems: "center",
    zIndex: 2,
  },
  
  btnContent:{
    padding: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  
  logo: { 
    width: "100vw",
    height: 80,
    backgroundColor: "#D33A3A",
    alignItems: "center",
    zIndex: 3,
  },
  
  boxOrange: { 
    width: "100vw",
    height: 80,
    backgroundColor: "#D33A3A",
    transform: [      
      { skewY: "-10deg" },
      { translateY: -120}
    ],
    zIndex: 1,
  },
  
  boxGreen: { 
    width: "100vw",
    height: 80,
    backgroundColor: "#113A3A",
    transform: [      
      { skewY: "10deg" },
      { translateY: -40}
    ],
    zIndex: 0,
  },
  
})

export default HeaderNav;