'use strict';

import React, { Component } from 'react';
import YouTube from 'react-native-youtube';

import {
    StyleSheet,
    Text,
    View,
    Image,
  } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 75,
    alignItems: 'center',
  },
  image: {
    width: 107,
    height: 165,
    padding: 10,
  },
  description: {
    padding: 10,
    fontSize: 15,
    color: '#656565',
  },
});

class VideoDetail extends Component {
  render() {
    const book = this.props.book;
    const description = (typeof book.volumeInfo.description !== 'undefined') ? book.volumeInfo.description : '';
    return (
      <View style={styles.container}>
        <YouTube
          ref="youtubePlayer"
          videoId="KVZ-P-ZI6W4" // The YouTube video ID
          play           // control playback of video with true/false
          hidden={false}        // control visibility of the entire view
          fullscreen    // control whether the video should play inline
          loop={false}          // control whether the video should loop when ended

          onReady={(e) => { this.setState({ isReady: true }); }}
          onChangeState={(e) => { this.setState({ status: e.state }); }}
          onChangeQuality={(e) => { this.setState({ quality: e.quality }); }}
          onError={(e) => { this.setState({ error: e.error }); }}
          onProgress={(e) => { this.setState({ currentTime: e.currentTime, duration: e.duration }); }}

          style={{ alignSelf: 'stretch', height: 300, backgroundColor: 'black', marginVertical: 10 }}
        />
      </View>
    );
  }
}

module.exports = VideoDetail;
