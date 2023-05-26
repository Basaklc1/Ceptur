import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {Images} from '../constants/images';

type Props = {name: string; imgUrl: string; placeId: string; rating: number; user_ratings_total: number; navigation: any;};

export const PlaceCard = ({name, imgUrl, placeId, rating, user_ratings_total,navigation}: Props) => {
  return (
  <TouchableOpacity
  onPress={() => navigation.navigate('PlaceDetail', { placeId: placeId })}>
    <View style={[styles.PlaceCard, styles.placesCardShadow]}>
      <View style={{flex:1.3}}>
        <Image
          style={styles.PlaceCardImage}
          source={{
            uri: imgUrl,
          }}
        />
      </View>
  

      <View style={{flex:2, paddingHorizontal: 12, paddingVertical: 24,justifyContent:'space-between'}}>
          <Text style={styles.PlaceCardHeadingText}>{name}</Text>
          <Text style={styles.PlaceCardHeadingText}>asdasdasdasdas dsad asd ad</Text>
        <View style={{flexDirection:'row'}}>
          <Image style={styles.ratingStarIcon} source={Images.staricon} />
          <Text style={styles.ratingText}>{rating}</Text>
          <Image style={styles.commentİcon} source={Images.commenticon}/>
          <Text style={styles.commentText}>{user_ratings_total}</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
};
