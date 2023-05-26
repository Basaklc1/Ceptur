import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    },
  container: {
    flex: 1,
    marginTop: 180,
    alignItems :'center'
  },
  logo: {
    height: 140,
    width: 140,
    borderRadius: 50,
  },
  message: {
    color: '#211E47',
    fontSize: 18,
    fontStyle: 'normal',
    marginTop:60,
    padding:10,
  },
  btnView:{
    backgroundColor:'#F96526',
    borderRadius:50, 
    padding:10, 
  },
  btnText:{
    fontSize:16,
  },    
  shadow:{
    shadowColor:'#000',
    shadowRadius:4.65,
    shadowOffset:{
    width:0,
    height:2,
    },
    shadowOpacity: 0.2,
    elevation:8
}
});

export default styles;
