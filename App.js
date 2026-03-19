import { View, StyleSheet, Text, useWindowDimensions } from "react-native";

export default function App() {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: windowWidth > 500 ? "60%" : "80%",
            height: windowHeight > 600 ? "50%" : "70%",
          },
        ]}
      >
        <Text
          style={[
            styles.text,
            {
              fontSize: windowWidth > 500 ? 50 : 24,
            },
          ]}
        >
          Welcome !
        </Text>
      </View>
    </View>
  );
}

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

// console.log("window width: ", windowWidth);
// console.log("window height: ", windowHeight);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    // width: "70%",
    // width: windowWidth > 500 ? "60%" : "80%",
    // height: "40%",
    // height: windowHeight > 600 ? "50%" : "70%",
    backgroundColor: "teal",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    // fontSize: windowWidth > 500 ? 50 : 24,
    color: "#FFFFFF",
  },
});
