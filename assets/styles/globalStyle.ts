import {StyleSheet} from 'react-native';
import colorSet from '../../common/constants/colors';
import {fontSizeScale} from '../../common/helpers/scaling';
import {getFontFamily} from '../fonts/helper';
import fontSet from '../../common/constants/fonts';

const globalStyle = StyleSheet.create({
  text: {
    color: colorSet.black,
    fontSize: fontSizeScale(16),
    fontFamily: getFontFamily(fontSet.inter, '400'),
  },
  bgWhite: {
    backgroundColor: colorSet.white,
  },
  flex: {
    flex: 1,
  },
});

export default globalStyle;
