import { View, StatusBar, Button } from "react-native";
import { useState } from "react";
const logoImg = require("./assets/adaptive-icon.png");
const logoImg2 = "https://picsum.photos/200";

export default function App() {
  const [isStatusBarVisible, setStatusBarVisible] = useState(false);

  return (
    <View
      style={{
        backgroundColor: "plum",
        flex: 1,
        padding: 40,
      }}
    >
      <StatusBar hidden={isStatusBarVisible} barStyle={"dark-content"} />
      <Button
        title="Toggle Bar"
        onPress={() => setStatusBarVisible(!isStatusBarVisible)}
      ></Button>
    </View>
  );
}
