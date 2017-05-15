'use strict';

import React, { Component } from 'react';
import youtubeSearch from '../youtube-api'
import axios from 'axios'
import Search from 'react-native-search-bar';

import {
    StyleSheet,
    View,
    Image,
    Text,
    ListView,
    TouchableHighlight,
    ActivityIndicatorIOS
  } from 'react-native';

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

const FAKE_BOOK_DATA = [
    { volumeInfo: { title: 'The Catcher in the Rye', authors: 'J. D. Salinger', imageLinks: { thumbnail: 'https://facebook.github.io/react/img/logo_og.png' } } },
];


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
    console.log("here");
    this.fetchData();
  }

   fetchData() {
     console.log("about to search");
       youtubeSearch("dog")
       .then((responseData) => {
         this.setState({
           dataSource: this.state.dataSource.cloneWithRows(responseData),
           isLoading: false,
         });
       })
       .done();
  }

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
     console.log("video is");
     console.log(video);
       return (
            <TouchableHighlight onPress={() => {this.showVideoDetail(video) }}  underlayColor='#dddddd'>
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
    if (this.state.isLoading) {
      return this.renderLoadingView();
    }
    return (
      <View>
          <Search
            ref='searchBar'
          	placeholder='Search'
          />
          <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderVideo.bind(this)}
              style={styles.listView}
          />
      </View>
    );
  }
}

module.exports = VideoList;
