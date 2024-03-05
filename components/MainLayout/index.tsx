import React from 'react';
import {SafeAreaView} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';

type MainLayoutPropsType = {
  children: React.JSX.Element;
};

const MainLayout: React.FC<MainLayoutPropsType> = ({children}) => {
  return (
    <SafeAreaView style={[globalStyle.bgWhite, globalStyle.flex]}>
      {children}
    </SafeAreaView>
  );
};

export default MainLayout;
