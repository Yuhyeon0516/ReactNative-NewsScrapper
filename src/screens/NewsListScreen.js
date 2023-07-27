import { FlatList, View } from "react-native";
import React, { useCallback, useState } from "react";
import { Header } from "../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "../components/Typography";
import { getNewsList } from "../action/news";
import SingleLineInput from "../components/SingleLineInput";
import { useNavigation } from "@react-navigation/native";
import { CustomButton } from "../components/CustomButton";

export default function NewsListScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [query, setQuery] = useState("");
  const newsList = useSelector((state) => state.news.newsList);

  const onSubmitEditing = useCallback((query) => {
    if (!query) return;
    dispatch(getNewsList(query));
  }, []);

  const onPressListItem = useCallback((newsItem) => {
    navigation.navigate("Detail", { newsItem });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title={"New List"} />
      </Header>
      <View style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 24, paddingVertical: 12 }}>
          <SingleLineInput value={query} onChangeText={setQuery} placeholder={"뉴스 검색어를 입력해주세요."} onSubmitEditing={() => onSubmitEditing(query)} />
        </View>
        <FlatList
          style={{ flex: 1 }}
          data={newsList}
          renderItem={({ item }) => {
            return (
              <CustomButton onPress={() => onPressListItem(item)}>
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
