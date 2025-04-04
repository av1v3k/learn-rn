import { View, StatusBar, Button, Alert } from "react-native";
import { useState } from "react";
import Greet from "./components/Greet";
const logoImg = require("./assets/adaptive-icon.png");
const logoImg2 = "https://picsum.photos/200";

export default function App() {
  const [isStatusBarVisible, setStatusBarVisible] = useState(false);

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        padding: 40,
      }}
    >
      <Greet name="Tendulkar"></Greet>
      <Greet name="Phone"></Greet>
    </View>
  );
}
