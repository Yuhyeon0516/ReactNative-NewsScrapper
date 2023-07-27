import { FlatList, View } from "react-native";
import React, { useCallback, useEffect } from "react";
import { Header } from "../components/Header/Header";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { CustomButton } from "../components/CustomButton";
import { Typography } from "../components/Typography";
import { clippedTabFocus } from "../action/news";

export default function FavoriteNewsScreen() {
  const navigation = useNavigation();
  const data = useSelector((state) => state.news.favoriteNews);

  const dispatch = useDispatch();

  const onPressItem = useCallback((newsItem) => {
    navigation.navigate("Detail", { newsItem });
  }, []);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(clippedTabFocus());
    }
  }, [isFocused]);

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
