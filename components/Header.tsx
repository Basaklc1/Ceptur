import { Image, View, Text, StatusBar, Platform, TouchableOpacity, NativeModules } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { Images } from '../constants/images'
import LinearGradient from 'react-native-linear-gradient'
import { useHeaderHeight } from '@react-navigation/elements'



type Props = { title: string; navigation: any; }

const Header = ({navigation, title} : Props) => {
  const [statusHeight, setStatusHeight] = useState(0)
  const statusHeightHandler = () => NativeModules.StatusBarManager.getHeight((statusBarHeight:any) => setStatusHeight(statusBarHeight.height))
  
  useEffect(()=>{
    statusHeightHandler()
  },[])

const headerHeight = 40 + statusHeight
  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#F95926', '#fc8f20']} style={{height:headerHeight,paddingTop: statusHeight}}>
        <StatusBar translucent={true} backgroundColor='transparent' barStyle='light-content'/>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <View style={{flex:1, alignItems:'center',justifyContent:'center',height:'100%'}}>
          <TouchableOpacity
          onPress={() => navigation.goBack()}>
          <Image style={styles.headerIcon} source={Images.backicon}/>
          </TouchableOpacity>
          </View>
          <View style={{flex:10, alignItems:'center',}}>
          <Text
      style={styles.headerText}>
          {title}
      </Text>
          </View>
        </View>
    </LinearGradient>
   
  )
}

export default Header
