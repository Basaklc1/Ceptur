import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    bannerImage:{
        width:'100%',
        height:150,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
      },
    categoryCard: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '46%',
        height: 200,
        marginHorizontal: '2%',
        marginVertical: 8,
        borderRadius:12,
        backgroundColor:'grey'
    },
shadow:{
    shadowColor:'#000',
    shadowRadius:4.65,
    shadowOffset:{
        width:2,
        height:2,
    
},
    shadowOpacity: 0.5,
    elevation:8
}
})