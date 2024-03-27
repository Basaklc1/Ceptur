import {
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Linking,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Detail} from '../../../constants/detail';
import {appConfig} from '../config';
import {placesService} from '../../../services/places-services';
import {Images} from '../../../constants/images';
import styles from '../../../components/styles';
import {CommentCard} from '../../../components/CommentCard';
import {SliderBox} from 'react-native-image-slider-box';
import LinearGradient from 'react-native-linear-gradient';
type Props = {route: any; navigation: any};

const PlaceDetail = ({route, navigation}: Props) => {
  const placeId: string = route?.params?.placeId;
  const [detail, setDetail] = useState<Detail>();
  const [loading, setLoading] = useState<boolean>(false);
  //detail bizim state'miz api'den dönen respons'umuzu bu state kaydedicez.

  const getPlaceDetail = async () => {
    setLoading(true);
    const {result} = (await placesService.getPlaceDetail(placeId)) as any;

    const formattedPlaceDetail: Detail = {
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
      location: result?.geometry?.location,
      geometry: result.geometry,
      photos: result?.photos?.map(
        (photo: any) =>
          `${appConfig.googlePlacePhotoBaseUrl}&photo_reference=${photo.photo_reference}&key=${appConfig.googleApiKey}`,
      ),
    };
    //statemizi güncellemek için kullandığımız method
    setDetail(formattedPlaceDetail);
    setLoading(false);
  };
//api den dönen lat lng değerlerine göre harita açma
  const openGps = (lat: number, lng: number) => {
    var scheme = Platform.OS === 'ios' ? 'maps://0,0?q=' : 'geo:0,0?q=';
    var url = scheme + `${lat},${lng}`;
    Linking.openURL(url);
  };

  //apiden dönen rating değerine göre yıldız sayısını belirliyor
  const starHandler = () => {
    const tempRating = detail?.rating.toString();
    const rating = parseInt(tempRating ? tempRating : '');
    let tempStarArray = [];

    for (let index = 0; index < rating; index++) {
      tempStarArray.push(index);
    }

    return (
      <View style={{flexDirection: 'row', marginRight: 5}}>
        {tempStarArray.map(() => (
          <Image style={styles.ratingStarIcon} source={Images.staricon} />
        ))}
      </View>
    );
  };

  useEffect(() => {
    getPlaceDetail();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {!loading ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: '100%',
              height: 380,
              shadowColor: '#000',
              shadowRadius: 4.65,
              shadowOffset: {
                width: 6,
                height: 6,
              },
              shadowOpacity: 0.3,
            }}>
            <View
              style={{
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                marginLeft: 10,
                marginTop: 70,
                position: 'absolute',
                zIndex: 1,
                backgroundColor: 'rgba(0,0,0,0.5)',
              }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  style={{width: 24, height: 24}}
                  source={Images.backicon}
                />
              </TouchableOpacity>
            </View>
            <SliderBox
              ImageComponentStyle={{
                borderBottomLeftRadius: 28,
                borderBottomRightRadius: 30,
              }}
              images={detail?.photos || []}
              sliderBoxHeight={380}
            />
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 14,
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 15,
                paddingTop: 8,
              }}>
              {starHandler()}
              <Text style={{fontSize: 18}}>{detail?.rating}</Text>
            </View>
            <View>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#F95926', '#fc8f20']}
                style={{
                  borderRadius: 10,
                  marginRight: 12,
                  paddingVertical: 8,
                  paddingHorizontal: 10,
                  marginLeft: 4,
                }}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    shadowColor: '#000',
                    shadowRadius: 4.65,
                    shadowOffset: {
                      width: 2,
                      height: 2,
                    },
                    shadowOpacity: 0.1,
                    elevation: 8,
                  }}
                  onPress={() =>
                    openGps(
                      detail?.location?.lat || 0,
                      detail?.location?.lng || 0,
                    )
                  }>
                  <Image
                    style={{width: 18, height: 18, marginRight: 2}}
                    source={Images.location}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      color: 'white',
                      fontWeight: 'bold',
                      marginRight: 2,
                    }}>
                    Go Location
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 15,
              paddingVertical: 10,
              justifyContent: 'center',
              marginTop: 2,
            }}>
            <Text style={{fontSize: 20, fontWeight: '700'}}>
              {detail?.name}
            </Text>
            <View style={{paddingVertical: 6}}>
              <Text style={{fontSize: 15}}>{detail?.editorial_summary}</Text>
            </View>
          </View>
          <View
            style={{
              height: 80,
              paddingHorizontal: 15,
              paddingVertical: 10,
              justifyContent: 'center',
            }}>
            <View style={{justifyContent: 'space-between'}}>
              <Text style={{fontSize: 18, fontWeight: '600'}}>Address</Text>
              <View style={{paddingVertical: 6}}>
                <Text>{detail?.formatted_address}</Text>
                <Text>
                  {detail?.formatted_phone_number}{' '}
                  {detail?.international_phone_number}
                </Text>
              </View>
            </View>
          </View>
          <View style={{marginHorizontal: 4, padding: 2}}>
            <Text style={{fontSize: 18, fontWeight: '600', marginLeft: 10}}>
              Opening Hours
            </Text>
            <View
              style={{
                height: 130,
                paddingHorizontal: 12,
                justifyContent: 'center',
                shadowColor: '#000',
                shadowRadius: 4.65,
                shadowOffset: {
                  width: 2,
                  height: 2,
                },
                shadowOpacity: 0.1,
                elevation: 8,
              }}>
              {detail?.opening_hours?.map(hour => {
                return <Text>{hour}</Text>;
              })}
            </View>
          </View>
          <View
            style={{
              padding: 2,
              marginHorizontal: 15,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Comments</Text>
          </View>
          <View style={{paddingHorizontal: 15, paddingVertical: 2}}>
            {detail?.reviews?.map(review => {
              return (
                <CommentCard name={review.author_name} comment={review.text} />
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator color="orange" size="large" />
        </View>
      )}
    </View>
  );
};

export default PlaceDetail;
