import BookBK from "./bookBK";
import AdvertAD from "./advertAD";
import CourseSC from "./courseCS";
import PublishBook from "./publishBook";
import CreateCourse from "./CreateCourses";
import CreateAdvert from "./CreateAdvert";
import Analysis from "./Analysis";
import React, { useState, useEffect } from "react";
const ArticleDetail = ({ navigation, route }) => {
  const [view, veiwer] = useState(1);
  useEffect(() => {
    if (route.params) {
      let { page } = route.params;
      veiwer(page);
    }
  }, []);
  if (view === 1) {
    return <PublishBook navigation={navigation} />;
  }
  if (view === 2) {
    return <CreateCourse navigation={navigation} />;
  }
  if (view === 3) {
    return <CreateAdvert navigation={navigation} />;
  }
  if (view === 4) {
    return <Analysis navigation={navigation} />;
  }
  if (view === 5) {
    return <BookBK navigation={navigation} />;
  }
  if (view === 6) {
    return <CourseSC navigation={navigation} />;
  }
  if (view === 7) {
    return <AdvertAD navigation={navigation} />;
  }
  return <PublishBook navigation={navigation} />;
};

export default ArticleDetail;
