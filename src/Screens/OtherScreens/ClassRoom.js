import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { McText, McImage, McTabIcon } from "Components";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  ScrollView,
  Animated,
  Text,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import { OptionsBox } from "Components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors, Fonts } from "Constants";
import moment from "moment";
// import { Courses } from "Mock";

const ClassRoom = ({ navigation, route }) => {
  // get the selected courses from the route object
  const [item, setItem] = useState(null);
  useEffect(() => {
    let { selectedArticle } = route.params;
    setItem(selectedArticle);
  }, []);

  return (
    <Container>
      <ScrollView>
        <QuizWrapper navigation={navigation} course={item} />
      </ScrollView>
    </Container>
  );
};

const QuizWrapper = ({ navigation, course }) => {
  return (
    <View
      style={{
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Header course={course?.course} />
      <TwoBarNav />
      <CoursesContainer
        courses={course?.topics}
        navigation={navigation}
      ></CoursesContainer>
    </View>
  );
};

const Header = ({ course }) => {
  return (
    <View style={styles.Header}>
      <View style={styles.topbar}>
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
        <McImage
          style={{
            width: 30,
            height: 30,
            margin: 10,
          }}
          source={require("/home/uiedbook/projects/dev/tekkxe-gst-app/assets/images/More.png")}
        ></McImage>
      </View>

      <View style={styles.lowbar}>
        <Text
          style={{
            color: "#3490f3",
            fontWeight: 600,
            fontSize: 20,
            margin: 10,
          }}
        >
          {course}
        </Text>
      </View>
    </View>
  );
};

const TwoBarNav = ({ no }) => {
  return (
    <View style={styles.TwoBarNav}>
      <View style={styles.oneNav}>
        <Text
          style={{
            color: "whitesmoke",
            fontWeight: 700,
            fontSize: 24,
          }}
        >
          Sections
        </Text>
      </View>

      <View style={styles.oneNav}>
        <Text
          style={{
            color: "whitesmoke",
            fontWeight: 700,
            fontSize: 24,
          }}
        >
          Books
        </Text>
      </View>
    </View>
  );
};




const CoursesContainer = ({ courses, navigation }) => {
  return (
    <View style={styles.course}>
      <FlatList
        keyExtractor={(item) => "_course" + item.name}
        vertical
        showsHorizontalScrollIndicator={true}
        data={courses}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              width: "50vh",
              minHeight: 160,
              margin: "auto",
              padding: "2%",
              borderRadius: 24,
              backgroundColor: "aqua",
              marginTop: 30,
            }}
            onPress={() => {
              navigation.navigate("quizScreen", { selectedQuestions: item });
            }}
          >
            <LinearGradient
              colors={["#5770ec", "#14a8dd"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ flex: 1, padding: "5%", borderRadius: 24 }}
            >
              <Text
                style={{
                  color: "whitesmoke",
                  fontWeight: 200,
                  fontSize: 16,
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
  background: #fff;
`;

const styles = StyleSheet.create({
  topbar: {
    height: "60%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  lowbar: {
    height: "40%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "whitesmoke",
  },
  Header: {
    width: "100%",
    height: "14%",
    backgroundColor: "#3490f3",
    flexDirection: "column",
    justifyContent: "center",
  },
  TwoBarNav: {
    width: "100%",
    height: "6%",
    backgroundColor: "#04bdf9",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  oneNav: {
    height: "100%",
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  course: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    minWidth: 150,
    maxHeight: 100,
    padding: 12,
    borderRadius: 12,
    color: "black",
    backgroundColor: "#cce5ff",
    fontFamily: Fonts.type.bold,
    margin: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  navigation: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
  },
});

export default ClassRoom;
