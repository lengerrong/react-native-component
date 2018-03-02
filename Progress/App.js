import React, { Component } from 'react';
import {
  Button,
  Modal,
  Image,
  Keyboard,
  NativeModules,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  WebView,
} from 'react-native';

import Progress from './Progress'

export default class App extends Component<{}> {

  componentWillMount () {
  }

  componentWillUnmount () {
  }

  constructor(props) {
    super(props);
    this.state = {progress:0}
    setInterval(() => {
      this.setState(previousState => {
        console.log("progress " + previousState.progress);
        return { progress: previousState.progress >= 1 ? 0 : previousState.progress+0.01 };
      });
    }, 50);
  }

  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex:1, alignItems: 'center', justifyContent: 'space-around'}}>
          <View style={{width: 200, height: 6}}>
            <Progress progress={this.state.progress} />
          </View>
          <View style={{width: 200, height: 6}}>
            <Progress progress={this.state.progress} inverse={true} />
          </View>
        </View>
        <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{width: 6, height: 200}}>
              <Progress progress={this.state.progress} color='yellow' bgcolor='green' vertical={true} />
            </View>
            <View style={{width: 6, height: 200}}>
              <Progress progress={this.state.progress} color='red' bgcolor='blue' vertical={true} inverse={true}/>
            </View>
        </View>
      </View>
    )
  }
}
