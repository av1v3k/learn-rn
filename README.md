## Created the Project using below command

npx create-expo-app@latest . --template blank

### NOTE: Refer link here for more info: https://docs.expo.dev/more/create-expo/#--template

# Core-Components

    1. View
    2. Text
    3. Image & ImageBackground
    4. ScrollView
    5. Button
    6. Pressable
    7. Modal - props - visible, animationType, presentationStyle="pageSheet" Only works in iOS;
    8. StatusBar - props - barStyle={"dark-content"}, hidden, etc,..
    9. ActivityIndicator - props: animating, color, size
    10. Alert
    11. Custom Component
    12. Styling component - Inline, StyleSheet API, Multiple Styles
    13. Box model - paddingHorizontal, marginVertical, borderStyle, borderTopWidth, borderColor, borderRadius[works for <Text> comp in Android, but not in iOS; <View>'s borderRadius works for both platforms]
    14: BoxShadow - shadowColor: Only prop works in both platforms; Other props will not work in android. So, use elevation prop.
    15. Inheritance: There is no inheritance from View to Text component. But, Text -> Text it would inherit.
    17. Layouts with Flex - Opposite of Flex direction in web - Main Axis: Top to bottom; Cross Axis: Left to Right
                        - <View> Component is automatically a flex container.
                        - as main axis is from top to bottom, "flex: 1" will fill the entire column(Top to bottom)
                        - YT: 28: flexDirection - continue on it.... column, column-reverse, row, row-reverse
                        - flex: 1, can be given for parent to occupy entire height as main axis runs from Top to bottom
                        - by default all elements overflows when elements are more increase </Box> elements from all => 3
    29. justifyContent - possible values - center, flex-start, flex-end, space-between, space-evenly, space-around
    30. alignItems - Default is aligning the items from left to right.
    31. alignSelf - flex-start, flex-end, stretch, center, auto
                    - auto - takes parents elements alignItems property value.
