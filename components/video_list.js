'use strict';

import React, { Component } from 'react';

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
        padding: 10
    },
    thumbnail: {
        width: 53,
        height: 81,
        marginRight: 10
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    author: {
        color: '#656565'
    },
    separator: {
     height: 1,
     backgroundColor: '#dddddd'
   },
   listView: {
      marginTop: 65,
       backgroundColor: '#F5FCFF'
 },
 loading: {
     alignItems: 'center',
     justifyContent: 'center'
 }
});

const FAKE_BOOK_DATA = [
    {volumeInfo: {title: 'The Catcher in the Rye', authors: "J. D. Salinger", imageLinks: {thumbnail: 'https://facebook.github.io/react/img/logo_og.png'}}}
];

const REQUEST_URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:fiction';

class VideoList extends Component {

  constructor(props) {
       super(props);
       this.state = {
           isLoading: true,
           dataSource: new ListView.DataSource({
               rowHasChanged: (row1, row2) => row1 !== row2
           })
       };
   }

   componentDidMount() {
       this.fetchData();
   }

   fetchData() {
       fetch(REQUEST_URL)
       .then((response) => response.json())
       .then((responseData) => {
           this.setState({
               dataSource: this.state.dataSource.cloneWithRows(responseData.items),
               isLoading: false
           });
       })
       .done();
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

   showVideoDetail(book) {
       this.props.navigator.push({
           title: book.volumeInfo.title,
           component: VideoDetail,
           passProps: {book}
       });
   }

   renderBook(book) {
       return (
            <TouchableHighlight onPress={() => this.showVideoDetail(book)}  underlayColor='#dddddd'>
                <View>
                    <View style={styles.container}>
                        <Image
                            source={{uri: book.volumeInfo.imageLinks.thumbnail}}
                            style={styles.thumbnail} />
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
  	var book = FAKE_BOOK_DATA[0];
    if (this.state.isLoading) {
      return this.renderLoadingView();
    }
    return (
        <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderBook.bind(this)}
            style={styles.listView}
            />
    );
  }
}

module.exports = VideoList;
