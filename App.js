import { View, Text } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "plum",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <View
        style={{ backgroundColor: "#FFFFFF", width: 200, height: 200 }}
      ></View>
      <View style={{ backgroundColor: "teal", width: 200, height: 200 }}></View>
    </View>
  );
}
