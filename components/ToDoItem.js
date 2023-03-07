import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import {RemoveIcon} from "../asset/remove.png"

const ToDoItem = ({item, keyPressed}) => {
  const cardPressed = () => {
    keyPressed(item.id);
  };

  return (
    <TouchableOpacity onPress={() => cardPressed()}>
      <View style={styles.card}>
        <Text style={styles.cardText}>{item.text}</Text>
        <Image style={styles.imageStyle} source={require('../asset/remove.png')}/>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#eee',
    margin: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardText: {
    fontSize: 24,
    color: 'teal',
  },
  imageStyle:{
    width: 30,
    height: 30,
  }
});

export default ToDoItem;
