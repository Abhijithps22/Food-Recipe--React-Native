import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import RecipeList from '../Screens/RecipeList';
import RecipeDetails from '../Screens/RecipeDetails';

const Stack = createNativeStackNavigator();

export default AppNavigator=()=> {
  return (
       <>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RecipeList" component={RecipeList}/>
      <Stack.Screen name="RecipeDetails" component={RecipeDetails}/>
    </Stack.Navigator>
       </>
  );
}