/** TODO:
 *
 * [x] Title section
 * [x] loading animation
 * [x] top bar navigation
 * [x] Bottom button navigation
 */

import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import moment from "moment";
// import MaskedView from '@react-native-community/masked-view';
import { Images, Colors } from "Constants";
import { McText, McImage } from "Components";
import { TouchableOpacity } from "react-native-gesture-handler";

const ArticleDetail = ({ navigation, route }) => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  useEffect(() => {
    let { selectedArticle } = route.params;
    setSelectedArticle(selectedArticle);
  }, []);

  return (
    <Container>
      <ScrollView
        contentContainerStyle={{
          // height: 394,
          marginHorizontal: 16,
        }}
      >
        {/* Header image and buttons */}
        <HeaderImage source={selectedArticle?.thumbnail}></HeaderImage>
        <HeaderButtonSection>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <McImage source={Images.Back} />
          </TouchableOpacity>
          <ShareCircle>
            <McImage source={Images.Share} />
          </ShareCircle>
        </HeaderButtonSection>

        {/* Title section */}
        <TitleSection>
          <McText bold color="black" size={16}>
            {selectedArticle?.title}
          </McText>
        </TitleSection>
        {/* Author section */}
        <AuthorSection>
          <View style={{ flexDirection: "row" }}>
            <McImage
              source={selectedArticle?.author.avatar}
              style={{
                marginRight: 14,
                width: 37,
                height: 37,
              }}
            ></McImage>

            <View>
              <McText
                color="black"
                size={16}
                style={{ fontFamily: "SourceSansPro-SemiBold" }}
              >
                {selectedArticle?.author.name}
              </McText>
              <McText
                color="black"
                size={12}
                style={{ fontFamily: "SourceSansPro-Regular" }}
              >
                {moment(selectedArticle?.date).format("MMMM DD, YYYY")}
              </McText>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <McImage source={Images.Likes} style={{ marginRight: 8 }} />
              <McText
                color="black"
                size={12}
                style={{ fontFamily: "SourceSansPro-Regular" }}
              >
                {selectedArticle?.likes}
              </McText>
              <McImage
                source={Images.Comments}
                style={{ marginRight: 8, marginLeft: 15 }}
              />
              <McText
                color="black"
                size={12}
                style={{ fontFamily: "SourceSansPro-Regular" }}
              >
                {selectedArticle?.comments}
              </McText>
            </View>
          </View>
        </AuthorSection>
        {/* Article contect section */}
        <View>
          <McText
            size={14}
            color="black"
            style={{
              fontFamily: "Inter-Regular",
              lineHeight: 29,
            }}
          >
            {selectedArticle?.detail}
          </McText>
          <LinearGradient
            colors={["#EAEBFF", "#181829"]}
            start={{ x: 1, y: 0.6 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1 }}
          />
        </View>
      </ScrollView>
      {/* Bottom button section */}
      <BottomButton onPress={() => {}}>
        <View style={{ flexDirection: "row" }}>
          <McText size={18} style={{ fontFamily: "Inter-SemiBold" }}>
            Read More
          </McText>
          <McImage source={Images.Down} style={{ marginLeft: 8 }} />
        </View>
      </BottomButton>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;
const HeaderImage = styled.ImageBackground`
  width: 96%;
  height: 60%;
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 40px;
  margin: 0px 4%;
`;
const HeaderButtonSection = styled.View`
  margin: 0px 4%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ShareCircle = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 52px;
  background-color: ${(props) => Colors.background};
  justify-content: center;
  align-items: center;
`;
const TitleSection = styled.View`
  margin: 54% 16px 0px;
`;
const AuthorSection = styled.View`
  height: 38px;
  margin: 15px 16px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
const BottomButton = styled.TouchableOpacity`
  width: 262px;
  height: 56px;
  border-radius: 27.5px;
  background-color: ${(props) => Colors.background};
  margin: 0px 56px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 22px;
`;
export default ArticleDetail;
