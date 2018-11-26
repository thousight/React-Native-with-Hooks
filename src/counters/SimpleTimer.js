import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const SimpleTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const timer = setTimeout(() => setSeconds(seconds + 1), 1000)

  useEffect(() => () => clearTimeout(timer), [])

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Simple Timer</Text>
      <Text style={styles.welcome}>{seconds} seconds passed...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

export default SimpleTimer;
