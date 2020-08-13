import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

const HeaderNav = () => {
  
  return (
    <View style={styles.container} >
      <Icon name="arrow-left" color="#555" size={24} />
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