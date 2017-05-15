'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableHighlight,
    ActivityIndicatorIOS,
  } from 'react-native';
import SearchResults from './search_results';


const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    padding: 10,
  },
  searchInput: {
    height: 36,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    borderWidth: 1,
    flex: 1,
    borderRadius: 4,
    padding: 5,
  },
  button: {
    height: 36,
    backgroundColor: '#f39c12',
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 15,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  instructions: {
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: 15,
  },
  fieldLabel: {
    fontSize: 15,
    marginTop: 15,
  },
  errorMessage: {
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 15,
    color: 'red',
  },
});

class SearchVideos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bookAuthor: '',
      bookTitle: '',
      isLoading: false,
      errorMessage: '',
    };
  }

  bookTitleInput = (text) => {
    this.setState({ bookTitle: text });
  }

  bookAuthorInput = (text) => {
    this.setState({ bookAuthor: text });
  }

  searchVideos = () => {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({ isLoading: true });

    let baseURL = 'https://www.googleapis.com/books/v1/volumes?q=';
    if (this.state.bookAuthor !== '') {
      baseURL += encodeURIComponent(`inauthor:${this.state.bookAuthor}`);
    }
    if (this.state.bookTitle !== '') {
      baseURL += (this.state.bookAuthor === '') ? encodeURIComponent(`intitle:${this.state.bookTitle}`) : encodeURIComponent(`+intitle:${this.state.bookTitle}`);
    }

    console.log(`URL: >>> ${baseURL}`);
    fetch(baseURL)
            .then(response => response.json())
            .then((responseData) => {
              this.setState({ isLoading: false });
              if (responseData.items) {
                this.props.navigator.push({
                  title: 'Search Results',
                  component: SearchResults,
                  passProps: { videos: responseData.items },
                });
              } else {
                this.setState({ errorMessage: 'No results found' });
              }
            })
            .catch(error =>
                this.setState({
                  isLoading: false,
                  errorMessage: error,
                }))
            .done();
  }

  render() {
    const spinner = this.state.isLoading ?
            (<ActivityIndicatorIOS
              hidden="true"
              size="large"
            />) :
            (<View />);
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>Search by book title and/or author</Text>
        <View>
          <Text style={styles.fieldLabel}>Book Title:</Text>
          <TextInput style={styles.searchInput} onChange={this.bookTitleInput} />
        </View>
        <View>
          <Text style={styles.fieldLabel}>Author:</Text>
          <TextInput style={styles.searchInput} onChange={this.bookAuthorInput} />
        </View>
        <TouchableHighlight style={styles.button}
          underlayColor="#f1c40f"
          onPress={this.searchVideos}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableHighlight>
        {spinner}
        <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
      </View>
    );
  }

}

module.exports = SearchVideos;
