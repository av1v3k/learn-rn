import { View, StatusBar, Button, Alert } from "react-native";
import { useState } from "react";
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
      <Button
        title="Toggle Bar"
        onPress={() => {
          setStatusBarVisible(!isStatusBarVisible);
          Alert.alert("Caution", "It is not updated.", [
            {
              text: "Cancel",
              style: "cancel",
              onPress: () => {
                console.log("cancelled");
              },
            },
            {
              text: "Ok",
              isPreferred: true,
              style: "destructive",
              onPress: () => {
                console.log("Accepted");
              },
            },
          ]);
        }}
      ></Button>
    </View>
  );
}
