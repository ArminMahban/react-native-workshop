'use strict';

import React, { Component } from 'react';
import SearchVideos from './search_videos';

import {
    StyleSheet,
    View,
    NavigatorIOS,
    Text,
  } from 'react-native';

  var styles = StyleSheet.create({
      container: {
          flex: 1
      }
  });

class Search extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
            title: 'Search Videos',
            component: SearchVideos
        }}/>
        );
    }
}

module.exports = Search;
