// TODO
//
//quiz timer
//timer using moment.js
// that looks elegant
//
// plus i still have to work on the design again
// like colors shapes and placements

import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { McImage } from "Components";
import {
  View,
  ScrollView,
  Animated,
  StyleSheet,
  BackHandler,
  Alert,
} from "react-native";
import { OptionsBox } from "Components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Fonts } from "Constants";
import moment from "moment";
import { Questions } from "Mock";

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

const quizScreen = ({ navigation, route }) => {
  // to manange navigation on back button press
  const backAction = () => {
    Alert.alert("You have not submitted", "Are you sure you want to go back?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel",
      },
      { text: "YES", onPress: () => BackHandler.exitApp() },
    ]);
    return false;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  //quiz state management stuff, it's cool right.

  const [selectedQuiz, setSelectedQuiz] = useState(null);
  useEffect(() => {
    let { selectedQuiz } = route.params;
    setSelectedQuiz(selectedQuiz);
  }, []);

  const [selectedOption, setSelectedOption] = useState(
    Array(Questions.question.length).fill(
      Array(Questions.question[0].options.length).fill("transparent")
    )
  );
  const [answers, addNewAnswer] = useState(
    Array(Questions.question.length).fill(0)
  );
  const [screenIndex, setScreenIndex] = useState(1);
  const [showScore, setShowScore] = useState("0%");
  const [question, setQuestion] = useState(0);
  const [index, setIndex] = useState("");
  const [hideEndBtn, setHideEndBtn] = useState("none");
  const [hideN, setHideN] = useState("flex");
  const [hideP, setHideP] = useState("none");

  // the end quiz screen
  if (screenIndex === 3) {
    return (
      <Container>
        <ScrollView>
          <QuizWrapper>
            <LinearGradient
              colors={["#08b9fc", "whitesmoke"]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={{ flex: 1 }}
            >
              {/* <Header course={Questions.type} /> */}
              {/* Head of display */}

              <View
                style={{
                  height: "30%",
                  width: "80%",
                  margin: "auto",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "whitesmoke",
                    fontWeight: 700,
                    fontSize: 20,
                    margin: "auto",
                  }}
                >
                  Well Done Friday, you scored
                </Text>

                <Text
                  style={{
                    color: "whitesmoke",
                    fontWeight: 900,
                    fontSize: 29,
                  }}
                >
                  {showScore}
                </Text>
                <McImage
                  style={{
                    width: 110,
                    height: 110,
                  }}
                  source={require("/home/uiedbook/projects/dev/tekkxe-gst-app/assets/des.svg")}
                ></McImage>
              </View>

              <View style={styles.navigation}>
                <TouchableOpacity
                  onPress={() => {
                    // do some thing here
                    navigation.navigate("ClassRoom");
                  }}
                  style={styles.btn}
                >
                  <Text>Classroom</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    // do some thing here
                    // navigation.navigate("ClassRoom");
                    setScreenIndex(4);
                  }}
                  style={styles.btn}
                >
                  <Text>Get the solutions</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </QuizWrapper>
        </ScrollView>
      </Container>
    );
  } else {
    // the quiz screen
    if (screenIndex === 2) {
      return (
        <Container>
          <ScrollView>
            <QuizWrapper>
              <LinearGradient
                colors={["gray", "witesmoke"]}
                start={{ x: 1, y: 0.6 }}
                end={{ x: 1, y: 1 }}
                style={{ flex: 1 }}
              >
                <Header course={Questions.type} />
                {/* Head of display */}
                <View style={styles.headOfDisplay}>
                  <Text
                    style={{
                      color: "#3490f3",
                      fontWeight: 600,
                      fontSize: 16,
                      margin: 6,
                    }}
                  >
                    Question {question + 1} of {Questions.question.length}
                  </Text>
                  <Text
                    style={{
                      color: "#3490f3",
                      fontWeight: 600,
                      fontSize: 16,
                      margin: 6,
                    }}
                  >
                    Time: {Questions.duration} hour
                  </Text>
                </View>
                {/* questions box */}
                <QuestionSection
                  size={15}
                  angle={12}
                  question={Questions.question[question].question}
                />

                {/* options box */}
                <OptionsBox
                  value={Questions.question[question].options}
                  correct={Questions.question[question].correct}
                  ocheStrator={(score, options, choice) => {
                    let opt = selectedOption;
                    opt[question] = options;
                    let ans = answers;
                    ans[question] = score;
                    setIndex(choice);
                    // updating global quiz state on press
                    addNewAnswer(ans);
                    setSelectedOption(opt);
                  }}
                  shape={selectedOption[question]}
                  index={question}
                />

                <View style={styles.navigation}>
                  <TouchableOpacity
                    onPress={() => {
                      if (question > 0) {
                        setQuestion(question - 1);
                        setHideN("flex");
                      } else {
                        setHideP("none");
                      }

                      if (question === 1) {
                        setHideP("none");
                      }
                    }}
                    style={[
                      styles.btn,
                      {
                        display: hideP,
                      },
                    ]}
                  >
                    <Text>Previous</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      if (question < Questions.question.length - 1) {
                        setQuestion(question + 1);
                        setHideP("flex");
                      } else {
                        setHideN("none");
                      }

                      if (question === Questions.question.length - 2) {
                        setHideN("none");
                        setHideEndBtn("flex");
                      }
                    }}
                    style={[
                      styles.btn,
                      {
                        display: hideN,
                      },
                    ]}
                  >
                    <Text>Next</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.navigation}>
                  <TouchableOpacity
                    onPress={() => {
                      let ans = 0;
                      for (let i = 0; i < answers.length; i++) {
                        ans += answers[i];
                      }
                      ans = `${(ans / Questions.question.length) * 100}%`;
                      if (ans !== "100%" && ans !== "0%") {
                        ans = ans.split(".")[0] + "%";
                      }
                      setShowScore(ans);
                      // some thing else bro
                      setScreenIndex(3);
                    }}
                    style={[
                      styles.btn,
                      {
                        marginTop: 30,
                        backgroundColor: "#52c41a",
                        display: hideEndBtn,
                      },
                    ]}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        color: "whitesmoke",
                      }}
                    >
                      Submit anwsers
                    </Text>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </QuizWrapper>
          </ScrollView>
        </Container>
      );
    } else {
      // the start quiz screen
      if (screenIndex === 1) {
        return (
          <Container>
            <QuizWrapper>
              <LinearGradient
                colors={["#08b9fc", "whitesmoke"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={{ flex: 1 }}
              >
                {/* <Header course={Questions.type} /> */}
                {/* Head of display */}

                <View
                  style={{
                    height: "30%",
                    width: "80%",
                    margin: "auto",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >

                  <Text
                    style={{
                      color: "whitesmoke",
                      fontWeight: 900,
                      fontSize: 29,
                    }}
                  >
                    {Questions.type}
                  </Text>
                  <McImage
                    style={{
                      width: 110,
                      height: 110,
                    }}
                    source={require("/home/uiedbook/projects/dev/tekkxe-gst-app/assets/des.svg")}
                  ></McImage>
                </View>

                <View style={[styles.navigation, {
                  flexDirection: "column"
                }]}>
                  <TouchableOpacity
                    onPress={() => {
                      setScreenIndex(2);
                      // do some thing here
                    }}
                    style={styles.btn}
                  >
                    <Text>Start Quiz</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      // do some thing here
                      navigation.navigate("ClassRoom");
                    }}
                    style={styles.btn}
                  >
                    <Text>Go back</Text>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </QuizWrapper>
          </Container>
        );
      } else {
        if (screenIndex === 4) {
          return (
            <Container>
              <ScrollView>
                <QuizWrapper>
                  <LinearGradient
                    colors={["#08b9fc", "whitesmoke"]}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={{ flex: 1 }}
                  >
                    {/* <Header course={Questions.type} /> */}
                    {/* Head of display */}

                    <View
                      style={{
                        height: "30%",
                        width: "80%",
                        margin: "auto",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: "whitesmoke",
                          fontWeight: 700,
                          fontSize: 20,
                          margin: "auto",
                        }}
                      >
                    here are the anwsers to the quiz you just tooK
                      </Text>
                    </View>

                    <View style={styles.navigation}>
                      <TouchableOpacity
                        onPress={() => {
                          // do some thing here
                          // navigation.navigate("ClassRoom");
                          setScreenIndex(3);
                        }}
                        style={styles.btn}
                      >
                        <Text>Go back</Text>
                      </TouchableOpacity>
                    </View>
                  </LinearGradient>
                </QuizWrapper>
              </ScrollView>
            </Container>
          );
        }
      }
    }
  }
};

const QuestionSection = ({ question }) => {
  return (
    <View style={styles.question}>
      <Text
        style={{
          color: "#222222",
          fontWeight: 500,
          fontSize: 14,
          width: "100%",
        }}
      >
        {question}
      </Text>
    </View>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #dedfe9;
`;

const QuizWrapper = styled.View`
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;

const Text = styled.Text`
  font-size: ${({ size }) => size}px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${Fonts.type.medium};
  margin: auto 10px;
`;

const styles = StyleSheet.create({
  topbar: {
    height: "56%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  lowbar: {
    height: "41%",
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
  headOfDisplay: {
    width: "100%",
    height: "6%",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  btn: {
    minWidth: 150,
    maxHeight: 100,
    padding: 12,
    borderRadius: 12,
    color: "black",
    backgroundColor: "#08b9fc",
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
  question: {
    margin: 15,
    justifyContent: "center",
    alignItems: "flex-start",
    textWrap: "wrap",
  },
});

export default quizScreen;
