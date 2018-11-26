import React from "react";
import { StyleSheet, View } from "react-native";

import SimpleCounter from './counters/SimpleCounter'
import SimpleTimer from './counters/SimpleTimer'

const App = () => (
  <View style={styles.container}>
    <SimpleCounter />
    <SimpleTimer />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
});

export default App;
