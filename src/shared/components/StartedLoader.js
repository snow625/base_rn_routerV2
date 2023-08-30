import { Text, StyleSheet, StatusBar, Animated, Dimensions, View, Platform } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

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
    <View style={s.container}>
      <Animated.Image
        style={{
          opacity: 1,
          width: 100,
          height: 100,
          transform: [{ rotate: RotateData }],
        }}
        source={require("@assets/loaders/logo.png")}
      />
    </View>
  );
};

StartedLoader.defaultProps = {};

export default StartedLoader;

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
