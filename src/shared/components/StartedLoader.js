import { Text, StyleSheet, StatusBar, Animated, Dimensions, View, Platform } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { Ionicons } from "@expo/vector-icons";

const StartedLoader = (props) => {
  // const {} = props;
  let rotateValueHolder = new Animated.Value(0);

  const startImageRotateFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: Platform.OS === "ios" ? false : true,
    }).start(() => startImageRotateFunction());
  };

  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  startImageRotateFunction();

  return (
    <View style={s.containerPosition}>
      <Animated.View
        style={{
          opacity: 1,
          width: 110,
          height: 110,
          transform: [{ rotate: RotateData }],
        }}
      >
        <Ionicons name="md-logo-react" size={90} color="white" />
      </Animated.View>
    </View>
  );
};

StartedLoader.defaultProps = {};

export default StartedLoader;

const s = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor: "white",
  // },
  containerPosition: {
    position: "absolute",
    width: windowWidth,
    height: windowHeight,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#556278",
  },
});
