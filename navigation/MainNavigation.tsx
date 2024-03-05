import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import appRoutes from './Route';

const Stack = createStackNavigator();

const renderStackScreen = () => {
  return Object.values(appRoutes).map(({name, component}) => (
    <Stack.Screen {...{name, component}} key={name} />
  ));
};

const MainNavigation: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null, headerShown: false}}>
      {renderStackScreen()}
    </Stack.Navigator>
  );
};

export default MainNavigation;
