import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../Constants/Colors";

function Button({ children, onPress }) {
  function handlePress() {
    onPress();
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        android_ripple={{ color: "lightgrey" }}
        onPress={handlePress}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    overflow: "hidden",
    marginBottom: 8,
    borderRadius: 28,
    width: "45%",
    marginHorizontal: 8,
  },
  buttonInnerContainer: {
    backgroundColor: Colors.secondary,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,

    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  pressed: {
    backgroundColor: Colors.primary,
  },
});
