import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: 66,
    height: 58,
  },
});

const ProfileScreen = ({ route }) => {
  console.log(route);
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: route.params.item.image,
        }}
      />
      <Text>{route.params.item.firstName}</Text>
      <Text>{route.params.item.lastName}</Text>
      <Text>{route.params.item.age}</Text>
      <Text>Company Details:</Text>
      <Text>{route.params.item.company.address.address}</Text>
      <Text>{route.params.item.company.address.city}</Text>
      <Text>{route.params.item.company.address.state}</Text>
      <Text>{route.params.item.company.address.postalCode}</Text>
    </View>
  );
};

export default ProfileScreen;
