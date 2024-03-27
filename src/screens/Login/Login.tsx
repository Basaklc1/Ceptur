import { Image,View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Images } from '../../../constants/images'
import { firebase } from '../../../config/firebase'
import LinearGradient from 'react-native-linear-gradient'

const Login = ({navigation}:any) => {
  //kullanıcın inputlarda girdği değerleri state tutuyoruz(email,password)
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

//firebasede email ve paswordla sıgn ın yapma işlemi
  const signIn = async() => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch(error: any) {
      Alert.alert(error.message)
    }
  }

  return (
    <View>
      <View>
      <Image
        source={Images.logo}
        resizeMode="stretch"
        />
      <Text>
       WELCOME!
      </Text>
      <View style={{padding:13, width:400,marginLeft:4}}>
      <Text style={{fontSize:16, marginLeft:14, fontWeight:'500',color:'#526D82',lineHeight:22} }>
      Are you ready to visit Istanbul, one of the most unique and historical cities in the world, with us?
      </Text>
      </View>
      <View style={{marginVertical: 10, backgroundColor:'#DDE6ED', borderRadius: 15, width:240,padding:14}}>
        <TextInput  placeholder='Email' value={email} onChangeText={(e)=>setEmail(e)} />
      </View>
      <View style={{marginVertical: 10, backgroundColor:'#DDE6ED', borderRadius: 15, width:240,padding:14}}>
        <TextInput  placeholder='Password' value={password} onChangeText={(e)=>setPassword(e)} />
      </View>
      <View  style={{flexDirection:'row',padding:6}}>
      <TouchableOpacity
        
        onPress={() => signIn()}
      >
      <LinearGradient 
         start={{x: 0, y: 0}}
         end={{x: 1, y: 0}}
         colors={['#F95926', '#fc8f20']}
         >
        <Text
     >
        SIGN IN
      </Text>
      </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        
        onPress={() => navigation.navigate("Register")}
      >
        <LinearGradient 
         start={{x: 0, y: 0}}
         end={{x: 1, y: 0}}
         colors={['#F95926', '#fc8f20']} >
        <Text
      >
        SIGN UP
      </Text>
      </LinearGradient>
      </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}

export default Login