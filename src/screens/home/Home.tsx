import { Image,View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import styles from './styles'
import { Images } from '../../../constants/images'

const Home = ({navigation}:any) => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
      <Image
        style={[styles.logo,styles.shadow]}
        source={Images.logo}
        resizeMode="stretch"
        />
      <Text
      style={styles.message}>
        WELCOME!
      </Text>
    <TouchableOpacity
        style={[styles.btnView,styles.shadow]}
        onPress={() => navigation.navigate('Login')}
      ><Text
      style={styles.btnText}>
        CONTINUE
      </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home