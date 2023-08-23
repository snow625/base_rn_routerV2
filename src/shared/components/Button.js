import { StyleSheet, Button as RNButton } from "react-native";
import React from "react";

const Button = (props) => {
  const { onPress, text } = props;

  return <RNButton title={text} onPress={onPress} />;
};

export default Button;

const styles = StyleSheet.create({});
