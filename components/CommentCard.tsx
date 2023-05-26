import { View, Text ,Image} from 'react-native'
import React from 'react'
import styles from './styles'
import { Images } from '../constants/images'

type Props = { name: string; comment:string;}

 export const CommentCard = ({ name, comment}: Props) => {
  return (
    <View style={[styles.CommentCard,styles.CommentCardShadow]}>
      <View style={{justifyContent:'center',paddingHorizontal:10}}>
        <View style={{flexDirection:'row'}}>
         <Image style={styles.commentİcon} source={Images.commenticon}/>
         <Text style={styles.CommentCardHeadingText}>
            {name}
         </Text>
         </View>
        <View style={{paddingHorizontal:10}}>
        <Text style={styles.CommentCardHeadingText}>
          {comment}
        </Text>
        </View>
      </View>

    </View>
   
  )
}

