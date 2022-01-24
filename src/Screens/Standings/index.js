import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import {
  View,
  ScrollView,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Fonts, Images } from "Constants";
import { dummyData } from "Mock";
import { McTabIcon } from "../../Components";
const tags = ["GST", "Poetry", "News", "scholarship", "Phonetics"];

const Standings = ({ navigation }) => {
  return (
    <Container>
      <ScrollView>
        <Header name="Friday" navigation={navigation} />
        <Search />
        <Tags tags={tags} />
        <CourseTitleBar size={16} course="Latest Tekkxe English Posts" />
        <PostContainer navigation={navigation}></PostContainer>
      </ScrollView>
    </Container>
  );
};

const Search = () => {
  return (
    <TouchableOpacity
      style={{
        height: 12,
        marginBottom: 20,
        marginTop: 10,
        backgroundColor: "#dde1e7",
        width: "90%",
        height: "80%",
        minHeight: 40,
        minWidth: 100,
        borderRadius: 50,
        margin: "auto",
        borderBottomWidth: 2,
        flexDirection: "row",
        borderBottomColor: "grey",
      }}
    >
      <TextInput
        style={{
          borderColor: "whitesmoke",
          color: "#656669",
          fontSize: 16,
          width: "85%",
          textAlign: "left",
          paddingLeft: 20,
        }}
        placeholder="search post from tekkxe..."
        placeholderTextColor="#656669"
      ></TextInput>
      <McTabIcon icon={Images.Search} color="#656669" size={34} />
    </TouchableOpacity>
  );
};
const Header = ({ name, navigation }) => {
  return (
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
      <Top name={name} navigation={navigation} />
    </View>
  );
};
const Top = ({ name, navigation }) => {
  if (!name) {
    name = "Welcome back!";
  } else {
    name = "Welcome back " + name + "";
  }
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        height: "100%",
        maxHeight: 300,
        margin: "auto",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "transparent",
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          height: "30%",
          width: "60%",
        }}
      >
        <Text
          style={{
            color: "whitesmoke",
            fontWeight: 900,
            fontSize: 17,
            // margin: 10,
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            color: "whitesmoke",
            fontWeight: 700,
            fontSize: 12,
            // margin: 10,
          }}
        >
          Explore our blog contents
        </Text>
      </View>
      <View
        style={{
          width: "30%",
          height: "100%",
          flexDirection: "row",
          paddingVertical: "8%",
          marginRight: 5,
          marginLeft: 5,
        }}
      >
        <McImage
          source={require("../../../assets/user.jpg")}
          style={{
            width: 90,
            height: 90,
            shadowColor: "aqua",
            elevation: 10,
            borderRadius: "50%",
          }}
        />
      <TouchableOpacity
        style={{
          width: "80%",
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
      </View>
    </View>
  );
};
const CourseTitleBar = ({ course, size }) => {
  return (
    <View style={styles.title}>
      <Text
        size={size}
        style={{
          color: "whitesmoke",
          fontWeight: 500,
        }}
      >
        {course}
      </Text>
    </View>
  );
};

const Tags = ({ tags }) => {
  return (
    <View style={styles.course}>
      {/* 1st tag */}
      <TouchableOpacity
        onPress={() => {
          // i will express the tag logic here
        }}
      >
        <View style={styles.item}>
          <Texti color="aqua" size={14}>
            {tags[0]}
          </Texti>
        </View>
      </TouchableOpacity>

      {/* 2st tag */}
      <TouchableOpacity
        onPress={() => {
          // i will express the tag logic here
        }}
      >
        <View style={styles.item}>
          <Texti color="aqua" size={14}>
            {tags[1]}
          </Texti>
        </View>
      </TouchableOpacity>

      {/* 3st tag */}
      <TouchableOpacity
        onPress={() => {
          // i will express the tag logic here
        }}
      >
        <View style={styles.item}>
          <Texti color="aqua" size={14}>
            {tags[2]}
          </Texti>
        </View>
      </TouchableOpacity>

      {/* 4st tag */}
      <TouchableOpacity
        onPress={() => {
          // i will express the tag logic here
        }}
      >
        <View style={styles.item}>
          <Texti color="aqua" size={14}>
            {tags[3]}
          </Texti>
        </View>
      </TouchableOpacity>

      {/* 5st tag */}
      <TouchableOpacity
        onPress={() => {
          // i will express the tag logic here
        }}
      >
        <View style={styles.item}>
          <Texti color="aqua" size={14}>
            {tags[4]}
          </Texti>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const NewsItem = ({ item, navigation, index }) => (
  <TouchableOpacity
    onPress={() => {
      navigation.navigate("ArticleDetail", { selectedQuiz: item });
    }}
    style={{
      width: "96%",
      height: 100,
      marginHorizontal: "auto",
      marginVertical: 10,
      paddingVertical: 20,
      paddingHorizontal: 5,
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      borderRadius: 20,
      shadowRadius: 20,
      shadowOpacity: 0.2,
      elevation: 5,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <Image
      source={item.thumbnail}
      style={{
        width: 105,
        height: 85,
        borderRadius: 20,
        marginRight: 10,
      }}
    />

    <View
      style={{
        width: "90%",
        justifyContent: "center",
      }}
    >
      <Text style={{ width: "72%" }} medium size={14} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={{ width: "72%", color: "grey" }} size={10} numberOfLines={2}>
        {item.detail}
      </Text>
    </View>
  </TouchableOpacity>
);

const PostContainer = ({ navigation }) => {
  return (
    <View style={styles.posts}>
      <FlatList
        keyExtractor={(item) => "_news" + item.id}
        vertical
        showsHorizontalScrollIndicator={false}
        data={dummyData.News}
        renderItem={({ item, index }) => (
          <NewsItem navigation={navigation} item={item} index={index} />
        )}
      ></FlatList>
    </View>
  );
};


const Container = styled.SafeAreaView`
  flex: 1;
  `;
  
const Text = styled.Text`
  font-size: ${({ size }) => size}px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${Fonts.type.medium};
  font-weight: 900;
  line-height: 20px;
`;

const Texti = styled.Text`
  font-size: ${({ size }) => size}px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${Fonts.type.medium};
  font-weight: 400;
  line-height: 14px;
`;
const McImage = styled.Image`
  border: 3px grey solid;
`;

const styles = StyleSheet.create({
  tag: {
    marginTop: 12,
    alignItems: "stretch",
    justifyContent: "center",
  },
  title: {
    marginTop: 20,
    padding: 4,
    borderRadius: 30,
    backgroundColor: "#736f84",
    justifyContent: "center",
    alignItems: "center",
  },
  course: {
    marginTop: 30,
    width: "100%",
    alignItems: "stretch",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    margin: "auto",
    borderRadius: 14,
    padding: 8,
    backgroundColor: "#A0A3BD",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Standings;
