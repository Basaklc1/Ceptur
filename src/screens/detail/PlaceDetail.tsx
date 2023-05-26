import {ScrollView, View, Image, Text, TouchableOpacity, StyleSheet, Platform, Linking} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Detail} from '../../../constants/detail';
import {appConfig} from '../config';
import {placesService} from '../../../services/places-services';
import {Images} from '../../../constants/images';
import styles from '../../../components/styles';
import { CommentCard } from '../../../components/CommentCard';
type Props = {route: any; navigation: any};

const PlaceDetail = ({route, navigation}: Props) => {
  const placeId: string = route?.params?.placeId;
  const [detail, setDetail] = useState<Detail>();
  //detail bizim state'miz api'den dönen respons'umuzu bu state kaydedicez.

  const getPlaceDetail = async () => {
    const {result} = (await placesService.getPlaceDetail(placeId)) as any;

    const formattedPlaceDetail = {
      place_id: result?.place_id,
      name: result?.name,
      img_url: `${appConfig.googlePlacePhotoBaseUrl}&photo_reference=${result?.photos[0]?.photo_reference}&key=${appConfig.googleApiKey}`,
      rating: result?.rating,
      user_ratings_total: result?.user_ratings_total,
      formatted_address: result?.formatted_address,
      opening_hours: result?.opening_hours?.weekday_text,
      editorial_summary: result?.editorial_summary?.overview,
      formatted_phone_number: result?.formatted_phone_number,
      international_phone_number: result?.international_phone_number,
      reviews: result?.reviews,
      text: result?.text,
      location: result?.location
    };
    //statemizi güncellemek için kullandığımız method
    setDetail(formattedPlaceDetail);
  };

  const openGps = (lat:string,lng:string) => {
    var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
    var url = scheme + `${lat},${lng}`;
    Linking.openURL(url);
  }
  const starHandler = () => {
    const tempRating = detail?.rating.toString();
    const rating = parseInt(tempRating ? tempRating : '');
    let tempStarArray = [];

    for (let index = 0; index < rating; index++) {
      tempStarArray.push(index);
    }

   return (
     <View style={{flexDirection:'row', marginRight: 5}}>
      { tempStarArray.map(() => (
        <Image style={styles.ratingStarIcon} source={Images.staricon} />
      ))}
     </View>
   )
  };

  useEffect(() => {
    getPlaceDetail();
  }, []);

  console.log(JSON.stringify(detail));
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{width: '100%', height: 400, shadowColor:'#000',
          shadowRadius:4.65,
            shadowOffset:{
               width:6,
              height:6,},
          shadowOpacity: 0.3,}}>
        <Image
          style={{
            flex: 1,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          }}
          source={{
            uri: detail?.img_url,
          }}
        />
      </View>
      <View style={{justifyContent:'space-between',flexDirection:'row',marginTop:12}}>
        <View style={{flexDirection: 'row',paddingHorizontal:15,paddingTop:6}}>
          {starHandler()}
          <Text style={{fontSize:18}}>{detail?.rating}</Text>
          </View>
        <View >
        
          <TouchableOpacity
            style={{backgroundColor:'#fc8f20',
            borderRadius:10, 
            paddingVertical:8,
            paddingHorizontal:12,
            marginRight:20,
            flexDirection:'row',
            shadowColor:'#000',
            shadowRadius:4.65,
              shadowOffset:{
                 width:2,
                 height:2,
                },
            shadowOpacity: 0.1,
            elevation:8
            }}
            onPress={() => openGps(lng,lat)}>
             <Image style={{width:18,height:18,marginRight:2}}
            source={Images.location}/>
              <Text
           style={{fontSize:14,color:'white',fontWeight:'bold',marginRight:2}}>
           Go Location
            </Text>
          </TouchableOpacity>
          </View>
        </View>
      <View
        style={{
          height: 80,
          paddingHorizontal: 15, 
          paddingVertical: 10,
          justifyContent:'center',
        }}>
        <Text style={{fontSize:20}}
        >{detail?.name}</Text>
        <Text style={{fontSize:15}}>
          {detail?.editorial_summary}
          </Text>
      </View>
      <View 
         style={{
          height: 80,
          paddingHorizontal: 15, 
          paddingVertical: 10,
          justifyContent:'center',
          }}>
          <View style={{justifyContent:'space-between'}}>
            <Text style={{fontSize:18}}>
              Address
            </Text>
          <Text>
            {detail?.formatted_address}
          </Text>
          <Text>
            {detail?.formatted_phone_number}  {detail?.international_phone_number}
          </Text>
          </View>
          </View>
      <View style={{marginHorizontal:10,padding:6}}>
        <Text style={{fontSize:18}}>
          Opening Hours
        </Text>
      </View>
      <View style={{
          height: 130,
          paddingHorizontal:10, 
          justifyContent:'center',
          borderRadius:20,
          marginHorizontal:8,
          shadowColor:'#000',
          shadowRadius:4.65,
            shadowOffset:{
               width:2,
               height:2,
              },
          shadowOpacity: 0.1,
          elevation:8
      }}>
            {detail?.opening_hours?.map(hour=>{
              return(
                <Text>
                  {hour}
                </Text>
              )
            })}
          </View>
      <View style={{paddingHorizontal:15,paddingVertical:10}}>
      {detail?.reviews?.map(review=>{
        return(
            <CommentCard
              name={review.author_name}
              comment={review.text}
              />
        )
          })}
      </View>
      
    </ScrollView>
  );
};

export default PlaceDetail;
