import { View } from "react-native";
import React from "react";
import { Header } from "../components/Header/Header";

export default function NewsDetailScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title={"News Detail"} />
      </Header>
    </View>
  );
}
