import React, { Component } from 'react';
import { View } from 'react-native';

export default class Progress extends Component {

  render() {
    if (typeof(this.props.animating) == 'undefined')
      this.props.animating = true;
    if (typeof(this.props.color) == 'undefined')
      this.props.color = 'rgb(66,133,244)'; // royalblue
    if (typeof(this.props.bgcolor) == 'undefined')
      this.props.bgcolor = 'rgb(198,218,252)';
    if (typeof(this.props.progress) == 'undefined')
      this.props.progress = 0;
    if (typeof(this.props.inverse) == 'undefined')
      this.props.inverse = false;
    if (typeof(this.props.vertical) == 'undefined')
      this.props.vertical = false;
    if (!this.props.animating)
      return null;
    return (
      <View style={{flex:1, flexDirection: this.props.vertical ? 'column' : 'row'}}>
        <View style={{flex: this.props.inverse ? 1 - this.props.progress : this.props.progress, backgroundColor: this.props.inverse ? this.props.bgcolor : this.props.color}}>
        </View>
        <View style={{flex: this.props.inverse ? this.props.progress : 1 - this.props.progress, backgroundColor: this.props.inverse ? this.props.color : this.props.bgcolor}}>
        </View>
      </View>
    );
  }
}
