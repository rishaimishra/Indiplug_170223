import { PixelRatio, Platform, Dimensions } from 'react-native';

const scale = Dimensions.get('window').width / 320;

const Normalize = (size) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export default Normalize;
