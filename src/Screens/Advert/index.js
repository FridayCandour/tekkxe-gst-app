import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  StatusBar,
  FlatList,
  View,
  ScrollView,
  Text,
  Image,
} from "react-native";
import { Colors } from "Constants";
import { McText, McImage, McTabIcon } from "Components";

import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Courses, Posts, dummyData } from "Mock";
const Advert = ({ navigation }) => {
  const [view, setView] = useState(0);
  return view === 0 ? (
    <Container>
      <ScrollView>
        <StatusBar hidden={false} />
        <Gamification navigation={navigation} view={view} setView={setView} />
        <AdvertContainer navigation={navigation} />
      </ScrollView>
    </Container>
  ) : (
    <Container>
      <ScrollView>
        <StatusBar hidden={false} />
        <Gamification navigation={navigation} setView={setView} />
        <ClassesContainer navigation={navigation} />
      </ScrollView>
    </Container>
  );
};

const Gamification = ({ navigation, view, setView }) => (
  <View
    style={{
      width: "100%",
      height: "30%",
      maxHeight: 140,
      minHeight: 130,
      backgroundColor: "#3490f3",
      flexDirection: "column",
      alignItems: "baseline",
      justifyContent: "space-around",
      borderBottomEndRadius: 16,
      borderBottomStartRadius: 16,
      paddingBottom: 12,
    }}
  >
    <View
      style={{
        width: "100%",
        height: "8%",
        maxHeight: 56,
        minHeight: 46,
        // backgroundColor: "#3490f3",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
    >
      <TouchableOpacity
        style={{
          width: "10%",
          color: "whitesmoke",
          fontWeight: 700,
          fontSize: 24,
          margin: 10,
        }}
        onPress={() => {
          navigation.toggleDrawer();
        }}
      >
        <McTabIcon
          icon={require("../../../assets/menu1.svg")}
          color="white"
          size={24}
        />
      </TouchableOpacity>
      <Text
        style={{
          color: "whitesmoke",
          fontWeight: 700,
          fontSize: 24,
          margin: 10,
        }}
      >
        Your Adverts
      </Text>
    </View>

    {/* real gami */}
    <View
      style={{
        width: "100%",
        height: "50%",
        alignContent: "center",
        flexDirection: "row",
      }}
    >
      <Gam
        onPress={() => {
          setView(0);
        }}
      >
        <Text
          style={{
            color: "whitesmoke",
            fontWeight: 800,
            fontSize: 13,
            margin: 6,
          }}
        >
          E-books
        </Text>
        <Batch style={{ display: view === 0 ? "none" : "flex" }}>view</Batch>
      </Gam>
      <Gam
        onPress={() => {
          setView(1);
        }}
      >
        <Text
          style={{
            color: "whitesmoke",
            fontWeight: 800,
            fontSize: 13,
            margin: 6,
          }}
        >
          Classes
        </Text>
        <Batch style={{ display: view === 0 ? "flex" : "none" }}> view</Batch>
      </Gam>
    </View>
  </View>
);

const AdvertContainer = ({ navigation }) => {
  return (
    <View
      style={{
        width: "100%",
        paddingBottom: 12,
        marginBottom: 10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        marginTop: 8,
      }}
    >
      <Header2Section>
        <Ionicons
          style={{
            marginRight: 5,
          }}
          color="#A0A3BD"
          name="cart-outline"
          size={24}
        />
        <McText color="#A0A3BD" semi size={18}>
          Enjoy Premiun materials
        </McText>
      </Header2Section>

      <FlatList
        keyExtractor={(item) => "_course" + item.id}
        showsHorizontalScrollIndicator={false}
        vertical
        numColumns={2}
        data={Courses}
        contentContainerStyle={{
          marginTop: 12,
        }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate("ClassRoom", { page: item });
            }}
            style={{
              marginHorizontal: 12,
              marginBottom: 18,
              height: 200,
              width: 180,
              borderRadius: 10,
              backgroundColor: "whitesmoke",
              alignItems: "center",
              justifyContent: "space-between",
              shadowColor: "black",
              shadowOffset: {
                width: 1,
                height: 1,
              },
              shadowRadius: 5,
              shadowOpacity: 0.5,
              elevation: 5,
              borderRadius: 8,
            }}
          >
            <View
              style={{
                height: "14%",
                width: "100%",
                backgroundColor: "#3490f3",
                borderTopLeftRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                borderTopRightRadius: 8,
                marginBottom: 6,
              }}
            >
              <Texti size={14} color="white">
                {item.course}
              </Texti>
            </View>
            <Image
              source={item.thumbnail}
              style={{
                width: "80%",
                height: "60%",
                borderRadius: 6,
              }}
            />
            <View
              style={{
                height: "12%",
                flexDirection: "row",
                width: "95%",
                margin: "auto",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Texti color="black" size={12}>
                {item.lessons}+ lessons
              </Texti>
              <Batch>{item.price}$</Batch>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const ClassesContainer = ({ navigation }) => {
  return (
    <View
      style={{
        width: "100%",
        // backgroundColor: "#3490f3",
        paddingBottom: 12,
        marginBottom: 10,
        alignItems: "stretch",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        padding: 12,
      }}
    >
      <Header2Section>
        <Ionicons
          style={{
            marginRight: 5,
          }}
          color="#A0A3BD"
          name="play"
          size={24}
        />
        <McText color="#A0A3BD" semi size={18}>
          Enjoy Premiun Classes
        </McText>
      </Header2Section>
      <FlatList
        keyExtractor={(item) => "_course" + item.id}
        showsHorizontalScrollIndicator={false}
        vertical
        data={Courses}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate("ClassRoom", { page: item });
            }}
            style={{
              height: "30%",
              width: "96%",
              minHeight: 120,
              backgroundColor: "white",
              alignItems: "flex-start",
              margin: "auto",
              shadowColor: "black",
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowRadius: 8,
              shadowOpacity: 0.7,
              elevation: 12,
              borderRadius: 10,
              marginBottom: 16,
            }}
          >
            <View
              style={{
                height: "30%",
                backgroundColor: Colors.blue1,
                justifyContent: "center",
                width: "100%",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            >
              <Texti color="whitesmoke" size={14}>
                English 50% discount
              </Texti>
            </View>
            <Image
              source={item.thumbnail}
              style={{
                width: "100%",
                height: "70%",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

//

const Container = styled.SafeAreaView`
  flex: 1;
  background: whitesmoke;
`;
const Header2Section = styled.View`
  margin: 0px auto;
  justify-content: center;
  align-items: center;
  width: 100%;
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
export default Advert;
