import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
} from "react-native";
import { useState } from "react";
const logoImg = require("./assets/adaptive-icon.png");
const logoImg2 = "https://picsum.photos/200";

export default function App() {
  const [isModalVisible, setisModalVisible] = useState(false);

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
      <Pressable
        onPress={() => {
          console.log("from Image Press");
          setisModalVisible(true);
        }}
      >
        <Image source={logoImg} style={{ width: 200, height: 200 }} />
      </Pressable>
      <Modal
        visible={isModalVisible}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 40 }}>
          <Button
            title="Close Modal"
            onPress={() => setisModalVisible(false)}
          ></Button>
        </View>
      </Modal>
    </View>
  );
}
