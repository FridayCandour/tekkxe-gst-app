import React, { useState, useEffect } from "react";
import { View } from "react-native";
// import CountDown from "react-native-countdown-component";
import moment from "moment";

const Timer = () => {
  const [totalDuration, setTotalDuration] = useState(0);
  useEffect(() => {
    const date = moment().utcOffset("+05:50").format("YYYY-MM-DD hh:mm:ss");
    const expirydate = "2020-12-23 04:00:05";
    const diffr = moment.duration(moment(expirydate).diff(moment(date)));
    const hours = parseInt(diffr.asHours());
    const minutes = parseInt(diffr.minutes());
    const seconds = parseInt(diffr.seconds());
    const d = hours * 60 * 60 + minutes * 60 + seconds;
    setTotalDuration(d);
  }, []);
  return (
    <View
      style={{
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <CountDown
        until={totalDuration}
        timetoShow={("H", "M", "S")}
        onFinish={() => alert("finished")}
        size={20}
      /> */}
    </View>
  );
};
export default Timer;
