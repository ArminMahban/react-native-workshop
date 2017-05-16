'use strict';

import {
    StyleSheet,
    NavigatorIOS,
  } from 'react-native';
import React, { Component } from 'react';
import VideoList from './video_list';


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
        initialRoute={{
          title: 'Featured Videos',
          component: VideoList,
        }}
      />
    );
  }
  }


module.exports = Featured;
