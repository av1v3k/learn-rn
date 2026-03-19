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
    32. flexWrap - if less height in container and items needs to wrap without space.
    33. alignContent -
            - There must be minimum 2 or multiple row/column in the area.
            - if space-* must work, the child element must have width and height.
    34. gap - has 3 properties
            - rowGap: 20, columnGap: 10, gap: 5
    35. flexBasis - determines initial size of the flex item.
                    - alternative to using height and width flex properties in flex layouts.
                    - question: if flexbasis & height in another item, with flex:1 for each item, what will be the effect ?
                    - ans: The flexBasis: 100 item will distribute the height proportionally.
    36. flexShrink - determines how children along the main axis shrink along the main axis.
                   - this property is relative to other items in the container.
    37. flexGrow - determines how the children along the main axis must grow inside the container for each individual item.
                 - flex vs flexGrow - when flex is set, it is equivalent to setting flexGrow with same '+'ve number.
                 - This also sets flexShrink to 1, flexBasis to 0
    38. Relative & absolute layout - Relative: it affects the normal layout of the box.
                                   - absolute: it does not participate in the normal flow of the layout. It is laid out independently of its siblings.
    39. Dynamic User Interfaces - How will you make responsive to all phones and tablets ?
    40. Dimensions API - API which is exposed by RN for getting the screen/window
                        - screen - including statusbar,
                        - window - visible area of the app
    41.Dimensions API drawback - changing "orientation" property in app.json file to "default" makes the orientation change in actual Android Device.
                                - But, there is a problem here. It doesn't look as responsive and the value doesn't dynamically change, though we have the logic in place. why ?
                                - The code looks tidy & verbose, so use useWindowDimensions API.
    42. useWindowDimensions
