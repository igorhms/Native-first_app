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
  const ceil = require('./img/01-tablelamps.png');
  const scon = require('./img/01-tablelamps.png');
  const floor = require('./img/01-tablelamps.png');
  const light = require('./img/01-tablelamps.png');
  const garland = require('./img/01-tablelamps.png');
  const bgi = require('./img/01-tablelamps.png');
  const detal = require('./img/01-tablelamps.png');
  const sacola = require('./img/01-tablelamps.png');
  return (
    <View style={styles.container}>
      {/* <Image source={table} />; */}
      {/* <Image style={styles.img} source={table} /> */}
      <Image style={styles.img} source={ceil} />
      <Image style={styles.img} source={scon} />
      <Image style={styles.img} source={floor} />
      <Image style={styles.img} source={light} />
      <Image style={styles.img} source={garland} />
      <Image style={styles.img} source={bgi} />
      <Image style={styles.img} source={detal} />
      <Image style={styles.img} source={sacola} />
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
    // display: 'flex',
  },
  img: {
    width: 30,
    height: 50,
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
