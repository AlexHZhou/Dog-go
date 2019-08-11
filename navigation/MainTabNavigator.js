import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ShopScreen from '../screens/ShopScreen';
import GoalScreen from '../screens/GoalScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';

const GoalStack = createStackNavigator(
  {
    Goal: GoalScreen,
  },
  config
);

GoalStack.navigationOptions = {
  tabBarLabel: 'Goal',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-flag'} />
  ),
};

GoalStack.path = '';

const ShopStack = createStackNavigator(
  {
    Shop: ShopScreen,
  },
  config
);

ShopStack.navigationOptions = {
  tabBarLabel: 'Shop',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-pricetag'} />
  ),
};

ShopStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  GoalStack,
  ShopStack,
});

tabNavigator.path = '';

export default tabNavigator;
