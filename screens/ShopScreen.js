import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

export default function ShopScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>
        Wow cool content buy doggo merch
      </Text>
    </ScrollView>
  );
}

ShopScreen.navigationOptions = {
  title: 'Shop',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
