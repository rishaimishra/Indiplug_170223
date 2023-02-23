import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import Normalize from '../../helpers/Dimens';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: colors.white,
  },
  logo: {
    marginLeft: Normalize(20),
    marginTop: Normalize(50),
    width: Normalize(130),
    resizeMode: 'contain',
  },
  titleText: {
    fontSize: Normalize(43),
    color: colors.black,
    marginLeft: Normalize(30),
    fontWeight: '400',
  },
  tabView: {
    padding: Normalize(10),
    backgroundColor: colors.white,
    margin: Normalize(10),
  },
  tabIndicator: {
    backgroundColor: colors.primary,
    height: 3,
  },
  tabTitle: {
    margin: Normalize(8),
    fontSize: Normalize(16),
    color: colors.lightGrey,
  },
  tabTitleFocused: {
    margin: Normalize(8),
    fontSize: Normalize(16),
    color: colors.primary,
  },
  tabBar: {
    backgroundColor: colors.white,
    color: '#aaa',
    borderColor: colors.white,
    elevation: 0,
  },
});

export default styles;
