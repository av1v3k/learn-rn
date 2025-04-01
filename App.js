import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
} from "react-native";
const logoImg = require("./assets/adaptive-icon.png");
const logoImg2 = "https://picsum.photos/200";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "plum",
        flex: 1,
        padding: 40,
      }}
    >
      <Button
        title="Press"
        onPress={() => console.log("Pressed")}
        color={"black"}
      ></Button>
    </View>
  );
}
