import React from "react";
import {
  ImageBackground,
  ActivityIndicator,
  StatusBar,
  View,
  FlatList,
  ScrollView,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors, Images } from "Constants";
import { McText, McImage, McTabIcon } from "Components";
import styled from "styled-components/native";
import { Courses, dummyData } from "Mock";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

export const Home = ({ navigation }) => (
  <View>
    <Handlers navigation={navigation} />
    <Barner />
    {/* Courses Section */}
    <Header2Section>
      <Ionicons
        style={{
          marginRight: 5,
        }}
        color="#A0A3BD"
        name="tv"
        size={24}
      />
      <McText color="#A0A3BD" semi size={18}>
        Trending Courses
      </McText>
    </Header2Section>

    <CSContainer courses={Courses} navigation={navigation} />

    {/* Books Section */}
    <Header2Section>
      <Ionicons
        style={{
          marginRight: 5,
        }}
        color="#A0A3BD"
        name="book"
        size={24}
      />
      <McText color="#A0A3BD" semi size={18}>
        Trending Books
      </McText>
    </Header2Section>

    <BKContainer courses={Courses} navigation={navigation} />
  </View>
);

export const Book = ({ navigation }) => (
  <View>
    <Header2Section>
      <Ionicons
        style={{
          marginRight: 5,
        }}
        color="#A0A3BD"
        name="book"
        size={24}
      />
      <McText color="#A0A3BD" semi size={18}>
        Your Books
      </McText>
    </Header2Section>

    <BKContainer courses={Courses} navigation={navigation} />
  </View>
);

export const Course = ({ navigation }) => (
  <View
    style={{
      width: 100 + "%",
      alignItems: "flex-start",
      justifyContent: "flex-start",
    }}
  >
    <Header2Section>
      <Ionicons
        style={{
          marginRight: 5,
        }}
        color="#A0A3BD"
        name="tv"
        size={24}
      />
      <McText color="#A0A3BD" semi size={18}>
        Your Courses
      </McText>
    </Header2Section>

    <CSContainer courses={Courses} navigation={navigation} />
  </View>
);

export const Advert = ({ navigation }) => (
  <View>
    <Header2Section>
      <Ionicons
        style={{
          marginRight: 5,
        }}
        color="#A0A3BD"
        name="timer-outline"
        size={24}
      />
      <McText color="#A0A3BD" semi size={18}>
        Your Adverts
      </McText>
    </Header2Section>
    <ADContainer courses={Courses} navigation={navigation} />
  </View>
);

const Handlers = ({ navigation }) => (
  <View
    style={{
      padding: 10,
      width: "100%",
      flexWrap: "wrap",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
    }}
  >
    <NewGam1 navigation={navigation} />
    <NewGam2 navigation={navigation} />
    <NewGam3 navigation={navigation} />
    <NewGam4 navigation={navigation} />
  </View>
);

const Barner = ({}) => (
  <BannerSection>
    <LinearGradient
      colors={[Colors.blue1, "aqua"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{
        borderRadius: 12,
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          width: "80%",
          margin: "auto",
          padding: 3,
          justifyContent: "space-between",
        }}
      >
        <McText
          size={18}
          style={{
            fontFamily: "Inter-SemiBold",
          }}
        >
          Get Premiun Unihub promotion
        </McText>
      </View>
      <McImage
        style={{
          width: 40,
          height: 40,
          margin: 2,
        }}
        source={require("../../../assets/images/badge.svg")}
      />
    </LinearGradient>
  </BannerSection>
);

const CSContainer = ({ courses, navigation }) => {
  return (
    <View style={styles.course}>
      <FlatList
        keyExtractor={(item) => "_course" + item.id}
        showsVerticalScrollIndicator={false}
        vertical
        contentContainerStyle={{}}
        data={courses}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ClassRoom", { page: item });
            }}
          >
            <View style={styles.itemcs}>
              <Image
                source={item.thumbnail}
                style={{
                  width: "100%",
                  height: "70%",
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                }}
              />
              <LinearGradient
                colors={[Colors.blue1, "aqua"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  borderRadius: 10,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  height: "30%",
                  paddingVertical: 3,
                  justifyContent: "space-between",
                  width: "100%",
                  flexDirection: "row",
                }}
              >
                <View style={{ height: "20%" }}>
                  <Texti>title: {item.course}</Texti>
                  <Texti>engagements: 20 users</Texti>
                  <Texti>created on: march 30th, 2022</Texti>
                  <Texti size={12}>inventory: {item.lessons} lessons </Texti>
                </View>
              </LinearGradient>
            </View>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
};

const BKContainer = ({ courses, navigation }) => {
  return (
    <View style={styles.course}>
      <FlatList
        keyExtractor={(item) => "_book" + item.id}
        showsVerticalScrollIndicator={false}
        vertical
        contentContainerStyle={{
          width: "100%",
          marginBottom: 20,
        }}
        data={courses}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ClassRoom", { page: item });
            }}
            style={{
              padding: 8,
              width: 100 + "%",
              flexDirection: "row",
              // borderWidth: 4,
              // borderColor: "red",
              shadowColor: "grey",
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowRadius: 4,
              shadowOpacity: 0.3,
              elevation: 2,
              marginBottom: 10,
            }}
          >
            <View style={styles.itembk}>
              <Image
                source={item.thumbnail}
                style={{
                  width: "70%",
                  height: "70%",
                  margin: "auto",
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                }}
              />
              <LinearGradient
                colors={[Colors.blue1, "aqua"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  borderRadius: 10,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  height: "20%",
                  paddingVertical: 5,
                  width: "100%",
                }}
              >
                <Texti>{item.course}</Texti>
                <Texti size={12}>{item.lessons} users </Texti>
              </LinearGradient>
            </View>
            <View
              style={{
                alignSelf: "center",
              }}
            >
              <Text>Published: mar 3rd, 2022 </Text>
              <Text>{item.course}</Text>
              <Text size={12}>{item.lessons} users </Text>
            </View>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
};

const ADContainer = ({ courses, navigation }) => {
  return (
    <View style={styles.course}>
      <FlatList
        keyExtractor={(item) => "_advert" + item.id}
        showsVerticalScrollIndicator={false}
        vertical
        contentContainerStyle={{}}
        data={courses}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ClassRoom", { page: item });
            }}
          >
            <View style={styles.itemad}>
              <Image
                source={item.thumbnail}
                style={{
                  width: "100%",
                  height: "70%",
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                }}
              />
              <LinearGradient
                colors={[Colors.blue1, "aqua"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  borderRadius: 10,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  paddingVertical: 5,
                  height: "30%",
                  width: "100%",
                }}
              >
                <Texti>Title: {item.course}</Texti>
                <Texti>status: live</Texti>
                <Texti>created march 30th, 2022</Texti>
                <Texti size={16}>{item.lessons} views </Texti>
              </LinearGradient>
            </View>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
};

const NewGam1 = ({ navigation }) => (
  <TouchableOpacity
    style={styles.Gam}
    onPress={() => {
      navigation.navigate("ArticleDetail", { page: 1 });
    }}
  >
    <McImage
      style={{
        width: 60,
        height: 60,
        margin: 5,
        borderRadius: 20,
        padding: 10,
      }}
      source={require("../../../assets/images/book.svg")}
    />
    <Text
      style={{
        margin: 14,
      }}
    >
      Publish Book
    </Text>
  </TouchableOpacity>
);

const NewGam2 = ({ navigation }) => (
  <TouchableOpacity
    style={styles.Gam}
    onPress={() => {
      navigation.navigate("ArticleDetail", { page: 2 });
    }}
  >
    <McImage
      style={{
        width: 60,
        height: 60,
        margin: 5,
        borderRadius: 20,
        padding: 10,
      }}
      source={require("../../../assets/images/video.svg")}
    />
    <Text
      style={{
        margin: 14,
      }}
    >
      Create Course
    </Text>
  </TouchableOpacity>
);

const NewGam3 = ({ navigation }) => (
  <TouchableOpacity
    style={styles.Gam}
    onPress={() => {
      navigation.navigate("ArticleDetail", { page: 3 });
    }}
  >
    <McImage
      style={{
        width: 60,
        height: 60,
        margin: 5,
      }}
      source={require("../../../assets/images/basket.png")}
    />
    <Text
      style={{
        margin: 14,
      }}
    >
      Create Advert
    </Text>
  </TouchableOpacity>
);

const NewGam4 = ({ navigation }) => (
  <TouchableOpacity
    style={styles.Gam}
    onPress={() => {
      navigation.navigate("ArticleDetail", { page: 4 });
    }}
  >
    <McImage
      style={{
        width: 60,
        height: 60,
        margin: 5,
      }}
      source={require("../../../assets/images/stats.png")}
    />
    <Text
      style={{
        margin: 14,
      }}
    >
      Analyse Metrics
    </Text>
  </TouchableOpacity>
);

const Batch = styled.Text`
  background-color: lightskyblue;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 1px;
  padding: 2px;
  font-weight: 800;
  color: floralwhite;
  text-align: center;
  border-radius: 30px;
`;

const Texti = styled.Text`
  color: #fff;
  font-size: ${({ size }) => size}px;
  margin: 0px 10px;
`;

const Header2Section = styled.View`
  height: 18px;
  margin: 16px 12px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const BannerSection = styled.TouchableOpacity`
  width: 98%;
  margin: auto;
`;

const Gam = styled.View`
  justify-content: space-around;
  align-items: center;
  height: 25%;
  width: 24%;
  padding-top: 17px;
  padding-bottom: 17px;
  margin: auto;
  flex-direction: row;
`;
const styles = StyleSheet.create({
  posts: {
    height: "48%",
    width: "100%",
    marginBottom: 10,
    alignItems: "stretch",
    justifyContent: "space-evenly",
  },
  course: {
    width: "100%",
    marginBottom: 10,
  },
  itemcs: {
    marginHorizontal: 20,
    marginBottom: 16,
    marginTop: 5,
    minHeight: 240,
    minWidth: 380,
    maxWidth: 400,
    borderRadius: 12,
    backgroundColor: "#736f84",
    alignItems: "flex-start",
    shadowColor: "grey",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 8,
    shadowOpacity: 0.6,
    elevation: 8,
  },
  itembk: {
    marginBottom: 10,
    marginTop: 5,
    minHeight: 190,
    minWidth: 150,
    maxWidth: 160,
    maxHeight: 200,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 5,
    shadowOpacity: 0.4,
    elevation: 5,
  },
  itemad: {
    marginHorizontal: 20,
    marginBottom: 16,
    marginTop: 5,
    minHeight: 240,
    minWidth: 380,
    maxWidth: 400,
    borderRadius: 12,
    backgroundColor: "#736f84",
    alignItems: "flex-start",
    shadowColor: "grey",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 8,
    shadowOpacity: 0.6,
    elevation: 8,
  },
  Gam: {
    borderRadius: 20,
    justifyContent: "space-around",
    alignItems: "center",
    maxWidth: 190,
    minWidth: 142,
    minHeight: 80,
    shadowColor: "grey",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    elevation: 5,
    marginBottom: 5,
  },
});
