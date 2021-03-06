import React, { useState, useEffect } from "react";
import { StatusBar, View, ScrollView, Text, StyleSheet } from "react-native";
import { McTabIcon } from "Components";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Home, Book, Course, Advert } from "../OtherScreens/homeStack";

const Discover = ({ navigation }) => {
  const [view, veiwer] = useState(3);

  if (view === 0) {
    return (
      <Container>
        <StatusBar hidden={false} />
        <ScrollView>
          <Gamification veiwer={veiwer} navigation={navigation} />
          <Home navigation={navigation} />
        </ScrollView>
      </Container>
    );
  }

  if (view === 1) {
    return (
      <Container>
        <StatusBar hidden={false} />
        <ScrollView>
          <Gamification veiwer={veiwer} navigation={navigation} />
          <Book navigation={navigation} />
        </ScrollView>
      </Container>
    );
  }

  if (view === 2) {
    return (
      <Container>
        <StatusBar hidden={false} />
        <ScrollView>
          <Gamification veiwer={veiwer} navigation={navigation} />
          <Course navigation={navigation} />
        </ScrollView>
      </Container>
    );
  }

  if (view === 3) {
    return (
      <Container>
        <StatusBar hidden={false} />
        <ScrollView>
          <Gamification veiwer={veiwer} navigation={navigation} />
          <Advert navigation={navigation} />
        </ScrollView>
      </Container>
    );
  }
};

const Gamification = ({ navigation, veiwer }) => {
  const [bord, border] = useState({
    over: true,
    book: false,
    course: false,
    advert: false,
  });

  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          width: "100%",
          height: "12%",
          backgroundColor: "#3490f3",
          maxHeight: 80,
          minHeight: 60,
          margin: 0,
          flexDirection: "row",
          justifyContent: "flex-start",
          shadowColor: "black",
          // alignItems: "center",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowRadius: 6,
          shadowOpacity: 0.5,
          elevation: 6,
        }}
      >
        <TouchableOpacity
          style={{
            width: "10%",
            margin: 12,
          }}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        >
          <McTabIcon
            icon={require("../../../assets/menu1.svg")}
            color="white"
            size={22}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: "whitesmoke",
            fontWeight: 700,
            fontSize: 24,
            margin: 12,
          }}
        >
          Business Unihub
        </Text>
      </View>

      {/* real gami */}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
        }}
      >
        <Gam
          style={{
            borderBottomWidth: 2,
            borderColor: bord.over ? "skyblue" : "white",
          }}
          onPress={() => {
            veiwer(0);

            border({
              over: true,
              book: false,
              course: false,
              advert: false,
            });
          }}
        >
          <Text
            style={{
              color: "#013246",
              fontWeight: 800,
              fontSize: 13,
              margin: 6,
            }}
          >
            Overview
          </Text>
          <Batch
            style={{
              width: bord.over ? "15%" : 0,
            }}
          />
        </Gam>
        <Gam
          style={{
            borderBottomWidth: 2,
            borderColor: bord.book ? "skyblue" : "white",
          }}
          onPress={() => {
            veiwer(1);

            border({
              over: false,
              book: true,
              course: false,
              advert: false,
            });
          }}
        >
          <Text
            style={{
              color: "#013246",
              fontWeight: 800,
              fontSize: 13,
              margin: 6,
            }}
          >
            Books
          </Text>
          <Batch>300</Batch>
        </Gam>
        <Gam
          style={{
            borderBottomWidth: 2,
            borderColor: bord.course ? "skyblue" : "white",
          }}
          onPress={() => {
            veiwer(2);

            border({
              over: false,
              book: false,
              course: true,
              advert: false,
            });
          }}
        >
          <Text
            style={{
              color: "#013246",
              fontWeight: 800,
              fontSize: 13,
              margin: 6,
            }}
          >
            Courses
          </Text>
          <Batch>780</Batch>
        </Gam>
        <Gam
          style={{
            borderBottomWidth: 2,
            borderColor: bord.advert ? "skyblue" : "white",
          }}
          onPress={() => {
            veiwer(3);

            border({
              over: false,
              book: false,
              course: false,
              advert: true,
            });
          }}
        >
          <Text
            style={{
              color: "#013246",
              fontWeight: 800,
              fontSize: 13,
              margin: 6,
            }}
          >
            Adverts
          </Text>
          <Batch>100</Batch>
        </Gam>
      </View>
    </View>
  );
};

const Batch = styled.Text`
  background-color: lightskyblue;
  justify-content: center;
  align-items: center;
  width: 40%;
  margin: 1px;
  padding: 2px;
  font-weight: 800;
  color: floralwhite;
  text-align: center;
  border-radius: 30px;
`;

const Container = styled.SafeAreaView`
  flex: 1;
  background: whitesmoke;
`;

const Gam = styled.TouchableOpacity`
  justify-content: space-around;
  align-items: center;
  height: 25%;
  width: 24%;
  padding-top: 17px;
  padding-bottom: 17px;
  margin: auto;
  flex-direction: row;
`;
const styles = StyleSheet.create({});
export default Discover;
