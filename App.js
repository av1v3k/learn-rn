import { View, Text, Image, ImageBackground, ScrollView } from "react-native";
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
      <ScrollView>
        <Image source={logoImg} style={{ width: 200, height: 200 }} />
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>

        <Image source={logoImg} style={{ width: 200, height: 200 }} />
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <Image source={logoImg} style={{ width: 200, height: 200 }} />

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
      </ScrollView>
    </View>
  );
}
