'use strict';

import React, { Component } from 'react';
import SearchView from './searchView';

import {
    StyleSheet,
    View,
    NavigatorIOS,
    Text,
    Image,
    StatusBar,
  } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Search = (props) => {

  return (
    <View style={styles.container}>
    <StatusBar
     backgroundColor="blue"
     barStyle="light-content"
   />
    <NavigatorIOS
      style={styles.container}
      translucent={false}
      barTintColor='#c4302b'
      titleTextColor='white'
      initialRoute={{
        title: 'Search Videos',
        component: SearchView,
      }}
    />
    </View>
  );
};


module.exports = Search;

/* Rectangle 5 Copy: */
// background-image: linear-gradient(-221deg, #C249FA 0%, #625AD9 100%);
