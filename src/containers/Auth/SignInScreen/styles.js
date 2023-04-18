import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
import Normalize from '../../../helpers/Dimens';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    marginTop: Normalize(10),
  },
  OrStyle: {
    fontSize: Normalize(14),
    color: colors.greyText2,
    marginVertical: Normalize(10),
  },
  inputContainer: {
    backgroundColor: colors.bgInput,
    width: '100%',
    borderColor: colors.bgInput,
    borderWidth: Normalize(1),
    borderRadius: Normalize(8),
    paddingHorizontal: Normalize(10),
    marginTop: Normalize(10),
  },
  input: {
    color: colors.greyText,
  },
  placeholderColor: {
    color: colors.lightGrey,
  },
});

export default styles;
