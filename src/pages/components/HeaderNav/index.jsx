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
    <View style={styles.container} >
      <BorderlessButton onPress={handleGoBack} >
        <Icon name="arrow-left" color="#555" size={24} />
      </BorderlessButton>

      <Icon name="more-horizontal" color="#555" size={24} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: "space-between",  
    backgroundColor: "#eee"
  },
})

export default HeaderNav;