'use strict';

import React, { Component } from 'react';
import { TextInput } from 'react-native';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { searchterm: 'useless placeholder' };
  }

  render() {
    return (
      <TextInput onChangeText={text => this.setState({ searchterm: text })}
        value={this.state.searchterm}
        placeholder="search YouTube..."
      />
    );
  }
}


module.exports = SearchBar;
