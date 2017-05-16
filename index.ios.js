/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {
   AppRegistry,
   TabBarIOS,
 } from 'react-native';
import React, { Component } from 'react';
import Featured from './components/featured';
import Search from './components/search';


class VidSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'featured',
    };
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}
        translucent={false}
        unselectedItemTintColor="#9E9E9E"
        tintColor="#c4302b"
      >
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'featured'}
          systemIcon="featured"
          onPress={() => {
            this.setState({
              selectedTab: 'featured',
            });
          }}
        >
          <Featured />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'search'}
          systemIcon="search"
          onPress={() => {
            this.setState({
              selectedTab: 'search',
            });
          }}
        >
          <Search />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('VidSearch', () => VidSearch);
