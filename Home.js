import React, { useState, useEffect, useContext } from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ImageBackground,
  Pressable,
  Alert,
  View,
  Button,
} from "react-native";
import MyContext from "./MyContext";

const Home = ({ navigation }) => {
  const { isLoading, users } = useContext(MyContext);
  const renderItem = (data) => (
    <Pressable
      onPress={() => navigation.navigate("Profile", data)}
      style={styles.item}
    >
      <ImageBackground
        source={data.item.image}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.title}>{data.item.firstName}</Text>
        <Text style={styles.title}>{data.item.age}</Text>
      </ImageBackground>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <Text>Loading</Text>
      ) : (
        <View>
          <FlatList
            data={users}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
          <Button
            title="Add"
            color="#f194ff"
            onPress={() => navigation.navigate("Add")}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    marginVertical: 8,
    marginHorizontal: 5,
    flex: 0.5,
  },
  title: {
    fontSize: 32,
  },
  image: {
    flex: 1,
  },
});

export default Home;
