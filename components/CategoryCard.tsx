import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'

type Props = { name: string; imgUrl: string; }

export const CategoryCard = ({name, imgUrl} : Props) => {
  return (
    <View style={[styles.categoryMain, styles.cardShadow]}>
      <Image style={styles.cardImage}
      source={{
          uri: imgUrl
      }}
      />
      <View style={styles.cardText}>
      <Text 
       style={styles.cardHeadingText}>
          {name}
      </Text>
      </View>
    </View>
  )
}

