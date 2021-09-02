/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
// import {LinearProgress} from 'react-native-elements';

const App = () => {
  const table = require('./img/01-tablelamps.png');
  const ceil = require('./img/02-ceilinglamps.png');
  const scon = require('./img/03-sconces.png');
  const floor = require('./img/04-floorlamps.png');
  const light = require('./img/05-lightdecor.png');
  const garland = require('./img/06-garlands.png');
  const bgi = require('./img/bgimage.png');
  // const deta = require('./img/detalhes-table.lamp.png');
  const sacola = require('./img/icone-sacola.png');
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text style={[styles.red, styles.bigBlue]}>Lighteria</Text>
        <Image style={(styles.img, {width: 40, height: 60})} source={sacola} />
      </View>
      <View style={styles.outBox}>
        <View style={styles.box}>
          <Image style={styles.img} source={table} />
        </View>
        <View style={styles.box}>
          <Image style={styles.img} source={ceil} />
        </View>
        <View style={styles.box}>
          <Image style={styles.img} source={scon} />
        </View>
        <View style={styles.box}>
          <Image style={styles.img} source={floor} />
        </View>
        <View style={styles.box}>
          <Image style={styles.img} source={light} />
        </View>
        <View style={styles.box}>
          <Image style={styles.img} source={garland} />
        </View>
        <View style={styles.box}>
          <Image style={styles.img} source={bgi} />
        </View>
        {/* <Image style={styles.img} source={deta} /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    margin: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    backgroundColor: '#ddd',
    height: '100%',
    // display: 'flex',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  outBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 30,
  },
  img: {
    width: 30,
    height: 50,
    backgroundColor: '#fff',
  },
  bigBlue: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 42,
  },
});

export default App;
