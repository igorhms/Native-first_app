/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
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
        <Image style={styles.img} source={sacola} />
      </View>
      {/* <LinearProgress color="primary" /> */}
      <Image style={styles.img} source={table} />
      <Image style={styles.img} source={ceil} />
      <Image style={styles.img} source={scon} />
      <Image style={styles.img} source={floor} />
      <Image style={styles.img} source={light} />
      <Image style={styles.img} source={garland} />
      <Image style={styles.img} source={bgi} />
      {/* <Image style={styles.img} source={deta} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    display: 'flex',
    flexDirection: 'row',
  },
  container: {
    backgroundColor: '#ddd',
    height: '100%',
    // display: 'flex',
  },
  img: {
    width: 30,
    height: 50,
    backgroundColor: '#fff',
  },
  bigBlue: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 45,
  },
  red: {
    color: 'red',
  },
});

export default App;
