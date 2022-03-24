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

const Discover = ({ navigation }) => (
  <Container>
    <StatusBar hidden={false} />
    <ScrollView>
      {/* gamification */}
      <Gamification navigation={navigation} />

      {/* Books Section */}
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
          Learn all at one place
        </McText>
      </Header2Section>

      {/* courses */}
      <CoursesContainer courses={Courses} navigation={navigation} />

      {/* premiun ads banner */}
      <Barner />
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
      {/* market place */}
      <MarketContainer
        navigation={navigation}
        item={[dummyData.News[0], dummyData.News[1], dummyData.News[2]]}
      />
    </ScrollView>
  </Container>
);

// backgroundColor: "#3490f3",
const Gamification = ({ navigation }) => (
  <View
    style={{
      width: "100%",
      height: "30%",
      maxHeight: 140,
      minHeight: 130,
      backgroundColor: "blue",
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
          size={22}
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
        Tekkxe English
      </Text>
    </View>

    {/* real gami */}
    <View
      style={{
        width: "100%",
        height: "50%",
        flexDirection: "row",
      }}
    >
      <Gam score={20}>
        <Text
          style={{
            color: "whitesmoke",
            fontWeight: 800,
            fontSize: 13,
            margin: 6,
          }}
        >
          HQS
        </Text>
        <Batch>300</Batch>
      </Gam>
      <Gam score={20}>
        <Text
          style={{
            color: "whitesmoke",
            fontWeight: 800,
            fontSize: 13,
            margin: 6,
          }}
        >
          English
        </Text>
        <Batch>780</Batch>
      </Gam>
      <Gam score={20}>
        <Text
          style={{
            color: "whitesmoke",
            fontWeight: 800,
            fontSize: 13,
            margin: 6,
          }}
        >
          classes
        </Text>
        <Batch>100</Batch>
      </Gam>
    </View>
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
          width: "70%",
          margin: 20,
          justifyContent: "space-between",
        }}
      >
        <McText
          size={18}
          style={{
            fontFamily: "Inter-SemiBold",
          }}
        >
          Get Tekkxe English premium
        </McText>
      </View>
      <McImage
        style={{
          width: 60,
          height: 60,
          margin: 5,
        }}
        source={require("../../../assets/images/badge.svg")}
      />
    </LinearGradient>
  </BannerSection>
);

const MarketContainer = ({ navigation, item }) => {
  return (
    <View style={styles.posts}>
      <FlatList
        keyExtractor={(item) => "_news" + item.id}
        vertical
        showsHorizontalScrollIndicator={false}
        data={item}
        renderItem={({ item, index }) => (
          <BarItem navigation={navigation} item={item} index={index} />
        )}
      ></FlatList>
    </View>
  );
};

const BarItem = ({ item, index, navigation }) => (
  <TouchableOpacity
    onPress={() => {
      // navigation.navigate("ClassRoom", { selectedArticle: item });
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
      <Texti size={12}> English 50% discount </Texti>
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
);

const CoursesContainer = ({ courses, navigation }) => {
  return (
    <View style={styles.course}>
      <FlatList
        keyExtractor={(item) => "_course" + item.id}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{}}
        data={courses}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ClassRoom", { selectedArticle: item });
            }}
          >
            <View style={styles.item}>
              <Image
                source={item.thumbnail}
                style={{
                  width: "100%",
                  height: "80%",
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
                  justifyContent: "space-between",
                  width: "100%",
                  flexDirection: "row",
                }}
              >
                <View style={{ height: "20%" }}>
                  <Texti>{item.course}</Texti>
                  <Texti size={12}>{item.lessons} lessons </Texti>
                </View>
                <McTabIcon icon={Images.More} color="whitesmoke" size={20} />
              </LinearGradient>
            </View>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background: whitesmoke;
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
  background-color: #3490f3;
  justify-content: space-around;
  align-items: center;
  height: 25%;
  width: 30%;
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
  width: 50%;
  padding: 4px;
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
    alignItems: "stretch",
    justifyContent: "space-evenly",
  },
  item: {
    marginRight: 16,
    marginLeft: 5,
    minHeight: 220,
    margin: "auto",
    minWidth: 180,
    borderRadius: 16,
    backgroundColor: "#736f84",
    alignItems: "flex-start",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 8,
    shadowOpacity: 0.7,
    elevation: 12,
  },
});
export default Discover;
