'use strict';

import React, { Component } from 'react';
import VideoList from './video_list';

import {
    StyleSheet,
    NavigatorIOS,
    View,
    Text,
  } from 'react-native';

  var styles = StyleSheet.create({
      container: {
          flex: 1
      }
  });

  class Featured extends Component {
      render() {
          return (
              <NavigatorIOS
                  style={styles.container}
                  initialRoute={{
              title: 'Featured Books',
              component: VideoList
              }}/>
          );
      }
  }


module.exports = Featured;
