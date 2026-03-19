import { View, StyleSheet, Text } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "grey", flexShrink: 2 }}>
        {" "}
        Box 1- shrink
      </Box>
      <Box style={{ backgroundColor: "blue", flexShrink: 1 }}>
        Box 1 - shrink
      </Box>
      {/* <Box style={{ backgroundColor: "teal" }}>Box 1</Box>
      <Box style={{ backgroundColor: "#ab9156" }}>Box 1</Box>
      <Box style={{ backgroundColor: "#6b0803" }}> Box 1</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 1 </Box>
      <Box style={{ backgroundColor: "#b95f21" }}>Box 1 </Box> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 40,
    borderWidth: 5,
    borderColor: "red",
  },
});
