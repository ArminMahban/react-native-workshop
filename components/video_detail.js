'use strict';

import React, { Component } from 'react';

import {
    StyleSheet,
    WebView,
  } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

class VideoDetail extends Component {
  render() {
    const video = this.props.video;
    const vidId = video.id.videoId;
    return (
      <WebView
        style={styles.frame}
        source={{ uri: `https://www.youtube.com/watch?v=${vidId}` }}
        renderLoading={this.renderLoading}
        renderError={this.renderError}
        automaticallyAdjustContentInsets={false}
      />
    );
  }
}

module.exports = VideoDetail;
