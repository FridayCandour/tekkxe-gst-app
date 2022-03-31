import React from "react";
import { StyleSheet, StatusBar, View, ScrollView, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "Constants";
import { McText, McTabIcon } from "Components";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

const Discover = ({ navigation }) => (
  <Container>
    <ScrollView>
      <StatusBar hidden={false} />
      {/* gamification */}
      <Gamification navigation={navigation} />

      {/* scores and courses  section*/}

      <Header2Section>
        <McText color="grey" size={20}>
          Courses attention rates
        </McText>
      </Header2Section>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          marginTop: 2,
          padding: 5,
          marginBottom: 80,
        }}
      >
        <View
          style={{
            width: "40%",
            height: "200%",
            maxHeight: 160,
            alignItems: "flex-start",
            justifyContent: "space-evenly",
            flexDirection: "column",
            backgroundColor: Colors.white,
            padding: 8,
          }}
        >
          <Text style={styles.text}>Phylosophy & logic:</Text>
          <Text style={styles.text}>English:</Text>
          <Text style={styles.text}>GST:</Text>
          <Text style={styles.text}>Dictionary:</Text>
        </View>

        {/* scores for each courses */}
        <View
          style={{
            width: "60%",
            height: "180%",
            minHeight: 70,
            alignItems: "flex-start",
            justifyContent: "space-evenly",
            flexDirection: "column",
            backgroundColor: Colors.white,
            padding: 2,
          }}
        >
          <ScoreRange score={45}>
            <Text
              style={{
                marginRight: 20,
                color: "whitesmoke",
                fontWeight: 900,
                padding: 2,
              }}
            >
              45%
            </Text>
          </ScoreRange>
          <ScoreRange score={65}>
            <Text
              style={{
                marginRight: 20,
                color: "whitesmoke",
                fontWeight: 900,
                padding: 2,
              }}
            >
              65%
            </Text>
          </ScoreRange>
          <ScoreRange score={90}>
            <Text
              style={{
                marginRight: 20,
                color: "whitesmoke",
                fontWeight: 900,
                padding: 2,
              }}
            >
              90%
            </Text>
          </ScoreRange>
          <ScoreRange score={78}>
            <Text
              style={{
                marginRight: 20,
                color: "whitesmoke",
                fontWeight: 900,
                padding: 2,
              }}
            >
              78%
            </Text>
          </ScoreRange>
        </View>
      </View>
      {/* end of scores */}

      {/* Other button section */}
      <Header2Section
        style={{
          marginTop: -8,
          marginBottom: 8,
        }}
      >
        <McText color="grey" size={20}>
          Find out more
        </McText>
      </Header2Section>
      <View
        style={{
          width: "100%",
          height: "40%",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <CoolBtn name="book" text="Buy Premiun e-Books" />
        <CoolBtn name="chatbubbles" text="Request For Assistance" />
        <CoolBtn name="logo-whatsapp" text="Join Business Unihub Group" />
        <CoolBtn name="call" text="See Contact Info" />
        <CoolBtn name="share-social" text="Invite friends" />
      </View>
    </ScrollView>
  </Container>
);

const Gamification = ({ navigation }) => (
  <View
    style={{
      width: "100%",
      height: "30%",
      maxHeight: 320,
      minHeight: 300,
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
        Business Unihub
      </Text>
    </View>

    {/* real gami */}
    <View
      style={{
        width: "100%",
        height: "20%",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 30,
        // marginBottom: -100,
      }}
    >
      <Gam score={20}>
        <Text
          style={{
            color: "whitesmoke",
            fontWeight: 800,
            fontSize: 18,
            margin: 3,
          }}
        >
          friday candour
        </Text>
        <Batch>highest quiz score 89%</Batch>
      </Gam>
    </View>

    <View
      style={{
        borderRadius: 8,
        height: "100%",
        maxHeight: 200,
        minHeight: 180,
        width: "90%",
        margin: "auto",
        marginBottom: -80,
        flexWrap: "wrap",
        backgroundColor: Colors.white,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        shadowColor: "grey",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowRadius: 5,
        shadowOpacity: 0.7,
        elevation: 5,
      }}
    >
      <Bar name="des.svg" symbol="hours" value={2} text="Best Reading Time" />
      <Bar name="check.svg" symbol="%" value={89} text="Quiz Score Average" />
      <Bar name="shoot.svg" symbol="mins" value={30} text="Best Quiz Time" />
      <Bar name="book.svg" symbol="books" value={10} text="Books Read" />
    </View>
  </View>
);

const Bar = ({ text, value, symbol }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        minWidth: 160,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <McImage
        style={{
          width: 50,
          height: 50,
          borderRadius: "50%",
          marginRight: 5,
        }}
      />

      <Gam score={20}>
        <Text
          style={{
            fontWeight: 800,
            fontSize: 14,
            color: "whitesmoke",
          }}
        >
          {value}
          {symbol}
        </Text>
        <McText color="whitesmoke" size={12}>
          {text}
        </McText>
      </Gam>
    </View>
  );
};

const CoolBtn = ({ name, text }) => {
  return (
    <LinearGradient
      colors={[Colors.blue, "lightskyblue"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{
        maxHeight: 60,
        marginVertical: 6,
        width: "86%",
        height: "15%",
        maxHeight: 100,
        borderRadius: 14,
        padding: 5,
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons
          style={{
            width: "10%",
            paddingHorizontal: "5%",
            margin: "auto",
          }}
          color="whitesmoke"
          name={name}
          size={24}
        />
        <McText
          size={16}
          color={Colors.white}
          regular
          style={{
            width: "80%",
            padding: 10,
            borderRadius: 8,
            fontFamily: "Inter-SemiBold",
          }}
        >
          {text}
        </McText>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  height: 100vh;
  width: 100vw;
  background: ${Colors.white};
`;

const Header2Section = styled.View`
  height: 18px;
  margin: 85px 0px 0px 12px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Gam = styled.View`
  border-radius: 19px;
  border-color: aqua;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 70%;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: auto;
  border-radius: 12px;
  flex-direction: column;
`;

const Batch = styled.Text`
  background-color: lightskyblue;
  justify-content: center;
  align-items: center;
  margin: 4px;
  width: 86%;
  padding: 4px;
  font-weight: 800;
  color: floralwhite;
  text-align: center;
  border-radius: 8px;
`;

const Texti = styled.Text`
  color: #fff;
  font-size: ${({ size }) => size}px;
  margin: 0px 10px;
`;
const ScoreRange = styled.View`
  justify-content: center;
  border-radius: 12px;
  align-items: center;
  background-color: skyblue;
  margin: auto 10px;
  width: ${(props) => props.score - 5}%;
`;
const McImage = styled.Image`
  padding: 2px;
`;
const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: "#181829",
    borderRadius: 6,
    fontSize: 14,
    fontFamily: "Inter-SemiBold",
  },
});
export default Discover;
