import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Alert } from 'react-native';

const MovieCard = ({ item }) => {
  const showDetails = () => {
    Alert.alert(
      item.title,
      `Movie Title: ${item.title}\nLanguage: ${item.language}`,
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={showDetails}>
      <ImageBackground source={{ uri: item.poster }} style={styles.backgroundImage}>
        <Text style={styles.titleText}>{item.title}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoId}>{item.id}</Text>
          <Text style={styles.infoText}>{item.language}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    height: 450,
    margin: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    position: 'absolute',
    top: 10,
    left: 10,
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  infoContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    marginRight: 10,
    fontSize: 16,
    color: 'white',
    backgroundColor: 'black',
  },
  infoId: {
    width: 40,
    height: 40,
    marginRight: 10,
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    backgroundColor: 'black',
    borderRadius: 50,
  },
});

export default MovieCard;