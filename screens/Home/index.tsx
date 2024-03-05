import React from 'react';
import MainLayout from '../../components/MainLayout';
import {View} from 'react-native';
import AppText from '../../components/AppText';
// import style from './style';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <View>
        <AppText>Hello world!</AppText>
      </View>
    </MainLayout>
  );
};

export default Home;
