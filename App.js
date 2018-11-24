import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>You clicked {count} times</Text>
      <Button onPress={() => setCount(count + 1)} title="Click me" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

export default App;
