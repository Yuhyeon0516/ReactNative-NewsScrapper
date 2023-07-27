import { View } from "react-native";
import React, { useCallback } from "react";
import { Header } from "../components/Header/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import WebView from "react-native-webview";
import { Spacer } from "../components/Spacer";

export default function NewsDetailScreen() {
  const navigation = useNavigation();
  const routes = useRoute();
  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Icon iconName={"arrow-back"} onPress={onPressBack} />
          <Spacer horizontal space={12} />
          <View style={{ maxWidth: 200 }}>
            <Header.Title title={routes.params.newsItem.title} />
          </View>
        </Header.Group>
      </Header>
      <WebView style={{ flex: 1 }} source={{ uri: routes.params.newsItem.link }} />
    </View>
  );
}
