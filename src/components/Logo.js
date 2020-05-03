import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

let Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          resizeMode: 'contain',
          height: 100,
          width: 200,
        }}
        source={require('../img/download.png')}
      />
      <Text style={styles.logoText}>Welcome to My app.</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoText: {
    marginVertical: 15,
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});
export default Logo