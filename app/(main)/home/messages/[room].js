import { StyleSheet, Text, View } from "react-native";
import { useSearchParams } from "expo-router";

const Room = () => {
  const { room } = useSearchParams();
  return (
    <View>
      <Text style={{ fontSize: 22 }}>messageRoom with @{room}</Text>
    </View>
  );
};

export default Room;

const styles = StyleSheet.create({});
