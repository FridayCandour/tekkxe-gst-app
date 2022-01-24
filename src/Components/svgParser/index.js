import { Image } from "react-native"
import View from "react-native-gesture-handler/lib/typescript/GestureHandlerRootView"

const SvgParser = ({ }) => {
    return (
      <View>
        <Image
          source={require("/home/uiedbook/projects/dev/tekkxe-gst-app/assets/svg.svg")}
        />{" "}
      </View>
    );
}