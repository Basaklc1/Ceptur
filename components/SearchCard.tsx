import {StyleSheet,View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import styles from './styles'
import { Images } from '../constants/images'

export const SearchCard = () => {
  return (
    <View style={[styles.searchCard,styles.searchCardShadow]}>
        <View style={{flexDirection: 'row', flexWrap:'wrap', paddingHorizontal:10, paddingVertical: 10 }}>
      <Image style={styles.searchIcon} source={Images.search}/>
      <TextInput  placeholder='Search' placeholderTextColor={'white'} style={styles.searchText}>
      </TextInput>
      </View>
    </View>
  )
}

