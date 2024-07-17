import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const HeroSection = () => {
  const { width, height } = Dimensions.get('window');

  const padding = width * 0.05;
  const marginTop = height * 0.1;

  return (
    <View style={ { marginTop,padding }}>
      <Text style={styles.text}>Trending Movies</Text>
    </View>
  );
};

const styles = StyleSheet.create({

  text: {
    fontSize: 24,
    color:"black",
    fontWeight: 'bold',
  },
});

export default HeroSection;