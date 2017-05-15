'use strict';

import React, { Component } from 'react';
<<<<<<< HEAD
import { StyleSheet, View, Image, Text, ListView, TouchableHighlight, ActivityIndicatorIOS } from 'react-native';
=======
import { youtubeSearch } from '../youtube-api'
import axios from 'axios'
import {
    StyleSheet,
    View,
    Image,
    Text,
    ListView,
    TouchableHighlight,
    ActivityIndicatorIOS
  } from 'react-native';
>>>>>>> 32ecef2fad99e58a9337e96f09c22f5213cd5677

import VideoDetail from './video_detail';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  thumbnail: {
    width: 53,
    height: 81,
    marginRight: 10,
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
  },
  author: {
    color: '#656565',
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd',
  },
  listView: {
    marginTop: 65,
    backgroundColor: '#F5FCFF',
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

<<<<<<< HEAD
const FAKE_BOOK_DATA = [
    { volumeInfo: { title: 'The Catcher in the Rye', authors: 'J. D. Salinger', imageLinks: { thumbnail: 'https://facebook.github.io/react/img/logo_og.png' } } },
];
=======
>>>>>>> 32ecef2fad99e58a9337e96f09c22f5213cd5677


class VideoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  }

  componentDidMount() {
    this.fetchData();
  }

<<<<<<< HEAD
  fetchData() {
    fetch(REQUEST_URL)
       .then(response => response.json())
=======
   fetchData() {
       youtubeSearch("dog")
>>>>>>> 32ecef2fad99e58a9337e96f09c22f5213cd5677
       .then((responseData) => {
         this.setState({
           dataSource: this.state.dataSource.cloneWithRows(responseData.items),
           isLoading: false,
         });
       })
       .done();
  }

<<<<<<< HEAD
  showVideoDetail(book) {
    this.props.navigator.push({
      title: book.volumeInfo.title,
      component: VideoDetail,
      passProps: { book },
    });
  }

  renderLoadingView() {
    return (
      <View style={styles.loading}>
        <Text>
          Loading books...
        </Text>
      </View>
    );
  }

  renderBook(book) {
    return (
      <TouchableHighlight onPress={() => this.showVideoDetail(book)} underlayColor="#dddddd">
        <View>
          <View style={styles.container}>
            <Image
              source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
              style={styles.thumbnail}
            />
            <View style={styles.rightContainer}>
              <Text style={styles.title}>{book.volumeInfo.title}</Text>
              <Text style={styles.author}>{book.volumeInfo.authors}</Text>
            </View>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    const book = FAKE_BOOK_DATA[0];
=======
   renderLoadingView() {
       return (
           <View style={styles.loading}>
               <Text>
                   Loading videos...
               </Text>
           </View>
       );
   }

   showVideoDetail(video) {
       this.props.navigator.push({
           title: video.snippet.title,
           component: VideoDetail,
           passProps: {video}
       });
   }

   renderVideo(video) {
       return (
            <TouchableHighlight onPress={() => this.showVideoDetail(video)}  underlayColor='#dddddd'>
                <View>
                    <View style={styles.container}>
                        <Image
                            source={{uri: video.snippet.thumbnails.default.url}}
                            style={styles.thumbnail} />
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{video.snippet.title}</Text>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
       );
   }

  render() {
>>>>>>> 32ecef2fad99e58a9337e96f09c22f5213cd5677
    if (this.state.isLoading) {
      return this.renderLoadingView();
    }
    return (
<<<<<<< HEAD
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderBook.bind(this)}
        style={styles.listView}
      />
=======
        <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderVideo.bind(this)}
            style={styles.listView}
            />
>>>>>>> 32ecef2fad99e58a9337e96f09c22f5213cd5677
    );
  }
}

module.exports = VideoList;
