import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';

type AppTextPropsType = {
  children?: string;
  customStyle?: StyleProp<TextStyle>;
};

const AppText: React.FC<AppTextPropsType> = ({children, customStyle = {}}) => {
  const styles = [globalStyle.text, customStyle];
  return <Text style={styles}>{children}</Text>;
};

export default AppText;
