import React, { useState } from "react";
import {
  StatusBar,
  View,
  ScrollView,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "Constants";
import styled from "styled-components/native";
const Registration = ({ navigation }) => {

	// a state object to manage the user data input
	const [save, saver] = useState({
    name: "",
    institution: "",
    phone: "",
  	email: ""
  });

  const [load, setLoad] = useState(false);

  return !load ? (
    <Container
      style={{
        width: 100 + "%",
        height: 100 + "%",
      }}
    >
      <ScrollView
        contentContainerStyle={{
          width: 100 + "%",
          height: 100 + "%",
        }}
        style={{}}
      >
        <StatusBar hidden={true} />
        <LinearGradient
          colors={[Colors.blue1, "aqua"]}
          start={{ x: 0, y: 20 }}
          end={{ x: 9, y: 0 }}
          style={{
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
          }}
        >
          <View
            style={{
              width: "100%",
              paddingTop: 140,
            }}
          >
            <Text>Welcome to Tekkxe English</Text>
            <Input
              placeholder="what are your names?"
              saver={saver}
              save={save}
              field="name"
            />

            <Input
              placeholder="institution?"
              saver={saver}
              save={save}
              field="institution"
            />

            <Input
              placeholder="phone?"
              saver={saver}
              save={save}
              field="phone"
            />


            <Input
              placeholder="email?"
              saver={saver}
              save={save}
              field="email"
            />



            <Submit
              style={{
                shadowColor: "black",
                elevation: 10
              }}
              onPress={() => {
                let validated = false;
                for (const data in save) {
                  if (
                    save.hasOwnProperty.call(save, data) &&
                    save[data] !== ""
                  ) {
                    validated = true;
					  break;
                  } else {
                    validated = false;
                  }
                }
                if (validated) {
                  console.log("saving to database now");
                  setLoad(true);
                  console.log("saved");
                }
              }}
            >
              <Text
                style={{
                  color: "#656669",
                  marginBottom: 0,
                }}
              >
                Register
              </Text>
            </Submit>
          </View>
        </LinearGradient>
      </ScrollView>
    </Container>
  ) : (
    <View
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Loading...</Text>
      <ActivityIndicator size="small"></ActivityIndicator>
    </View>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background: ${(props) => props.theme.colors.background};
`;
const Submit = styled.TouchableOpacity`
  max-width: 400px;
  min-width: 200px;
  max-height: 50px;
  border-radius: 14px;
  background-color: #dde1e7;
  margin: auto;
`;
const Text = styled.Text`
  font-size: 22px;
  color: #dde1e7;
  margin: auto;
  font-weight: 900;
  margin-bottom: 30px;
`;

const Input = ({ placeholder, saver, save, field }) => {
  return (
    <TextInput
      onChange={(e) => {
        let newSave = save;
        newSave[field] = e.nativeEvent.text;
        saver(newSave);
      }}
      style={{
        minHeight: 50,
        minWidth: 260,
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 4,
        borderLeftWidth: 2,
        margin: "auto",
        backgroundColor: "#dde1e7",
        borderColor: "whitesmoke",
        marginBottom: 40,
        borderRadius: 12,
        color: "#656669",
        fontSize: 20,
        textAlign: "left",
        paddingLeft: 20,
      }}
      placeholder={placeholder}
      placeholderTextColor="#656669"
    />
  );
};
export default Registration;
