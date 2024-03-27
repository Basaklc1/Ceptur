import {
  Image,
  Button,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {CategoryCard} from '../../../components/CategoryCard';
import {categories} from '../../../constants/categories';
import {Images} from '../../../constants/images';
import styles from './styles';
import { placesService } from '../../../services/places-services';

const Login = ({navigation}: any) => {
  const [places, setPlaces] = useState([])
  const getPlaces = () => {

  }
useEffect(() => {
  console.log("")
}, [getPlaces])

  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View 
         style={styles.shadow}>
        <Image 
        style={styles.bannerImage} source={Images.banner} />
        </View>
        <View
          style={{height:'100%',backgroundColor: 'blue',flexDirection: 'row', flexWrap: 'wrap', paddingVertical: 8}}>
          {categories.map(category => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Places', { category: category })
                }
                style={styles.categoryCard}
                key={category.key}>
                <CategoryCard name={category.name} imgUrl={category.img_url} />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;