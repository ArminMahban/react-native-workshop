'use strict';

import React, { Component } from 'react';
import VideoList from './video_list';

import {
    StyleSheet,
    NavigatorIOS,
    View,
    Text,
    StatusBar,
  } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Featured extends Component {
  render() {
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
        tintColor='white'
        initialRoute={{
          title: 'Featured Videos',
          component: VideoList,
        }}
      />
      </View>
    );
  }
  }


module.exports = Featured;
