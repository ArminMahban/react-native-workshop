'use strict';

import React, { Component } from 'react';
import SearchView from './searchView';

import {
    StyleSheet,
    View,
    NavigatorIOS,
    Text,
    Image,
  } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Search = (props) => {

  return (
    <NavigatorIOS
      style={styles.container}
      initialRoute={{
        title: 'Search Videos',
        component: SearchView,
      }}
    />
  );
};


module.exports = Search;
