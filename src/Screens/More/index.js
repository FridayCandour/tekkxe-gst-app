import React from "react";
import { StyleSheet, StatusBar, View, ScrollView, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors, Fonts, Images } from "Constants";
import { McText } from "Components";
import styled from "styled-components/native";
import Timer from "../OtherScreens/Timer";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
const Discover = ({ navigation }) => (
  <Container>
    <ScrollView contentContainerStyle={{}} style={{}}>
      <StatusBar hidden={true} />

      {/* Header Section */}
      <View
        style={{
          height: "100%",
          width: "100%",
          maxHeight: 200,
        }}
      >
        <LinearGradient
          colors={[Colors.blue, "aqua"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            width: "100%",
            alignItems: "stretch",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {/* dashboard section */}

          <View
            style={{
              width: "100%",
              height: "100%",
              paddingHorizontal: "10%",
              flexDirection: "column",
              backgroundColor: "transparent",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <McImage
              source={require("../../../assets/user.jpg")}
              style={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                marginTop: 90,
                marginLeft: 5,
                marginBottom: 10,
              }}
            />
            <McText
              size={16}
              color="#181829"
              regular
              style={{
                backgroundColor: Colors.white,
                paddingVertical: 10,
                paddingHorizontal: "30%",
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Inter-SemiBold",
              }}
            >
              Friday Candour
            </McText>
          </View>

          <View
            style={{
              borderRadius: 8,
              width: "90%",
              height: "50%",
              flexWrap: "wrap",
              backgroundColor: Colors.white,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "stretch",
              margin: "auto",
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
            <Bar symbol="hours" value={2} text="Best Reading Time" />
            <Bar symbol="%" value={89} text="Quiz Score Average" />
            <Bar symbol="mins" value={30} text="Best Quiz Time" />
            <Bar symbol="books" value={10} text="Books Read" />
          </View>
        </LinearGradient>
      </View>

      {/* scores and courses  section*/}
      <Header2Section>
        <McText color="grey" h3 size={16}>
          Courses and Quiz scores
        </McText>
        <Timer />
      </Header2Section>

      <View
        style={{
          width: "100%",
          borderRadius: 12,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          marginBottom: 86,
          marginTop: 40,
          padding: 10,
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
          <McText
            size={14}
            color="#181829"
            align="center"
            style={{
              borderRadius: 6,
              fontFamily: "Inter-SemiBold",
            }}
          >
            Phylosophy & logic:
          </McText>

          <McText
            size={14}
            color="#181829"
            align="center"
            style={{
              borderRadius: 6,
              fontFamily: "Inter-SemiBold",
            }}
          >
            English:
          </McText>

          <McText
            size={14}
            color="#181829"
            align="center"
            style={{
              marginRight: "5%",
              borderRadius: 6,
              fontFamily: "Inter-SemiBold",
            }}
          >
            GST:
          </McText>

          <McText
            size={14}
            color="#181829"
            align="center"
            style={{
              marginRight: "5%",
              borderRadius: 6,
              fontFamily: "Inter-SemiBold",
            }}
          >
            Dictionary:
          </McText>
        </View>

        {/* scores for each courses */}
        <View
          style={{
            width: "60%",
            height: "200%",
            maxHeight: 160,
            alignItems: "flex-start",
            justifyContent: "space-evenly",
            flexDirection: "column",
            backgroundColor: Colors.white,
            padding: 2,
          }}
        >
          <ScoreRange score={45}>
            <Text style={{ marginRight: 20 }}>45%</Text>
          </ScoreRange>
          <ScoreRange score={65}>
            <Text style={{ marginRight: 20 }}>65%</Text>
          </ScoreRange>
          <ScoreRange score={90}>
            <Text style={{ marginRight: 20 }}>90%</Text>
          </ScoreRange>
          <ScoreRange score={78}>
            <Text style={{ marginRight: 20 }}>78%</Text>
          </ScoreRange>
        </View>
      </View>
      {/* end of scores */}

      {/* Other button section */}
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
        {/* ios-phone-portrait */}
        <CoolBtn name="logo-whatsapp" text="Join Tekkxe English Group" />
        <CoolBtn name="call" text="See Contact Info" />
        <CoolBtn name="share-social" text="Invite friends" />
      </View>
    </ScrollView>
  </Container>
);


const Bar = ({ text, value, symbol }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 2,
        maxWidth: 160,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <McImage
        source={require("../../../assets/user.jpg")}
        style={{
          width: 50,
          height: 50,
          borderRadius: "50%",
          margin: 5,
        }}
      />
      <View
        style={{
          alignItems: "center",
          // justifyContent: "",
          fontFamily: "Inter-SemiBold",
        }}
      >
        <McText color="#181829" regular size={16}>
          {value}
          {symbol}
        </McText>
        <McText color="#181829" regular size={10}>
          {text}
        </McText>
      </View>
    </View>
  );
};

const CoolBtn = ({name, icon, text }) => {
  return (
    <LinearGradient
      colors={[Colors.blue, "aqua"]}
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
          alignItems: "center"

        }}
      >
        <Ionicons
          style={{
            width: "10%",
            paddingHorizontal: "5%",
            margin: "auto"
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

const ScoreRange = styled.View`
  justify-content: center;
  border-radius: 12px;
  align-items: center;
  background-color: #4cd964;
  margin: auto 10px;
  width: ${(props) => props.score - 5}%;
`;

const Header1Section = styled.View`
  margin: 20px 10px 0px 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Header2Section = styled.View`
  margin: 275px 10px 0px 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const McImage = styled.Image`
  border: 3px papayawhip solid;
`;

export default Discover;
