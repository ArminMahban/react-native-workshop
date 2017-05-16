'use strict';

import React, { Component } from 'react';
import VideoList from './video_list';

import {
    StyleSheet,
    NavigatorIOS,
    View,
    Text,
  } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Featured extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        translucent={false}
        barTintColor='#c4302b'
        titleTextColor='white'
        tintColor='white'
        initialRoute={{
          title: 'Featured Videos',
          component: VideoList,
        }}
      />
    );
  }
  }


module.exports = Featured;
