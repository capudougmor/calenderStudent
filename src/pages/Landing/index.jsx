import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

import HeaderNav from '../components/HeaderNav';

const Landing = () => {

  
  return (
    <View style={styles.container} >
      <HeaderNav />


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 32,
    // justifyContent: 'center',
  },
})

export default Landing;