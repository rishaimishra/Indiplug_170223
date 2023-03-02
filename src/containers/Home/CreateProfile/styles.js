import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
import Normalize from '../../../helpers/Dimens';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: Normalize(15),
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
  },
  mediaButton: {
    height: '40%',
    width: '100%',
    borderRadius: Normalize(8),
    backgroundColor: colors.bgInput,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mediaPlug: {
    width: Normalize(90),
    height: Normalize(90),
  },
  mediaPlug2: {
    width: '100%',
    height: '100%',
    borderRadius: Normalize(8),
    resizeMode: 'cover',
  },
  mediaCamera: {
    position: 'absolute',
    width: 50,
    height: 50,
    left: 'auto',
    top: 'auto',
    right: 20,
    bottom: 20,
  },
  footrButtonCancel: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 15,
    width: '48%',
    marginTop: 20,
    fontSize: 50,
    // backgroundColor: '#aaa',
    // color: 'red '
  },
  footrButtonSave: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 15,
    width: '48%',
    marginTop: 20,
  },
});

export default styles;
