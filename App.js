import { View, StyleSheet, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightBlueBg]}>
        <Text style={{ borderRadius: 43, backgroundColor: "red" }}>Hello</Text>
      </View>
      <View style={[styles.box, styles.lightGreenBg]}>
        <Text>Hello 2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "plum",
    flex: 1,
    padding: 40,
  },
  box: {
    width: "100",
    height: "100",
    paddingHorizontal: 10,
    paddingVertical: 30,
    marginVertical: 10,
    borderStyle: "dashed",
    borderColor: "black",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 22,
  },
  lightBlueBg: {
    backgroundColor: "lightblue",
  },
  lightGreenBg: {
    backgroundColor: "lightgreen",
  },
});
