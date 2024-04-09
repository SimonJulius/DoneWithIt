import { StyleSheet, FlatList, ImageSourcePropType } from "react-native";
import React, { useState } from "react";
import { ListItemDeleteAction, ListingItem } from "../components/lists";
import AppSafeView from "../components/AppSafeView";
import LisItemtSeparator from "../components/lists/ListItemSeparator";

interface Message {
  id: number;
  title: string;
  description: string;
  image: ImageSourcePropType;
}

const MESSAGES: Message[] = [
  {
    id: 1,
    title: "Title 1",
    description: "Description 1",
    image: require("../assets/images/simon.jpg"),
  },
  {
    id: 2,
    title: "Title 2",
    description: "Description 2",
    image: require("../assets/images/simon.jpg"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(MESSAGES);
  const [refresh, setRefresh] = useState(false);

  const handleDeleteAction = (id: number) => {
    console.log("id: ", id);
    setMessages((messages) => {
      // console.log("messages : ", messages);
      const filteredMessage = messages.filter((message) => message.id !== id);
      console.log("messages filtered : ", filteredMessage);
      return filteredMessage;
    });
  };
  return (
    <AppSafeView style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListingItem
            image={item.image}
            title={item.title}
            subtitle={item.description}
            onPress={() => console.log("Selected ", item)}
            renderRightActions={() => (
              <ListItemDeleteAction
                onPress={() => handleDeleteAction(item.id)}
              />
            )}
          />
        )}
        ItemSeparatorComponent={() => <LisItemtSeparator seperatorHeight={1} />}
        refreshing={refresh}
        onRefresh={() => setMessages(MESSAGES)}
      />
    </AppSafeView>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
