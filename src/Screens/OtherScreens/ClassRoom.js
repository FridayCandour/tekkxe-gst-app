import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { McImage, McTabIcon } from "Components";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  ScrollView,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ImageBackground,
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
  const [view, setView] = useState(0);

  return view === 0 ? (
    <Container>
      <ScrollView style={{ width: "100%", height: "100%" }}>
        <Header
          navigation={navigation}
          course={item?.course}
          view={view}
          setView={setView}
        />
        <CoursesContainer courses={item?.topics} navigation={navigation} />
      </ScrollView>
    </Container>
  ) : (
    <Container>
      <Header
        navigation={navigation}
        course={item?.course}
        view={view}
        setView={setView}
      />
      <ViewQuiz
        navigation={navigation}
        course={item?.course}
        item={item?.topics}
      />
    </Container>
  );
};
const ViewQuiz = ({ navigation, course, item }) => (
  <View
    style={{
      height: "100%",
      backgroundColor: "skyblue",
    }}
  >
    <ImageBackground
      source={require("../../../assets/images/smile.webp")}
      style={{
        paddingTop: 120,
        paddingLeft: 30,
        height: "74%",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <Text
        style={{
          color: "#423d3d",
          fontWeight: 700,
          fontSize: 20,
        }}
      >
        Quiz: {course}
      </Text>

      <Text
        style={{
          color: "#423d3d",
          fontWeight: 700,
          fontSize: 20,
        }}
      >
        Number of questions : 50
      </Text>
      <Text
        style={{
          color: "#423d3d",
          fontWeight: 700,
          fontSize: 20,
        }}
      >
        pass mark : 50%
      </Text>

      <Text
        style={{
          color: "#423d3d",
          fontWeight: 700,
          fontSize: 20,
        }}
      >
        Duration: 1 hour
      </Text>
      <McImage
        style={{
          width: 120,
          height: 120,
          marginTop: 10,
          marginHorizontal: "auto",
        }}
        source={require("../../../assets/des.svg")}
      ></McImage>
    </ImageBackground>

    <View style={styles.navigation}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("quizScreen", {
            selectedQuestions: item,
          });
        }}
        style={styles.btn}
      >
        <Text>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          // do some thing here
          navigation.navigate("More");
        }}
        style={styles.btn}
      >
        <Text>See Progress</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const Header = ({ navigation, course, view, setView }) => {
  return (
    <View style={styles.topbar}>
      <View
        style={{
          width: "100%",
          height: "40%",
          maxHeight: 36,
          flexDirection: "row",
          borderBottomEndRadius: 16,
          borderBottomStartRadius: 16,
          paddingBottom: 20,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            marginLeft: 15,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <McTabIcon
            icon={require("../../../assets/images/Back.png")}
            color="white"
            size={22}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: "whitesmoke",
            fontWeight: 600,
            fontSize: 20,
            margin: "auto",
          }}
        >
          Tekkxe English course
        </Text>
      </View>

      <View style={styles.lowbar}>
        <Text
          style={{
            color: "#3490f3",
            fontWeight: 600,
            fontSize: 20,
            margin: 5,
          }}
        >
          {course}
        </Text>
      </View>
      <TwoBarNav navigation={navigation} view={view} setView={setView} />
    </View>
  );
};

const TwoBarNav = ({ view, setView }) => {
  return (
    <View
      style={{
        width: "100%",
        maxHeight: 48,
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
          Read Now
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
          Take Quiz
        </Text>
        <Batch style={{ display: view === 0 ? "flex" : "none" }}> view</Batch>
      </Gam>
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
  background-color: #3490f3;
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
    backgroundColor: "blue", //"#3490f3",
    flexDirection: "column",
    justifyContent: "center",
  },
  navigation: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
  },
  lowbar: {
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
