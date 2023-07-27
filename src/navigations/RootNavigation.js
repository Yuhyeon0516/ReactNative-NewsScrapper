import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";
import NewsDetailScreen from "../screens/NewsDetailScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <Stack.Navigator initialRouteName="Tab" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen name="Detail" component={NewsDetailScreen} />
    </Stack.Navigator>
  );
}
