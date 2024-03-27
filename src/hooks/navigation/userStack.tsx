import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PlaceDetail from '../../screens/detail/PlaceDetail';
import Home from '../../screens/home/Home';
import Places from '../../screens/places/Places';

const Stack = createNativeStackNavigator();
//login olan kullanıcının görebileceği ekranlar
export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        
        <Stack.Screen name="PlaceDetail" component={PlaceDetail}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
