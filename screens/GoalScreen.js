import React from 'react';
import {View, Text} from 'react-native'
import { ExpoConfigView } from '@expo/samples';

export default function GoalScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <View>
      <Text> get big gains</Text>
    </View>
  );
}

GoalScreen.navigationOptions = {
  title: 'Goal',
};
