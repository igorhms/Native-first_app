/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const LotsOfStyles = () => {
  const table = require('./img/01-tablelamps.png');
  return (
    <View style={styles.container}>
      {/* <Image source={table} />; */}
      <Image source={{uri: './img/01-tablelamps.png'}} style={{width: 40, height: 40}} />
      <Text style={styles.red}>just red</Text>
      <Text style={styles.bigBlue}>just bigBlue</Text>
      <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
      <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    height: '100%',
    display: 'flex',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default LotsOfStyles;
