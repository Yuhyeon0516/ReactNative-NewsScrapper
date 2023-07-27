import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NewsListScreen from "../screens/NewsListScreen";
import FavoriteNewsScreen from "../screens/FavoriteNewsScreen";
import { TabIcon } from "../components/TabIcon";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color }) => {
          function getIconName() {
            if (route.name === "Favorite") return "star";

            return "home";
          }

          const iconName = getIconName();
          return <TabIcon iconName={iconName} iconColor={color} />;
        },
      })}
    >
      <Tab.Screen name="NewsList" component={NewsListScreen} />
      <Tab.Screen name="Favorite" component={FavoriteNewsScreen} />
    </Tab.Navigator>
  );
}
