import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { McTabIcon } from "Components";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  ScrollView,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";

const ClassRoom = ({ navigation, route }) => {
  // get the selected courses from the route object
  const [item, setItem] = useState(null);
  useEffect(() => {
    let { page } = route.params;
    setItem(page);
  }, []);

  return (
    <Container>
      <ScrollView style={{ width: "100%", height: "100%" }}>
        <Header navigation={navigation} course={item?.course} />
        <CoursesContainer courses={item?.topics} navigation={navigation} />
      </ScrollView>
    </Container>
  );
};

const Header = ({ navigation, course }) => {
  return (
    <View style={styles.bar}>
      <Text
        style={{
          color: "#3490f3",
          fontWeight: 700,
          fontSize: 24,
          margin: 15,
        }}
      >
        {course}
      </Text>
    </View>
  );
};

const CoursesContainer = ({ courses, navigation }) => {
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <FlatList
        keyExtractor={(item) => "_course" + item.name}
        vertical
        showsHorizontalScrollIndicator={true}
        data={courses}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              width: "88%",
              maxHeight: 140,
              margin: "auto",
              padding: 5,
              borderRadius: 24,
              backgroundColor: "aqua",
              marginTop: 15,
            }}
            onPress={() => {
              navigation.navigate("ArticleDetail", { selectedQuestions: item });
            }}
          >
            <LinearGradient
              colors={["#5770ec", "#14a8dd"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ padding: "5%", borderRadius: 24 }}
            >
              <Text
                style={{
                  color: "whitesmoke",
                  fontWeight: 700,
                  fontSize: 18,
                }}
              >
                {item.name}
              </Text>
              <Image
                style={{
                  width: 40,
                  height: 40,
                }}
                source={item.thumbnail}
              />
            </LinearGradient>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
`;
const Gam = styled.TouchableOpacity`
  justify-content: space-around;
  align-items: center;
  height: 40%;
  width: 40%;
  padding-top: 17px;
  padding-bottom: 17px;
  margin: auto;
  border-radius: 12px;
  flex-direction: row;
`;

const Batch = styled.Text`
  background-color: lightskyblue;
  justify-content: center;
  align-items: center;
  margin: 2px;
  width: 40%;
  padding: 4px;
  font-weight: 800;
  color: floralwhite;
  text-align: center;
  border-radius: 30px;
`;

const Texti = styled.Text`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size}px;
  text-align: center;
`;

const styles = StyleSheet.create({
  topbar: {
    paddingTop: 5,
    width: "100%",
    maxHeight: 140,
    backgroundColor: "#3490f3", //"#3490f3",
    flexDirection: "column",
    justifyContent: "center",
  },
  navigation: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
  },
  bar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "whitesmoke",
  },
  btn: {
    minWidth: 150,
    maxHeight: 100,
    padding: 12,
    borderRadius: 12,
    color: "black",
    backgroundColor: "#08b9fc",
    margin: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ClassRoom;
