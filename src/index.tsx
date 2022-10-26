import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  PostList: undefined;
  PostDetails: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
//screens
import Login from './screens/Login';
import Register from './screens/Register';
import PostList from './screens/PostList';
import PostDetails from './screens/PostDetails'

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Register" component={Register} />
        <RootStack.Screen name="PostList" component={PostList} />
        <RootStack.Screen name="PostDetails" component={PostDetails} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;