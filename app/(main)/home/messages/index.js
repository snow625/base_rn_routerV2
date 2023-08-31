import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { headerOptions } from "@styles";
import { Link } from "expo-router";
const UsersRooms = () => {
  return (
    <View style={{ gap: 20, marginTop: 15 }}>
      <Link style={{ fontSize: 24 }} href="home/messages/Lucas">
        Messages with Lucas
      </Link>
      <Link style={{ fontSize: 24 }} href="home/messages/Alex">
        Messages with Alex
      </Link>
      <Link style={{ fontSize: 24 }} href="home/messages/Roman">
        Messages with Roman
      </Link>
    </View>
  );
};

export default UsersRooms;

const styles = StyleSheet.create({});
