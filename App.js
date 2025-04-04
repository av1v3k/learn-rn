import { View, StyleSheet, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "plum",
    flex: 1,
    padding: 40,
  },
});
