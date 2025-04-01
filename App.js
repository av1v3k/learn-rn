import { View, Text, Image, ImageBackground } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");
const logoImg2 = "https://picsum.photos/200";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "plum",
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      {/* <Image source={logoImg} style={{ width: 200, height: 200 }} />
      <Image source={{ uri: logoImg2 }} style={{ width: 200, height: 200 }} /> */}
      <ImageBackground
        source={logoImg}
        style={{
          // backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text>Hello</Text>
      </ImageBackground>

      {/* <View
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
      </View> */}
    </View>
  );
}
