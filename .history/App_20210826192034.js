/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';

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
        <Image style={(styles.img, { width: 40, height: 60 })} source={sacola} />
      </View>
      <View style={styles.outBox}>
        <Divider orientation="horizontal" />;
        <View style={styles.box}>
          <Image style={styles.img} source={table} />
          <Text>Abajur</Text>
        </View>
        <View style={styles.box}>
          <Image style={styles.img} source={ceil} />
          <Text>Abajur</Text>
        </View>
        <View style={styles.box}>
          <Image style={styles.img} source={scon} />
          <Text>Abajur</Text>
        </View>
        <View style={styles.box}>
          <Image style={styles.img} source={floor} />
          <Text>Abajur</Text>
        </View>
        <View style={styles.box}>
          <Image style={styles.img} source={light} />
          <Text>Abajur</Text>
        </View>
        <View style={styles.box}>
          <Image style={styles.img} source={garland} />
          <Text>Abajur</Text>
        </View>
        <View style={styles.box}>
          <Image style={styles.img} source={bgi} />
          <Text>Abajur</Text>
        </View>
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
    width: 180,
    height: 180,
    backgroundColor: '#fff',
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  outBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
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
