import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

const HeaderNav = (props) => {

  const { navigate } = useNavigation()
  const { goBack } = props


  function handleGoBack() {
    navigate(goBack)
  }
  
  return (
    <>
      <View style={styles.box}>
      </View>
      <View style={styles.boxOrange}>
      </View>
      <View style={styles.container} >
        <BorderlessButton onPress={handleGoBack} >
          <Icon name="arrow-left" color="#fff" size={24} />
        </BorderlessButton>

        <Icon name="more-horizontal" color="#fff" size={24} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: "space-between",  
    backgroundColor: "#D33A3A",
    transform: [      
      { translateY: -250 }
    ],
    zIndex: 3
    
  },
  
  box: { 
    height: 120,
    backgroundColor: "#D33A3A",
    transform: [      
      { skewY: "-10deg" },
      { scale: 2 }
    ],
    zIndex: 1
  },
  
  boxOrange: { 
    height: 120,
    backgroundColor: "#113A3A",
    transform: [      
      { skewY: "10deg" },
      { translateY: -50 }
    ],
    zIndex: 0
  }
})

export default HeaderNav;