import { FlatList, View } from "react-native";
import React, { useCallback } from "react";
import { Header } from "../components/Header/Header";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { CustomButton } from "../components/CustomButton";
import { Typography } from "../components/Typography";

export default function FavoriteNewsScreen() {
  const navigation = useNavigation();
  const data = useSelector((state) => state.news.favoriteNews);

  const onPressItem = useCallback((newsItem) => {
    navigation.navigate("Detail", { newsItem });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title={"Favorite"} />
      </Header>
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ flex: 1 }}
          data={data}
          renderItem={({ item }) => {
            return (
              <CustomButton onPress={() => onPressItem(item)}>
                <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 8 }}>
                  <Typography fontSize={24} numOfLines={1}>
                    {item.title}
                  </Typography>
                  <Typography fontSize={16} numOfLines={2} color={"gray"}>
                    {item.description}
                  </Typography>
                </View>
              </CustomButton>
            );
          }}
        />
      </View>
    </View>
  );
}
