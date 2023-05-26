import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  categoryMain: {
    flex: 1,
    width: '100%',
  },  
  cardContainer: {
    padding: 8,
  },
  cardEleveted: {
    backgroundColor: '#8FE16B',
    elevation: 4,
  },
  cardHeadingText: {
    fontSize: 20,
    color: 'white',
  },
  cardImage: {
    height: '100%',
    width: '100%',
    borderRadius: 8,
  },
  cardText: {
    bottom: 1,
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    width: '100%',
  },
  cardShadow:{
    shadowColor:'#000',
    shadowRadius:4.65,
    shadowOffset:{
    width:2,
    height:2,
    },
    shadowOpacity: 0.5,
    elevation:8
  },
  PlaceCard: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 120,
    backgroundColor: 'white',
    marginVertical: 8,
    borderRadius: 8,
  },
  PlaceCardContainer: {
    padding: 8,
  },
  PlaceCardEleveted: {
    backgroundColor: '#8FE16B',
    elevation: 4,
  },
  PlaceCardImage: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  PlaceCardTextMain: {
    flex: 1,
  },
  PlaceCardHeadingText: {
    fontSize: 12,
    color: 'black'
  },
  placesCardShadow:{
    shadowColor:'#000',
    shadowRadius:4.65,
    shadowOffset:{
        width:2,
        height:2,
    
},
    shadowOpacity: 0.2,
    elevation:8
  },
  headerText: {
    fontSize: 14,
    color: 'white',
    marginVertical:10,
    marginRight:30,
  },
  headerIcon:{
    width:18,
    height:18
  },
  searchCard:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 40,
    backgroundColor: '#fc8f20',
    marginHorizontal: 8,
    marginVertical: 8,
    borderRadius: 8,
  },
  searchCardContainer: {
    padding: 8,
  },
  searchCardEleveted: {
    backgroundColor: '#8FE16B',
    elevation: 4,
  },
  searchIcon:{
    width:18,
    height:18,
  },
  searchText:{
    fontSize:16,
    alignItems:'center',
    marginHorizontal:10
  },
  searchCardShadow:{
    shadowColor:'#000',
    shadowRadius:4.65,
    shadowOffset:{
        width:2,
        height:2,
    
},
    shadowOpacity: 0.2,
    elevation:8
  },
ratingStarIcon:{
  width:22,
  height:22,
},
ratingText:{
  fontSize:14,
  color:'black'
},
commentİcon:{
  width:22,
  height:22,
},
commentText:{
  fontSize:14,
  color:'black'
},
CommentCard:{
  flex:1,
  justifyContent: 'flex-start',
  backgroundColor: '#FFFFFF',
  marginVertical: 8,
  borderRadius: 20,
  padding:6
},
CommentCardHeadingText:{
  fontSize: 14,
    color: 'black'
},
CommentCardShadow:{
  shadowColor:'#000',
  shadowRadius:4.65,
  shadowOffset:{
  width:2,
  height:2,
  },
  shadowOpacity: 0.2,
  elevation:8
}
});
export default styles;
