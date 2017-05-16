'use strict';

import {
    StyleSheet,
    NavigatorIOS,
  } from 'react-native';

import React from 'react';
import SearchView from './searchView';


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
