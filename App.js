import { View, StyleSheet, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          styles.lightBlueBg,
          styles.boxShadow,
          styles.androidShadow,
        ]}
      >
        <Text>Hello</Text>
      </View>
      <View
        style={[
          styles.box,
          styles.lightGreenBg,
          styles.boxShadow,
          styles.androidShadow,
        ]}
      >
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
  },
  lightBlueBg: {
    backgroundColor: "lightblue",
  },
  lightGreenBg: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowColor: "red",
    shadowOpacity: 0.7,
    shadowRadius: 4,
    shadowOffset: {
      width: 6,
      height: 6,
    },
  },
  androidShadow: {
    elevation: 75,
  },
});
