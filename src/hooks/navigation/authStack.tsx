import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/login/Login';

const Stack = createNativeStackNavigator();
//login olmayan kullanıcının görüceği ekranlar
export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
            <Stack.Screen name="Login" component={Login} options={{title: 'CEPTUR'}}/>
            
        </Stack.Navigator>
    </NavigationContainer>
  );
}
