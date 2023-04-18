import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
import Normalize from '../../../helpers/Dimens';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: Normalize(10),
  },
  radioContainer: {
    marginVertical: Normalize(30),
  },
  content: {
    fontSize: Normalize(14),
    color: colors.greyText2,
    marginVertical: Normalize(10),
  },
  signUpContent: {
    color: colors.greyText2,
  },
  inputContainer: {
    backgroundColor: colors.bgInput,
    width: '100%',
    borderColor: colors.bgInput,
    borderWidth: Normalize(1),
    borderRadius: Normalize(8),
    paddingHorizontal: Normalize(10),
    marginVertical: Normalize(10),
  },
  input: {
    color: colors.greyText,
  },
  continueButton: {
    marginVertical: Normalize(10),
  },
  OrStyle: {
    fontSize: Normalize(14),
    color: colors.greyText2,
    marginVertical: Normalize(10),
  },
  titleText: {
    fontSize: 41,
    color: '#000',
    marginTop: 20,
    fontWeight: '400',
  },
  socialContainer: {
    alignItems: 'center',
  },
  primaryText: {
    color: colors.primary,
  },
});

export default styles;
