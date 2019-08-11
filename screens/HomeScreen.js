import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import {
  Image,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { stringLiteral } from '@babel/types';
import Doggo from '../assets/images/cao_2.png';

export default function HomeScreen() {
  const [hungerVal, setHungryVal] = useState(5);
  const [treats, setTreats] = useState(2);

  return (
    <View style={styles.container}>
      <View style={styles.dogImageContainer}>
        <Image
          source={Doggo}
          style={styles.dogImage}
        />
      </View>

      <View style={styles.dogDataContainer}>
        <Text style={styles.dogEmotion}>
          Happiness: <HappyNum value={hungerVal} />
        </Text>
        <Text style={styles.dogEmotion}>
          Hunger: {hungerVal}
        </Text>
      </View>
      <View style={styles.dogInteractContainer}>
        <Button
          onPress={() => setHungryVal(hungerVal > 0 ? hungerVal - 1 : 0)}
          title='magic button of magic'
        />
      </View>


      <View style={styles.resourceContainer}>
        <View>
          <Image
            source={require('../assets/images/treat.png')}
            style={styles.resourceIcon} />
          <Text style={styles.resourceLabel}>
            {treats}
            </Text>
        </View>
        <View>
          <Image
            source={require('../assets/images/dogtoy.png')}
            style={styles.resourceIcon} />
          <Text style={styles.resourceLabel}>
            3
            </Text>
        </View>
        <View>
          <Image
            source={require('../assets/images/dogdolla.png')}
            style={styles.resourceIcon} />
          <Text style={styles.resourceLabel}>
            120
            </Text>
        </View>
      </View>


    </View>
  );
}

function HappyNum({ value }) {
  return <Text style={styles.dogEmotionText}> {10 - value / 2 }</Text>;
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffcc66',
    height: '100%',
    width: '100%',
  },
  dogImageContainer: {
    alignItems: 'center',
    borderStyle: "solid",
    borderWidth: 5,
    width: '100%',
    height: '55%',
  },
  dogImage: {
    height: '90%',
    resizeMode: 'center',
    marginTop: 15,
  },
  dogDataContainer: {
    width: '100%',
    borderStyle: 'solid',
    backgroundColor: '#6699ff',
    borderWidth: 3,
    padding: 4,
  },
  dogEmotion: {
    fontSize: 22,
    marginLeft: 20,
    marginTop: 10,
  },
  dogEmotionText: {
    fontSize: 22,
    textAlign: 'right'
  },
  dogInteractContainer: {
    backgroundColor: '#ffffff',
  },
  resourceContainer: {
    height: '20%',
    backgroundColor: '#ffffe6',
    borderStyle: 'dashed',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    resizeMode: 'contain'
  },
  resourceLabel: {
    fontSize: 18,
    fontStyle: 'italic',
    marginTop: 5,
    textAlign: 'center',
  },
  resourceIcon: {
    marginTop: 15,
    width: 50,
    height: 50,
    resizeMode: 'center',
  },
});
