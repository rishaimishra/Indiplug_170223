import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
import Normalize from '../../../helpers/Dimens';

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    padding: Normalize(15),
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
  },
  mediaButton: {
    height: Normalize(200),
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
  nameContainer: {
    position: 'absolute',
    left: '10%',
    bottom: '15%',
    color: colors.white,
  },
  iAmText: {
    color: colors.white,
    fontSize: Normalize(12),
  },
  profileName: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Normalize(5),
  },
  profileNameText: {
    fontSize: Normalize(14),
    fontWeight: '700',
    color: colors.white,
    marginLeft: Normalize(5),
    textTransform: 'capitalize',
  },
  profileNameTextOuter: {
    textAlign: 'center',
    fontSize: Normalize(14),
    fontWeight: '700',
    color: colors.dark,
    marginLeft: Normalize(5),
    marginTop: Normalize(5),
    textTransform: 'capitalize',
  },
  ratingMain: {
    display: 'flex',
    alignItem: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '2%',
  },
  ratingIcon: {
    marginRight: Normalize(5),
  },
  address: {
    textAlign: 'center',
    fontSize: Normalize(12),
    fontWeight: '700',
    color: colors.greyText2,
    marginTop: '2%',
  },
  followerMain: {
    margin: Normalize(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  followerEach: {},
  followerNo: {
    textAlign: 'center',
    fontSize: Normalize(14),
    fontWeight: '700',
    color: '#111',
  },
  followerTitle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: colors.greyText2,
  },

  description: {
    textAlign: 'center',
    fontSize: Normalize(14),
    fontWeight: '500',
    color: colors.greyText2,
    paddingHorizontal: Normalize(20),
  },
  mediaGroupButton: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 90,
    marginRight: 90,
    display: 'flex',
    alignItem: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  uploadContainer: {
    alignItems: 'center',
    marginVertical: Normalize(10),
  },
  networkCloud: {
    marginBottom: Normalize(5),
  },
  cloudText: {
    marginBottom: Normalize(5),
    color: colors.greyText2,
  },
});

export default styles;
