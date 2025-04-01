import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
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
      <Pressable onPress={() => console.log("from Image Press")}>
        <Image pres source={logoImg} style={{ width: 200, height: 200 }} />
      </Pressable>
    </View>
  );
}
