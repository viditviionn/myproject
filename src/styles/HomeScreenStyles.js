import { StyleSheet } from 'react-native';
import { colors } from '../utils/constants';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.containerBG,
    paddingTop: 50
  },
  container: {
    flex: 1,
  },
  searchBar: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    borderColor: colors.searchBarBorder,
  },
  clickbaitContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  clickbaitItem: {
    width: 140,
    marginRight: 10,
    height: 190,
    borderRadius: 10,
    overflow: 'hidden',
  },
  gradientBorder: {
    padding: 2,
    borderRadius: 12,
  },
  innerCard: {
    borderRadius: 10,
    overflow: 'hidden',
    margin: 1
  },
  gapCard: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: colors.white
  },
  clickbaitImageContainer: {
    width: '100%',
    height: "100%",
    justifyContent: "flex-end",
    borderRadius: 10,
  },
  clickbaitImage: {
    borderRadius: 10,
  },
  clickbaitText: {
    fontSize: 18,
    zIndex: 99,
    paddingHorizontal: 10,
    fontWeight: '600',
    color: colors.white,
  },
  moreText: {
    marginBottom: 5,
    fontSize: 16,
    zIndex: 99,
    paddingHorizontal: 10,
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  gradientOverlayCategory: {
    height: '100%',
    justifyContent: 'center',
    paddingLeft: 15

  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    height: 150
  },
  categoryImageContainer: {
    width: "100%",
    height: "100%",

  },
  categoryImage: {
    width: "100%",
    height: "100%",
  },
  categoryTextContainer: {
    flex: 1,
    justifyContent: 'center',
    height: "100%"
  },
  categoryTitle: {
    color: colors.white,
    fontSize: 22,
    fontWeight: 'bold',
  },
  categorySubtitle: {
    color: colors.white,
    fontSize: 16,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.searchBarBorder,
    paddingHorizontal: 10,
    backgroundColor: colors.containerBG,
    marginHorizontal: 10,
    marginBottom: 10
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 5,
  },

});

export default styles;
