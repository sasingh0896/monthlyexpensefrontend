import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class Home extends Component{
    constructor() {
        super();
      }
      render(){
          return(
              <View >
                  <View style={styles.container}>
                      <Text>hi</Text>
                  </View>
              </View>
          )
      }
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'red',
      flex: 1,
      height: 30,
      alignContent: 'center',
      justifyContent: 'center',
    },
  });