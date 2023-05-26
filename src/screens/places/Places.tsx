import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {PlaceCard} from '../../../components/PlaceCard';
import {Place} from '../../../constants/place';
import Header from '../../../components/Header';
import {SearchCard} from '../../../components/SearchCard';
import {placesService} from '../../../services/places-services';
import {Category} from '../../../constants/categories';
import {appConfig} from '../config';

type Props = {route: any; navigation: any};

const Places = ({route, navigation}: Props) => {
  const category: Category = route?.params?.category;
  const [places, setPlaces] = useState<Place[]>([]);

  const getPlaces = async () => {
    // Places istek atma
    const tempData = (await placesService.getPlaces(category.key)) as any;

    // Image olmayanları filteleme işlemi
    const tempPlaces = tempData.results.filter((result: any) => result.photos);

    const filteredTempPlaces: Place[] = tempPlaces.map((result: any) => {
      return {
        place_id: result.place_id,
        name: result.name,
        img_url: `${appConfig.googlePlacePhotoBaseUrl}&photo_reference=${result.photos[0].photo_reference}&key=${appConfig.googleApiKey}`,
        rating: result.rating,
        user_ratings_total: result.user_ratings_total,
      };
    });

    setPlaces(filteredTempPlaces);
  };

  useEffect(() => {
    getPlaces();
  }, []);

  return (
    <View>
      <Header title={category.name} navigation={navigation} />
      <SearchCard />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: 8, paddingVertical: 8}}>
          {places.map(place => (
            <PlaceCard
              name={place.name}
              imgUrl={place.img_url}
              key={place.place_id}
              placeId={place.place_id}
              rating={place.rating}
              user_ratings_total={place.user_ratings_total}
              navigation={navigation}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Places;
