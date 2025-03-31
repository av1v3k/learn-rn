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
        style={{
          backgroundColor: "#FFFFFF",
          width: 200,
          height: 200,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#000" }}>Hello</Text>
      </View>
      <View
        style={{
          backgroundColor: "teal",
          width: 200,
          height: 200,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#ACC" }}>world</Text>
      </View>
    </View>
  );
}
